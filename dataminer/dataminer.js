const fs = require("fs");
const path = require("path");
const fg = require("fast-glob");
const parser = require("@babel/parser");
const semver = require('semver');
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const EXTRACTED = './extracted';

function getSortedVersionList() {
    const versions = fs.readdirSync(EXTRACTED).filter(f => (fs.statSync(path.join(EXTRACTED, f)).isDirectory() && !(f.endsWith('@pure') || f.endsWith('@archive') || f.endsWith('@beta') || f.endsWith('@modded'))));
    return versions
    .map((value) => value.replaceAll("_", "."))
    .sort((a, b) => semver.rcompare(a, b))
    //.map((value) => value.replaceAll(".", "_"));
}

const versionList = getSortedVersionList();
if (!versionList || !versionList.length) {
    console.warn(`\n❌ Не найдены папки с версиями в ${EXTRACTED}. Фоллбек на ./src\n`);
}

console.log(`Используемые версии: ${versionList.join(', ')}`);

const ROOT = process.argv[2] ?? (versionList?.[0] ? path.join(EXTRACTED, versionList?.[0]) : undefined ) ?? "./src"
const APP_CHUNKS_ROOT = path.join(ROOT, "/app/_next/static/chunks");
const MAIN_TRANSLATIONS_ROOT = path.join(ROOT, "/main/translations/compiled");
const OUTPUT = process.argv[3] ?? path.join(process.argv[1].replace('dataminer.js', ''), `./output/${process.argv[2]?.split('/')?.at(process.argv[2].endsWith('/') ? -2 : -1)?.replaceAll('.', '_') ?? (versionList?.[0] ? versionList?.[0].replaceAll('.', '_') : undefined ) ?? 'src'}`);

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

function isBranchNode(el) {
    return el && (el.type === 5 || el.type === 6); // select или plural
}

function hasPlaceholder(elements = [], argName) {
    for (const el of elements) {
        if (!el) continue;
        if (el.type === 1 && el.value === argName) return true;
        if (el.type === 7 && argName) return true; // '#' inside plural
        if (el.type === 8 && el.children && hasPlaceholder(el.children, argName)) return true;
        if (Array.isArray(el.value) && hasPlaceholder(el.value, argName)) return true;
    }
    return false;
}

function elementToText(el, pluralVar) {
    if (!el) return '';
    switch (el.type) {
        case 0: // literal
            return el.value || '';
        case 1: // argument / placeholder
            if (el.value === 'nbsp') return '\u00A0';
            if (el.value === 'br') return '\n';
            return `{${el.value}}`;
        case 2: // number
        case 3: // date
        case 4: // time
            // упрощённо: оставляем {name}
            return `{${el.value}}`;
        case 7: // pound (#) inside plural
            return pluralVar ? `{${pluralVar}}` : '#';
        case 8: // tag with children
            // сохраняем содержимое тегов как текст (можно расширить)
            return (el.children || []).map(child => elementToText(child, pluralVar)).join('');
        default:
            return '';
    }
}

function elementsToString(elements = [], pluralVar) {
    return (elements || []).map(el => {
        // для вложенных option.value может быть plain array
        if (!el) return '';
        if (el.type === 5 || el.type === 6) {
            // не ожидаем вложенных branch-узлов тут для простой строки
            return '';
        }
        return elementToText(el, pluralVar);
    }).join('').replaceAll('\n', '\\n').replaceAll('\u00A0', ' ');
}

/**
 * Если elements не содержат select/plural => возвращает строку.
 * Если содержат один branching node (select/plural) => возвращает объект опций.
 * (Если несколько branching nodes — обрабатывает первый встреченный.)
 */
function compileElements(elements = []) {
    // найти первый branching-узел
    const idx = elements.findIndex(isBranchNode);
    if (idx === -1) {
        return elementsToString(elements);
    }

    const branch = elements[idx];
    const prefix = elements.slice(0, idx);
    const suffix = elements.slice(idx + 1);

    const out = {};
    const pluralVar = branch.value; // имя переменной, например "count" для plural
    const options = branch.options || {};

    for (const key of Object.keys(options)) {
        const opt = options[key];
        // option может хранить value (array) либо children
        const optElements = opt.value || opt.children || [];
        const optText = elementsToString(optElements, pluralVar);
        const preText = elementsToString(prefix, pluralVar);
        const postText = elementsToString(suffix, pluralVar);

        let combined = preText + optText + postText;

        // для plural (type 6) гарантируем наличие плейсхолдера {var} в опции
        if (branch.type === 6) {
            if (!hasPlaceholder(optElements.concat(prefix, suffix), pluralVar)) {
                // если плейсхолдер явно отсутствует — добавим после текста (без лишнего пробела если уже есть)
                if (combined && !combined.endsWith(' ')) combined += ' ';
                combined += `{${pluralVar}}`;
            }
        }

        out[key] = combined;
    }
    return out;
}

function compileMessages(messages) {
    const out = {};
    for (const key of Object.keys(messages)) {
        const msg = messages[key];
        // ожидается, что msg — массив элементов (FormatJS AST root message)
        // иногда msg — массив из мета и элементов, возьмём только элементы (если структура сложнее — адаптируйте)
        const elements = Array.isArray(msg) ? msg : [];
        const compiled = compileElements(elements);
        out[key] = compiled;
    }
    return out;
}

function createOutputJson(data, fileName) {
    try {
        fs.writeFileSync(path.join(OUTPUT, fileName), JSON.stringify(data, null, 2), "utf8");
        console.log(`💾 ${fileName} сохранён`);
    } catch (err) {
        console.error(`\n❌ Ошибка записи файла ${fileName} в ${OUTPUT}: ${err.message}\n`);
    }
}

(async function main() {
    console.time('Анализ завершён за');
    console.log(`\n🔍 Поиск JS/TS файлов в папке: ${APP_CHUNKS_ROOT}`);

    const files = await fg(["**/*.{js,mjs,cjs,jsx,ts,tsx}"], {
        cwd: APP_CHUNKS_ROOT,
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

    console.log('Анализ файлов локализации...');

    const raw = fs.readFileSync(path.join(MAIN_TRANSLATIONS_ROOT, 'ru.json'), 'utf8');
    const messages = JSON.parse(raw);
    const compiled = compileMessages(messages);

    console.log('Анализ файлов локализации завершён...');

    console.log(`\n\n\n✅ Готово\n🌐 Роутов найдено: ${results.length}`);
    console.log(`🔬 Экспериментов найдено: ${experiments.length}`);
    console.log(`💬 Локализованных сообщений: ${Object.keys(compiled).length}`);

    console.log(`\nСортирую результаты...`);
    console.time(`Сортировка завершена`);
    results.sort((a, b) => (a.formated.endpoint ?? "").localeCompare(b.formated.endpoint ?? ""));
    experiments.sort((a, b) => a.localeCompare(b));
    console.timeEnd(`Сортировка завершена`);
    console.timeEnd('Анализ завершён за');

    console.log('');

    try {
        fs.mkdirSync(OUTPUT, { recursive: true });
        createOutputJson(results, 'detailedRoutes.json');
        createOutputJson(generateSimpleRoutesListFromResults(results), 'simpleRoutes.json');
        createOutputJson([...new Set(experiments)], 'experiments.json');
        createOutputJson(compiled, 'formatted_ru.json');
        console.log(`\n💾 Результаты сохранёны в ${OUTPUT}`);
    } catch (err) {
        console.error(`\n❌ Ошибка записи файла ${OUTPUT}: ${err.message}\n`);
    }
    console.log('\n\n');
})();
