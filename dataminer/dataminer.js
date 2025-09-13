const fs = require("fs");
const path = require("path");
const fg = require("fast-glob");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const ROOT = path.join(process.argv[2] ?? "./src", "/app/_next/static/chunks");
const OUTPUT = process.argv[3] ?? path.join(process.argv[1].replace('dataminer.js', ''), `./output/${process.argv[2] ? process.argv[2].split('/')[2].replaceAll('.', '_') : 'src'}`);

const HTTP_METHODS = ["get", "post", "put", "delete", "patch", "head", "options"];

// === experiments ===
const experiments = [];

function isHttpMethodCallee(node) {
    if (node?.type !== "MemberExpression") return false;

    const isTargetMethod =
    (!node.computed &&
    node.property?.type === "Identifier" &&
    HTTP_METHODS.includes(node.property.name)) ||
    (node.computed &&
    node.property?.type === "StringLiteral" &&
    HTTP_METHODS.includes(node.property.value));

    if (!isTargetMethod) return false;

    const obj = node.object;
    const isHttpClientProp =
    obj?.type === "MemberExpression" &&
    (
    (!obj.computed && obj.property?.type === "Identifier" && obj.property.name === "httpClient") ||
    (obj.computed && obj.property?.type === "StringLiteral" && obj.property.value === "httpClient")
    ) &&
    obj.object?.type === "ThisExpression";

    return isHttpClientProp;
}

function isDirectlyAwaited(callPath) {
    let p = callPath.parentPath;
    while (p && p.node?.type === "ParenthesizedExpression") p = p.parentPath;
    return p?.node?.type === "AwaitExpression";
}

// === нормализация endpoint ===
function normalizeEndpoint(node, callPath) {
    if (!node) return null;

    switch (node.type) {
        case "StringLiteral":
            return node.value;

        case "TemplateLiteral": {
            return node.quasis
            .map((q, i) => {
                const expr = node.expressions[i];
                const val = expr ? normalizeEndpoint(expr, callPath) : "";
                return q.value.cooked + val;
            })
            .join("");
        }

        case "BinaryExpression":
            if (node.operator === "+") {
                return normalizeEndpoint(node.left, callPath) + normalizeEndpoint(node.right, callPath);
            }
            return generate(node).code;

        case "CallExpression": {
            // "xxx".concat(...)
            if (
            node.callee.type === "MemberExpression" &&
            node.callee.property.type === "Identifier" &&
            node.callee.property.name === "concat"
            ) {
                const base = normalizeEndpoint(node.callee.object, callPath);
                const args = node.arguments.map((a) => normalizeEndpoint(a, callPath)).join("");
                return base + args;
            }
            return generate(node).code;
        }

        case "MemberExpression": {
            // Например t.url
            node.__endpointSource = generate(node, { concise: true }).code;
            node.__unsure = true;
            if (node.property.type === "Identifier") {
                return `:${node.property.name}`;
            }
            return `:${generate(node.property).code}`;
        }

        case "Identifier": {
            // Попытка найти объявление переменной
            let binding = null;
            if (callPath && callPath.scope) {
                binding = callPath.scope.getBinding(node.name);
            }

            if (binding && binding.path.node.type === "VariableDeclarator" && binding.path.node.init) {
                const initCode = generate(binding.path.node.init, { concise: true }).code;
                node.__endpointSource = initCode;
                node.__unsure = true;
            } else {
                node.__endpointSource = node.name;
                node.__unsure = true;
            }

            return `:${node.name}`;
        }

        default:
            return generate(node).code;
    }
}

function extractKeysFromValue(valueNode, path) {
    if (!valueNode) return null;

    // Helper to extract keys from ObjectExpression node
    const keysFromObject = (obj) =>
    obj.properties
    .map((prop) => {
        if (prop.type === "ObjectProperty") {
            if (prop.key.type === "Identifier") return prop.key.name;
            if (prop.key.type === "StringLiteral") return prop.key.value;
        }
        return null;
    })
    .filter(Boolean);

    // Resolve Identifier by finding its binding and following initializer
    if (valueNode.type === "Identifier") {
        const name = valueNode.name;
        if (!path || !path.scope) return null;
        const binding = path.scope.getBinding(name);
        if (binding && binding.path && binding.path.node) {
            const init = binding.path.node.init;
            if (init) {
                // рекурсивно обработаем инициализатор (передаём binding.path как контекст)
                return extractKeysFromValue(init, binding.path);
            }
        }
        return null;
    }

    // If it's an object literal — simple case
    if (valueNode.type === "ObjectExpression") {
        return keysFromObject(valueNode);
    }

    // If it's a call like (0, r.F)({...}) — проверим аргументы на объекты
    if (valueNode.type === "CallExpression") {
        const keys = [];
        for (const arg of valueNode.arguments) {
            if (arg.type === "ObjectExpression") {
                keys.push(...keysFromObject(arg));
            } else if (arg.type === "Identifier") {
                const nested = extractKeysFromValue(arg, path);
                if (nested) keys.push(...nested);
            } else if (arg.type === "CallExpression") {
                const nested = extractKeysFromValue(arg, path);
                if (nested) keys.push(...nested);
            }
        }
        return keys.length ? keys : null;
    }

    // If it's a sequence/expression that wraps an object: try to be permissive
    // e.g. (0, r.P)({...}) was handled, but also maybe other wrappers — we can try to see if node has .arguments or .left/right
    if (valueNode.type === "SequenceExpression") {
        for (const expr of valueNode.expressions) {
            const found = extractKeysFromValue(expr, path);
            if (found) return found;
        }
    }

    // fallback: no keys
    return null;
}

function extractOptionsFromObject(objNode, path) {
    let searchParams = null;
    let searchParamsFormatted = null;
    let json = null;
    let jsonFormatted = null;

    for (const prop of objNode.properties) {
        if (prop.type !== "ObjectProperty") continue;

        // --- searchParams ---
        if (
        (prop.key.type === "Identifier" && prop.key.name === "searchParams") ||
        (prop.key.type === "StringLiteral" && prop.key.value === "searchParams")
        ) {
            searchParams = generate(prop.value ?? prop, { concise: true }).code;
            searchParamsFormatted = extractKeysFromValue(prop.value ?? prop, path);
        }

        // --- json ---
        if (
        (prop.key.type === "Identifier" && prop.key.name === "json") ||
        (prop.key.type === "StringLiteral" && prop.key.value === "json")
        ) {
            json = generate(prop.value ?? prop, { concise: true }).code;
            jsonFormatted = extractKeysFromValue(prop.value ?? prop, path);
        }
    }

    return { searchParams, searchParamsFormatted, json, jsonFormatted };
}

function processNodeRecursive(node, path) {
    let searchParams = null;
    let searchParamsFormatted = null;
    let json = null;
    let jsonFormatted = null;

    if (!node) return { searchParams, searchParamsFormatted, json, jsonFormatted };

    if (node.type === "ObjectExpression") {
        const extracted = extractOptionsFromObject(node, path);
        return extracted;
    }

    if (node.type === "CallExpression") {
        // проверяем аргументы рекурсивно (поддерживаем обёртки createHttpOptions(...), wrap(...createHttpOptions(...)) и т.п.)
        for (const arg of node.arguments) {
            const extracted = processNodeRecursive(arg, path);
            searchParams = searchParams ?? extracted.searchParams;
            searchParamsFormatted = searchParamsFormatted ?? extracted.searchParamsFormatted;
            json = json ?? extracted.json;
            jsonFormatted = jsonFormatted ?? extracted.jsonFormatted;
            // если все нашли - можем сразу вернуть
            if (searchParams && json) break;
        }
        return { searchParams, searchParamsFormatted, json, jsonFormatted };
    }

    if (node.type === "Identifier") {
        // пытаемся найти binding и обработать инициализатор
        if (path && path.scope) {
            const binding = path.scope.getBinding(node.name);
            if (binding && binding.path && binding.path.node && binding.path.node.init) {
                return processNodeRecursive(binding.path.node.init, binding.path);
            }
        }
        return { searchParams, searchParamsFormatted, json, jsonFormatted };
    }

    // SequenceExpression (a, b, {...}) - проверим вложенные выражения
    if (node.type === "SequenceExpression") {
        for (const expr of node.expressions) {
            const extracted = processNodeRecursive(expr, path);
            searchParams = searchParams ?? extracted.searchParams;
            searchParamsFormatted = searchParamsFormatted ?? extracted.searchParamsFormatted;
            json = json ?? extracted.json;
            jsonFormatted = jsonFormatted ?? extracted.jsonFormatted;
        }
        return { searchParams, searchParamsFormatted, json, jsonFormatted };
    }

    return { searchParams, searchParamsFormatted, json, jsonFormatted };
}


function extractEndpointAndOptions(callNode, callPath) {
    const args = callNode.arguments;
    let endpoint = null;
    let unsureEndpoint = false;
    let endpointSource = null;

    if (args.length > 0) {
        endpoint = normalizeEndpoint(args[0], callPath);

        if (args[0].__unsure) {
            unsureEndpoint = true;
            endpointSource = args[0].__endpointSource;
        }
    }

    let searchParams = null;
    let searchParamsFormatted = null;
    let json = null;
    let jsonFormatted = null;

    if (args.length > 1) {
        const second = args[1];
        ({ searchParams, searchParamsFormatted, json, jsonFormatted } =
        processNodeRecursive(second, callPath));
    }

    return {
        endpoint,
        searchParams,
        searchParamsFormatted,
        json,
        jsonFormatted,
        unsureEndpoint,
        endpointSource
    };
}

function getEnclosingFunctionName(callPath) {
    let p = callPath;
    while (p) {
        const n = p.node;
        if (n.type === "FunctionDeclaration" && n.id) {
            return n.id.name;
        }
        if ((n.type === "FunctionExpression" || n.type === "ArrowFunctionExpression") && p.parentPath) {
            // Может быть метод объекта или класс
            const parent = p.parentPath.node;
            if (parent.type === "ObjectProperty" && parent.key.type === "Identifier") {
                return parent.key.name;
            }
            if (parent.type === "ClassMethod" && parent.key.type === "Identifier") {
                return parent.key.name;
            }
            if (parent.type === "VariableDeclarator" && parent.id.type === "Identifier") {
                return parent.id.name;
            }
        }
        if (n.type === "ClassMethod" || n.type === "ObjectMethod") {
            if (n.key.type === "Identifier") return n.key.name;
            if (n.key.type === "StringLiteral") return n.key.value;
        }
        p = p.parentPath;
    }
    return null;
}

function generateSimpleRoutesListFromResults(results) {
    if (!results) return null;

    const routes = {};

    for (const item of results) {
        if (!item.endpoint || item.unsureEndpoint) continue;

        let endpointString = `${item.method} ${item.formated.endpoint}`

        if (item.formated.searchParamKeys) endpointString = endpointString.concat('?', item.formated.searchParamKeys.map(item=>`${item}=[${item}]`).join('&'));

        if (item.formated.jsonBodyKeys) endpointString = endpointString.concat(' { ', item.formated.jsonBodyKeys.join(', '), ' }');

        const name = item.name ?? item.endpoint;
        let uniqueName = name;
        let counter = 1;
        while (routes[uniqueName] && routes[uniqueName] !== endpointString) {
            const uniqueNameBrackets = [item.formated.endpoint.split('/')[1]];
            if (counter > 1) uniqueNameBrackets.push(counter);
            uniqueName = `${name} (${uniqueNameBrackets.join(' ')})`;
            counter++
        }

        routes[uniqueName] = endpointString;
    }

    return routes;
}

(async function main() {
    console.time('Анализ завершён за');
    console.log(`\n🔍 Поиск JS/TS файлов в папке: ${ROOT}`);

    const files = await fg(["**/*.{js,mjs,cjs,jsx,ts,tsx}"], {
        cwd: ROOT,
        ignore: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/.git/**"],
        absolute: true,
    });

    console.log(`📂 Найдено файлов: ${files.length}\n`);

    const results = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const relPath = path.relative(process.cwd(), file);

        process.stdout.write(`📄 Обработка ${i + 1}/${files.length}: ${relPath} ...\r`);

        let code;
        try {
            code = fs.readFileSync(file, "utf8");
        } catch (err) {
            console.error(
              `\n\n❌ Ошибка чтения файла ${relPath}: ${err.message}\n`,
            );
            continue;
        }

        let ast;
        try {
            ast = parser.parse(code, {
                sourceType: "unambiguous",
                plugins: [
                    "jsx",
                    "typescript",
                    "classProperties",
                    "classPrivateProperties",
                    "classPrivateMethods",
                    "decorators-legacy",
                    "dynamicImport",
                    "optionalChaining",
                    "nullishCoalescingOperator",
                    "topLevelAwait",
                    "objectRestSpread",
                ],
            });
        } catch (err) {
            console.error(
              `\n\n❌ Ошибка парсинга ${relPath}: ${err.message}\n`,
            );
            continue;
        }

        try {
            traverse(ast, {
                CallExpression(callPath) {
                    if (!isHttpMethodCallee(callPath.node.callee)) return;
                    if (!isDirectlyAwaited(callPath)) return;

                    const { endpoint, searchParams, searchParamsFormatted, json, jsonFormatted, unsureEndpoint, endpointSource } =
                    extractEndpointAndOptions(callPath.node, callPath);
                    const functionName = getEnclosingFunctionName(callPath);
                    const result = {
                        name: functionName,
                        method: (callPath.node.callee.property.name ?? callPath.node.callee.property.value).toUpperCase(),
                        endpoint,
                        searchParamKeys: searchParams,
                        jsonBodyKeys: json,
                        formated: {
                            endpoint: "/".concat(endpoint),
                            searchParamKeys: searchParamsFormatted,
                            jsonBodyKeys: jsonFormatted,
                        },
                        position: {
                            file: relPath,
                            line: callPath.node.loc?.start.line ?? null,
                            column: callPath.node.loc?.start.column ?? null,
                        }
                    };

                    if (unsureEndpoint) {
                        result.unsureEndpoint = true;
                        result.endpointSource = endpointSource;
                    }

                    results.push(result);
                },

                AssignmentExpression(path) {
                    const { node } = path;

                    // Ищем присваивание вида ANY.WebNext = "WebNext"
                    const isWebNextMarker =
                    node.left.type === "MemberExpression" &&
                    node.left.property.type === "Identifier" &&
                    node.left.property.name === "WebNext" &&
                    node.right.type === "StringLiteral" &&
                    node.right.value === "WebNext";

                    if (!isWebNextMarker) return;

                    // Находим SequenceExpression-родителя (если есть)
                    let seqNode = path.parentPath.node;
                    if (seqNode.type === "SequenceExpression") {
                        for (const expr of seqNode.expressions) {
                            if (
                            expr.type === "AssignmentExpression" &&
                            expr.left.type === "MemberExpression" &&
                            expr.left.property.type === "Identifier"
                            ) {
                                experiments.push(expr.left.property.name);
                            }
                        }
                    } else {
                        // Иногда присваивания идут без SequenceExpression (редко, но на всякий случай)
                        experiments.push(node.left.property.name);
                    }

                    console.log(
                      `\n\n🔬 Найден реестр экспериментов, всего ключей: ${experiments.length}\n`,
                    );
                }
            });
        } catch (err) {
            console.error(
              `\n\n❌ Ошибка обхода AST в ${relPath}: ${err.message}\n`,
            );
        }
    }

    console.log(`\n\n\n✅ Готово.\n🌐 Роутов найдено: ${results.length}`);
    console.log(`🔬 Экспериментов найдено: ${experiments.length}`);

    console.log(`\nСортирую результаты...`);
    console.time(`Сортировка завершена`);
    results.sort((a, b) => (a.formated.endpoint ?? "").localeCompare(b.formated.endpoint ?? ""));
    experiments.sort((a, b) => a.localeCompare(b));
    console.timeEnd(`Сортировка завершена`);
    console.timeEnd('Анализ завершён за');

    try {
        fs.mkdirSync(OUTPUT, { recursive: true });
        fs.writeFileSync(path.join(OUTPUT, 'detailedRoutes.json'), JSON.stringify(results, null, 2), "utf8");
        fs.writeFileSync(path.join(OUTPUT, 'simpleRoutes.json'), JSON.stringify(generateSimpleRoutesListFromResults(results), null, 2), "utf8");
        fs.writeFileSync(path.join(OUTPUT, 'experiments.json'), JSON.stringify([...new Set(experiments)], null, 2), "utf8");
        console.log(`\n💾 Результат сохранён в ${OUTPUT}`);
    } catch (err) {
        console.error(`\n❌ Ошибка записи файла ${OUTPUT}: ${err.message}\n`);
    }
    console.log('\n\n');
})();
