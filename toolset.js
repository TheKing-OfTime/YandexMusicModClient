(async () => {
require('dotenv').config()
const asar = require('@electron/asar');
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const semver = require('semver')
const { minify } = require('terser');
const { Octokit } = await import('@octokit/rest');

const SRC_PATH = path.join(process.argv[1], '../src');
const DEFAULT_DIST_PATH = path.join(process.argv[1], '../builds/latest/app.asar');
const EXTRACTED_DIR_PATH = path.join(process.argv[1], '../extracted');
const DIRECT_DIST_PATH = path.join(process.env.LOCALAPPDATA, "/Programs/YandexMusic/resources/app.asar");

const MINIFIED_SRC_PATH = path.join(process.argv[1], "../minified/src");

const PATCH_NOTES_PATH = path.join(process.argv[1], "../PATCHNOTES.md");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const gitOwner = 'TheKing-OfTime';
const gitRepo = 'YandexMusicModClient';

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

const patchNoteStringMD = fs.readFileSync(PATCH_NOTES_PATH, { encoding: "utf8"});

const octokit = new Octokit({ auth: GITHUB_TOKEN });

class PatchNote {
    static forSpoofPatch(ymVersion, version, previousYmVersion) {
        return new PatchNote(ymVersion, version, `# Что нового\n- Версия спуфнута c ${previousYmVersion} до ${ymVersion}`)
    }

    constructor(ymVersion, version, patchNoteString) {
        this.ymVersion = ymVersion;
        this.version = version;
        this.patchNoteString = patchNoteString;
    }

    toDiscord(){
        return `# ${this.version}\n\n${this.patchNoteString}`
    }

    toGitHub(){
        return `## Патч для Яндекс Музыки ${this.ymVersion}\n\n${this.patchNoteString}\n\n## Установка:\n\`\`\`bat\ncurl -L https://github.com/TheKing-OfTime/YandexMusicModClient/releases/latest/download/app.asar > %localappdata%/Programs/YandexMusic/resources/app.asar\n\`\`\`\n![GitHub Downloads (all assets, specific tag)](https://img.shields.io/github/downloads/TheKing-OfTime/YandexMusicModClient/onlyDiscordRPC%40${this.version}/total?label=Downloads)`
    }
}

/**
 *
 * @param {PatchNote} patchNote
 * @return {Promise<void>}
 */
async function sendPatchNoteToDiscord(patchNote) {
    const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "content": patchNote.toDiscord(),
        }),
    });

    if (!webhookResponse.ok) {
        throw new Error(`Не удалось отправить webhook: ${webhookResponse.statusText}`);
    }
    console.log('Патчноут отправлен в Discord')
}

async function getLatestExtractedSrcDir() {
    let version = '1.0.0'
    const versions = (await fsp.readdir(EXTRACTED_DIR_PATH, { withFileTypes: true })).filter(
      (dirent) => {
        return dirent.isDirectory() && dirent.name.endsWith('@pure');
      },
    ).map(dirstr => dirstr.name.replace('@pure',''));

    versions.forEach(ver=>{if(semver.gt(ver, version)) version = ver});

    if(version === '1.0.0') return console.log('Не удалось получить последний релиз из ./extracted/')
    return path.join(EXTRACTED_DIR_PATH, `/${version}@pure`)
}

async function getLatestYMVersion(type='direct') {
    let packageFileBuffer;
    switch (type) {
        default:
        case 'direct':
            packageFileBuffer = asar.extractFile(DIRECT_DIST_PATH, 'package.json').toString();
            break;
        case 'extracted':
            let extractedPathDir = await getLatestExtractedSrcDir();
            if(!extractedPathDir) return console.log('Не удалось получить последнюю версию YM')
            packageFileBuffer = await fsp.readFile(path.join(extractedPathDir, '/package.json'), 'utf8')
            break;
        case 'src':
            packageFileBuffer = await fsp.readFile(path.join(SRC_PATH, '/package.json'), 'utf8')
    }

    const packageFileJson = JSON.parse(packageFileBuffer);

    return { version: packageFileJson.version, buildInfo: packageFileJson.buildInfo }

}

function getModVersion(){
    return require(path.join(SRC_PATH, '/main/config.js')).config.modification.version;
}

async function modifySrcPackage(version, buildInfo) {
    let packageJson = JSON.parse(await fsp.readFile(path.join(SRC_PATH, '/package.json'), 'utf8'));
    const oldVersion = packageJson.version;
    packageJson.version = version;
    packageJson.buildInfo = buildInfo;
    await fsp.writeFile(path.join(SRC_PATH, '/package.json'), JSON.stringify(packageJson, null, 2), 'utf8');
    return { oldVersion: oldVersion, newVersion: version }
}

/**
 *
 * @param {String} version
 * @param {String} asarPath
 * @param {PatchNote} patchNote
 * @return {Promise<void>}
 */
async function createGitHubRelease(version, asarPath, patchNote) {

    const tagCreateResponse = await octokit.git.createRef({
        owner: gitOwner,
        repo: gitRepo,
        ref: `refs/tags/onlyDiscordRPC@${version}`,
        sha: (await octokit.repos.getCommit({ owner: gitOwner, repo: gitRepo, ref: 'master' })).data.sha,
    });

    if(!tagCreateResponse.status.toString().startsWith('2')) return console.log("Не удалось создать тег", tagCreateResponse.data);
    console.log("Тег успешно создан");

    const releaseResponse = await octokit.rest.repos.createRelease({
        owner: gitOwner,
        repo: gitRepo,
        tag_name: `onlyDiscordRPC@${version}`,
        name: version,
        draft: true,
        prerelease: false,
        body: patchNote.toGitHub()
    })

    if(!releaseResponse.status.toString().startsWith('2')) return console.log("Не удалось создать драфт:", releaseResponse.data);
    console.log("Драфт успешно создан");
    console.time("Ассет успешно загружен");
    console.time("Загрузка ассета");
    const assetData = fs.readFileSync(asarPath)


    const uploadResponse = await octokit.repos.uploadReleaseAsset({
        owner: gitOwner,
        repo: gitRepo,
        release_id: releaseResponse.data.id,
        name: 'app.asar',
        data: assetData,
        headers: {
            "content-type": "application/octet-stream",
            "content-length": assetData.length,
        },
    });

    if(!uploadResponse.status.toString().startsWith('2')) return console.log("Не удалось загрузить ассет:", releaseResponse.data);
    console.timeEnd("Ассет успешно загружен");

    const updatedRelease = await octokit.repos.updateRelease({
        owner: gitOwner,
        repo: gitRepo,
        release_id: releaseResponse.data.id,
        draft: false,
    });
    if(!updatedRelease.status.toString().startsWith('2')) return console.log("Не удалось опубликован релиз:", releaseResponse.data);
    console.log("Релиз опубликован");
}

async function minifyDir(srcDir, destDir) {
    await fsp.mkdir(destDir, { recursive: true });
    const items = await fsp.readdir(srcDir);
    for (const item of items) {
        const srcPath = path.join(srcDir, item);
        const destPath = path.join(destDir, item);
        const stat = await fsp.stat(srcPath);
        if (stat.isFile() && srcPath.endsWith('.js')) {
            try {
                console.time(`    Минифицирован: ${destPath}`);
                const code = await fsp.readFile(srcPath, 'utf8');
                const result = await minify(code);
                if (result.error) {
                    console.error(`    Ошибка минификации ${destPath}:`, result.error);
                    continue;
                }
                await fsp.writeFile(destPath, result.code, 'utf8');
                console.timeEnd(`    Минифицирован: ${destPath}`);
            } catch (err) {
                console.error(`    Ошибка при минификации ${destPath}:`, err);
            }
        } else if (stat.isDirectory()) {
            await minifyDir(srcPath, destPath);
        } else {
            await fsp.cp(srcPath, destPath, { recursive: true })
            console.log(`    Скопирован: ${destPath}`);
        }
    }
}

async function build(destDir=DEFAULT_DIST_PATH,noMinify=false) {
    if (!noMinify) {
      console.log("Минификация...");
      console.time("Минификация завершена");
      await minifyDir(SRC_PATH, MINIFIED_SRC_PATH);
      console.timeEnd("Минификация завершена");
    }
    console.log('Архивация в ' + destDir);
    console.time('Архивация завершена');
    await asar.createPackage(noMinify ? SRC_PATH : MINIFIED_SRC_PATH, destDir);
    console.timeEnd('Архивация завершена');
    if (!noMinify) {
      await fsp.rm(MINIFIED_SRC_PATH, { recursive: true });
      console.log("Минифицированный код отчищен");
    }
}

async function buildDirectly(noMinify=false) {
    await build(DIRECT_DIST_PATH, noMinify)
}

async function spoof(type='extracted') {
    console.log('Спуфинг...');
    console.time('Спуфинг завершён');
    const versions = await getLatestYMVersion(type);
    console.log('Последняя версия ЯМ', versions);
    const result = await modifySrcPackage(versions.version, versions.buildInfo);
    console.timeEnd('Спуфинг завершён');
    console.log('Спуфнуто с', result.oldVersion, 'до', result.newVersion);
    return result
}

async function release(versions=undefined) {
    const version = await getModVersion();
    const {version: ymVersion} = await getLatestYMVersion();
    const patchNote = (versions ? PatchNote.forSpoofPatch(versions.newVersion, version, versions.oldVersion) : new PatchNote(ymVersion, version, patchNoteStringMD));
    await createGitHubRelease(version, DEFAULT_DIST_PATH, patchNote);
    await sendPatchNoteToDiscord(patchNote);
}

async function run(command) {
    switch (command) {
        case 'build':
            await build();
            break;
        case 'buildDirectly':
            await buildDirectly();
            break;
        case 'buildDirectlyNoMinify':
            await buildDirectly(true);
            break;
        case 'spoof':
            await spoof();
            break;
        case 'release':
            await release();
            break;
        case 'spoofAndBuild':
            await spoof();
            await build()
            break;
        case 'buildAndRelease':
            await build();
            await release();
            break;
        case 'spoofAndRelease':
            const versions = await spoof();
            await build()
            await release(versions)
            break;
        case 'help':
        default:
            console.log('help - shows this message\nbuild\nbuildDirectly\nspoof\nspoofAndBuild\nbuildAndRelease\nspoofAndRelease');
            break
    }
}
    const args = process.argv.slice(2);
    console.log(args)
    await run(...(args.length >= 1 ? args : []));
})()
