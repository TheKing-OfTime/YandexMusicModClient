const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const dotenv = require('dotenv');
const semver = require('semver');
dotenv.config();

const webhookUrl = process.env.DISCORD_DATAMINER_WEBHOOK_URL ?? process.env.DISCORD_WEBHOOK_URL;
const OUTPUT = path.join(__dirname, 'output');

if (!process.env.DISCORD_DATAMINER_WEBHOOK_URL) console.warn('DISCORD_DATAMINER_WEBHOOK_URL не установлена, используется DISCORD_WEBHOOK_URL');
if (!webhookUrl) throw new Error('DISCORD_DATAMINER_WEBHOOK_URL и DISCORD_WEBHOOK_URL не установлена в .env файле');

function calculateArrayDiff(oldList, newList) {
    const oldSet = new Set(oldList);
    const newSet = new Set(newList);

    const added = newList.filter(item => !oldSet.has(item));
    const removed = oldList.filter(item => !newSet.has(item));

    return { added, removed };
}

function calculateObjectDiff(oldObj, newObj) {
    const added = [];
    const removed = [];
    const changed = [];

    for (const key in newObj) {
        if (!(key in oldObj)) {
            added.push({key, value: newObj[key]});
        } else if (oldObj[key] !== newObj[key]) {
            changed.push({key, oldValue: oldObj[key], newValue: newObj[key]});
        }
    }

    for (const key in oldObj) {
        if (!(key in newObj)) {
            removed.push({key, value: oldObj[key]});
        }
    }

    return { added, changed, removed };
}

function wrapDiffMarkdown(diff) {
  return `\`\`\`diff\n${diff}\n\`\`\`\n`;
}

function formatDiff(diff) {
    let message = '';

    if (diff.added.length > 0) {
        message += `## Добавлено\n${wrapDiffMarkdown(diff.added.map(item => `+ ${item.key ?? item}${item.value ? `: ${item.value}` : ''}`).join('\n'))}`;
    }
    if (diff.changed && diff.changed.length > 0) {
        message += `## Изменено\n${wrapDiffMarkdown(diff.changed.map(item => `- ${item.key}: ${item.oldValue}\n+ ${item.key}: ${item.newValue}`).join('\n\n'))}`;
    }
    if (diff.removed.length > 0) {
        message += `## Удалено\n${wrapDiffMarkdown(diff.removed.map(item => `+ ${item.key ?? item}${item.value ? `: ${item.value}` : ''}`).join('\n'))}`;
    }
    return message || undefined;
}

async function sendDiscordMessage(message, withComponents=true) {
    const webhookResponse = await fetch(`${webhookUrl}?with_components=${!!withComponents}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...message
        }),
    });

    if (!webhookResponse.ok) {
        throw new Error(`Не удалось отправить webhook: ${webhookResponse.statusText}`);
    }
    console.log('Diff отправлен в Discord')
}

function readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function getExperimentsDiff(oldFolder, newFolder) {
    const oldData = readJson(path.join(oldFolder, 'experiments.json'));
    const newData = readJson(path.join(newFolder, 'experiments.json'));

    return calculateArrayDiff(oldData, newData);
}

function getRoutesDiff(oldFolder, newFolder) {
    const oldData = readJson(path.join(oldFolder, 'simpleRoutes.json'));
    const newData = readJson(path.join(newFolder, 'simpleRoutes.json'));

    return calculateObjectDiff(oldData, newData);
}

function getDiffTemplate(title, description, color = 0x378584) {
    return {
        "flags": 32768,
        "components": [
            {
                "type": 17,  // ComponentType.CONTAINER
                "accent_color": color,
                "components": [
                    {
                        "type": 10,  // ComponentType.TEXT_DISPLAY
                        "content": `## ${title}`
                    },
                    {
                        "type": 14,  // ComponentType.SEPARATOR
                        "divider": true,
                        "spacing": 2
                    },
                    {
                        "type": 10,  // ComponentType.TEXT_DISPLAY
                        "content": description
                    },
                ]
            },
        ],
    };
}

function getSortedVersionList() {
    const versions = fs.readdirSync(OUTPUT).filter(f => (fs.statSync(path.join(OUTPUT, f)).isDirectory() && (f !== 'src')));
    return versions
      .map((value) => value.replaceAll("_", "."))
      .sort((a, b) => semver.rcompare(a, b))
      .map((value) => value.replaceAll(".", "_"));
}


async function run(command, options) {
    if (command) console.time(`${command} исполнен за`);

    const shouldSend = options.send ?? options.s ?? false;
    const shouldShowRaw = options.raw ?? options.r ?? false;
    let oldVersion = (options.old ?? options._[1])?.replaceAll('.', '_');
    let newVersion = (options.new ?? options._[2])?.replaceAll('.', '_');

    if (!oldVersion || !newVersion) {
        const sortedVersions = getSortedVersionList();
        if (sortedVersions.length < 2) throw new Error('Недостаточно версий для сравнения. Необходимо минимум 2 папки с версиями в папке output.');
        oldVersion = sortedVersions[1];
        newVersion = sortedVersions[0];
    }

    const oldFolder = path.join(OUTPUT, oldVersion);
    const newFolder = path.join(OUTPUT, newVersion);

    if (!fs.existsSync(oldFolder)) throw new Error(`Папка с данными для старой версии не найдена: ${oldFolder}`);
    if (!fs.existsSync(newFolder)) throw new Error(`Папка с данными для новой версии не найдена: ${newFolder}`);

    switch (command) {

        case 'diff':
            console.log(`Вычисление diff между версиями ${oldVersion.replaceAll('_', '.')} и ${newVersion.replaceAll('_', '.')}...`);
            console.log(`oldFolder ${oldFolder}\nnewFolder ${newFolder}...`);

            const routesDiff = getRoutesDiff(oldFolder, newFolder);
            const experimentsDiff = getExperimentsDiff(oldFolder, newFolder);

            if (shouldShowRaw) {
                console.log('Routes Diff:', JSON.stringify(routesDiff, null, 2));
                console.log('Experiments Diff:', JSON.stringify(experimentsDiff, null, 2));
                break;
            }

            const routesDiffMessage = formatDiff(routesDiff);
            const experimentsDiffMessage = formatDiff(experimentsDiff);

            if (!routesDiffMessage && !experimentsDiffMessage) {
                console.log('Изменений не обнаружено.');
                break;
            }

            console.log(routesDiffMessage);
            console.log(experimentsDiffMessage);

            if (shouldSend) {
                if (routesDiffMessage) {
                    await sendDiscordMessage(
                    {
                        ...getDiffTemplate(
                            `Эндпоинты изменились ${oldVersion.replaceAll('_', '.')} → ${newVersion.replaceAll('_', '.')}`,
                            routesDiffMessage
                        )
                    });
                }
                if (experimentsDiffMessage) {
                    await sendDiscordMessage(
                    {
                        ...getDiffTemplate(
                            `Эксперименты изменились ${oldVersion.replaceAll("_", ".")} → ${newVersion.replaceAll("_", ".")}`,
                            experimentsDiffMessage,
                        ),
                    }
                    );
                }
            }

            break;
        default:
            if (command) console.log('Неизвестная команда:', command, '\nИнтерпретирую как help...');
        case 'help':
            console.log("\n================================");
            console.log("Dataminer Diff Calculator");
            console.log(`
Команды:
help - Отображает это сообщение
            `);
            console.log("================================");
            console.log(`
Флаги:
            `);
            console.log("================================");
            console.log(`
Флаги с аргументами указываются через =, например --oldYMHashOverride=f9cdcfb583ccebb5b23edaab0ea90165bee0479458532a0580c1b3a307d746d3
            `);
            console.log("================================");
            break;
    }

    if (command) console.timeEnd(`${command} исполнен за`);
}

const args = minimist(process.argv.slice(2));
console.log(args);

(async () => {await run(args._?.[0], args)})();
