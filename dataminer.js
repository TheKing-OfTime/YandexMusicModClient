const fs = require("fs");
const path = require("path");
const fg = require("fast-glob");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const ROOT = path.join(process.argv[2] ?? "./src", "/app/_next/static/chunks");
const OUTPUT = process.argv[3] ?? "dataminer-output.json";

// Список поддерживаемых методов httpClient
const HTTP_METHODS = ["get", "post", "put", "delete", "patch", "head", "options"];

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
function normalizeEndpoint(node) {
    if (!node) return null;

    switch (node.type) {
        case "StringLiteral":
            return node.value;

        case "TemplateLiteral": {
            return node.quasis
            .map((q, i) => {
                const expr = node.expressions[i];
                const val = expr ? normalizeEndpoint(expr) : "";
                return q.value.cooked + val;
            })
            .join("");
        }

        case "BinaryExpression":
            if (node.operator === "+") {
                return normalizeEndpoint(node.left) + normalizeEndpoint(node.right);
            }
            return generate(node).code;

        case "CallExpression": {
            // "xxx".concat(...)
            if (
            node.callee.type === "MemberExpression" &&
            node.callee.property.type === "Identifier" &&
            node.callee.property.name === "concat"
            ) {
                const base = normalizeEndpoint(node.callee.object);
                const args = node.arguments.map(normalizeEndpoint).join("");
                return base + args;
            }
            return generate(node).code;
        }

        case "MemberExpression":
            if (node.property.type === "Identifier") {
                return `:${node.property.name}`;
            }
            return `:${generate(node.property).code}`;

        case "Identifier":
            return `:${node.name}`;

        default:
            return generate(node).code;
    }
}

function extractEndpointAndOptions(callNode) {
    const args = callNode.arguments;
    let endpoint = null;
    let searchParams = null;
    let searchParamsFormatted = null;
    let json = null;
    let jsonFormatted = null;

    if (args.length > 0) {
        endpoint = normalizeEndpoint(args[0]);
    }

    if (args.length > 1 && args[1].type === "ObjectExpression") {
        for (const prop of args[1].properties) {
            if (prop.type !== "ObjectProperty") continue;

            // --- searchParams ---
            if (
            (prop.key.type === "Identifier" && prop.key.name === "searchParams") ||
            (prop.key.type === "StringLiteral" && prop.key.value === "searchParams")
            ) {
                searchParams = generate(prop.value ?? prop, { concise: true }).code;
                searchParamsFormatted = extractKeysFromValue(prop.value ?? prop);
            }

            // --- json ---
            if (
            (prop.key.type === "Identifier" && prop.key.name === "json") ||
            (prop.key.type === "StringLiteral" && prop.key.value === "json")
            ) {
                json = generate(prop.value ?? prop, { concise: true }).code;
                jsonFormatted = extractKeysFromValue(prop.value ?? prop);
            }
        }
    }

    return { endpoint, searchParams, searchParamsFormatted, json, jsonFormatted };
}

function extractKeysFromValue(valueNode) {
    if (!valueNode) return null;

    if (valueNode.type === "ObjectExpression") {
        return valueNode.properties
        .map((prop) => {
            if (prop.type === "ObjectProperty") {
                if (prop.key.type === "Identifier") return prop.key.name;
                if (prop.key.type === "StringLiteral") return prop.key.value;
            }
            return null;
        })
        .filter(Boolean);
    } else if (valueNode.type === "CallExpression") {
        const keys = [];
        for (const arg of valueNode.arguments) {
            if (arg.type === "ObjectExpression") {
                const k = arg.properties
                .map((prop) => {
                    if (prop.type === "ObjectProperty") {
                        if (prop.key.type === "Identifier") return prop.key.name;
                        if (prop.key.type === "StringLiteral") return prop.key.value;
                    }
                    return null;
                })
                .filter(Boolean);
                keys.push(...k);
            }
        }
        return keys.length ? keys : null;
    }

    return null;
}

(async function main() {
    console.time('Анализ завершён за');
    console.log(`🔍 Поиск JS/TS файлов в папке: ${ROOT}`);

    const files = await fg(["**/*.{js,mjs,cjs,jsx,ts,tsx}"], {
        cwd: ROOT,
        ignore: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/.git/**"],
        absolute: true,
    });

    console.log(`📂 Найдено файлов: ${files.length}`);

    const results = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const relPath = path.relative(process.cwd(), file);

        process.stdout.write(`📄 Обработка ${i + 1}/${files.length}: ${relPath} ...\r`);

        let code;
        try {
            code = fs.readFileSync(file, "utf8");
        } catch (err) {
            console.error(`\n❌ Ошибка чтения файла ${relPath}: ${err.message}`);
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
            console.error(`\n❌ Ошибка парсинга ${relPath}: ${err.message}`);
            continue;
        }

        try {
            traverse(ast, {
                CallExpression(callPath) {
                    if (!isHttpMethodCallee(callPath.node.callee)) return;
                    if (!isDirectlyAwaited(callPath)) return;

                    const { endpoint, searchParams, searchParamsFormatted, json, jsonFormatted } = extractEndpointAndOptions(callPath.node);

                    results.push({
                        file: relPath,
                        line: callPath.node.loc?.start.line ?? null,
                        column: callPath.node.loc?.start.column ?? null,
                        method:
                            callPath.node.callee.property.name ??
                            callPath.node.callee.property.value,
                        endpoint: "/".concat(endpoint),
                        searchParamKeys: searchParams,
                        searchParamKeysFormatted: searchParamsFormatted,
                        jsonBodyKeys: json,
                        jsonBodyKeysFormatted: jsonFormatted,
                    });
                },
            });
        } catch (err) {
            console.error(`\n❌ Ошибка обхода AST в ${relPath}: ${err.message}`);
        }
    }

    console.log(`\n\n\n✅ Готово. Найдено вызовов: ${results.length}`);
    console.timeEnd('Анализ завершён за');
    try {
        fs.writeFileSync(OUTPUT, JSON.stringify(results, null, 2), "utf8");
        console.log(`💾 Результат сохранён в ${OUTPUT}`);
    } catch (err) {
        console.error(`❌ Ошибка записи файла ${OUTPUT}: ${err.message}`);
    }
    console.log('\n\n');
})();
