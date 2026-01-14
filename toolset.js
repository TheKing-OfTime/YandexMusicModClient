(async () => {
    require('dotenv').config();
    const asar = require('@electron/asar');
    const minimist = require('minimist');
    const fs = require('fs');
    const fsp = require('fs').promises;
    const path = require('path');
    const semver = require('semver');
    const crypto = require('crypto');
    const plist = require('plist');
    const { minify } = require('terser');
    const { Octokit } = await import('@octokit/rest');
    const { execSync } = require('child_process');
    const { exec, spawn } = require('child_process');
    const { promisify } = require('util');
    const archiver = require('archiver');
    const logger = require('./utils/logger.js');

    const execAsync = promisify(exec);
    const spawnAsync = promisify(spawn);

    const SRC_PATH = path.join(process.argv[1], '../src');
    const DEFAULT_DIST_PATH = path.join(process.argv[1], '../builds/latest/app.asar');
    const DEFAULT_PATCHED_DIST_PATH = path.join(process.argv[1], '../builds/patched/app.asar');
    const EXTRACTED_DIR_PATH = path.join(process.argv[1], '../extracted');

    const MAC_APP_PATH = '/Applications/Яндекс Музыка.app';
    const WINDOWS_APP_PATH = path.join(process.env?.LOCALAPPDATA ?? '', '/Programs/YandexMusic');
    const WINDOWS_EXE_PATH = path.join(WINDOWS_APP_PATH ?? '', 'Яндекс Музыка.exe');

    const DIRECT_DIST_PATH = process.platform === 'darwin' ? path.join(MAC_APP_PATH, '/Contents/Resources/app.asar') : path.join(WINDOWS_APP_PATH, 'resources/app.asar');
    const INFO_PLIST_PATH = path.join(MAC_APP_PATH, '/Contents/Info.plist');

    if (process.platform === 'darwin') {
        if (!fs.existsSync(DIRECT_DIST_PATH)) {
            logger.warn('Не удалось найти директорию с Яндекс Музыкой:', DIRECT_DIST_PATH, '\nПереопределите MAC_APP_PATH в toolset.js');
        }
        if (!fs.existsSync(INFO_PLIST_PATH)) {
            logger.warn('Не удалось найти Info.plist:', INFO_PLIST_PATH, '\nПереопределите MAC_APP_PATH в toolset.js');
        }
    }
    if (!fs.existsSync(DIRECT_DIST_PATH)) {
        logger.warn('Не удалось найти директорию с Яндекс Музыкой:', DIRECT_DIST_PATH, '\nПереопределите WINDOWS_APP_PATH в toolset.js');
    }

    const MINIFIED_SRC_PATH = path.join(process.argv[1], '../minified/src');
    const TEMP_DIR = path.join(process.argv[1], '../temp');

    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(TEMP_DIR, { recursive: true });
        logger.info('Создана временная директория:', TEMP_DIR);
    }

    const EXTRACTED_ENTITLEMENTS_PATH = path.join(TEMP_DIR, 'extracted_entitlements.xml');

    const PATCH_NOTES_PATH = path.join(process.argv[1], '../PATCHNOTES.md');

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const gitOwner = 'TheKing-OfTime';
    const gitRepo = 'YandexMusicModClient';

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    const patchNoteStringMD = fs.readFileSync(PATCH_NOTES_PATH, { encoding: 'utf8' });

    const octokit = new Octokit({ auth: GITHUB_TOKEN });

    let oldYMHash;
    let oldYMHashOverride;

    class PatchNote {
        static forSpoofPatch(ymVersion, version, previousYmVersion) {
            return new PatchNote(ymVersion, version, `# Что нового\n- Версия спуфнута c ${previousYmVersion} до ${ymVersion}`);
        }

        constructor(ymVersion, version, patchNoteString) {
            this.ymVersion = ymVersion;
            this.version = version;
            this.patchNoteString = patchNoteString;
        }

        toDiscord() {
            return `# Client ${this.version}\n\n${this.patchNoteString}`;
        }

        toGitHub() {
            return `## Патч для Яндекс Музыки ${this.ymVersion}\n\n${this.patchNoteString}\n\n![GitHub Downloads (all assets, specific tag)](https://img.shields.io/github/downloads/TheKing-OfTime/YandexMusicModClient/onlyDiscordRPC%40${this.version}/total?label=Downloads)`;
        }
    }
    /**
     * Архивирует папку в zip
     * @param {String} folderPath - путь к папке
     * @param {String} outputZipPath - путь для сохранения архива
     * @returns {Promise<String>} - путь к архиву
     */
    function zipFolder(folderPath, outputZipPath) {
        return new Promise((resolve, reject) => {
            const output = fs.createWriteStream(outputZipPath);
            const archive = archiver('zip', { zlib: { level: 9 } });

            output.on('close', () => resolve(outputZipPath));
            archive.on('error', reject);

            archive.pipe(output);
            archive.directory(folderPath, false);
            archive.finalize();
        });
    }

    /**
     *
     * @param {PatchNote} patchNote
     * @return {Promise<void>}
     */
    async function sendPatchNoteToDiscord(patchNote) {
        const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: patchNote.toDiscord(),
            }),
        });

        if (!webhookResponse.ok) {
            throw new Error(`Не удалось отправить webhook: ${webhookResponse.statusText}`);
        }
        logger.info('Патчноут отправлен в Discord');
    }

    async function getLatestExtractedSrcDir(toPatched = false) {
        let version = '1.0.0';
        const versions = (await fsp.readdir(EXTRACTED_DIR_PATH, { withFileTypes: true }))
            .filter((dirent) => {
                return dirent.isDirectory() && dirent.name.endsWith('@pure');
            })
            .map((dirstr) => dirstr.name.replace('@pure', ''));

        versions.forEach((ver) => {
            if (semver.gt(ver, version)) version = ver;
        });

        if (version === '1.0.0') return logger.info('Не удалось получить последний релиз из ./extracted/');
        return path.join(EXTRACTED_DIR_PATH, `/${version}${toPatched ? '' : '@pure'}`);
    }

    async function getLatestYMVersion(type = 'direct', srcPath = undefined) {
        let packageFileBuffer;
        switch (type) {
            default:
            case 'direct':
                packageFileBuffer = asar.extractFile(DIRECT_DIST_PATH, 'package.json').toString();
                break;
            case 'extracted':
                let extractedPathDir = await getLatestExtractedSrcDir();
                if (!extractedPathDir) return logger.info('Не удалось получить последнюю версию YM');
                packageFileBuffer = await fsp.readFile(path.join(extractedPathDir, '/package.json'), 'utf8');
                break;
            case 'src':
                packageFileBuffer = await fsp.readFile(path.join(SRC_PATH, '/package.json'), 'utf8');
                break;
            case 'customSrc':
                packageFileBuffer = await fsp.readFile(path.join(srcPath, '/package.json'), 'utf8');
                break;
            case 'customAsar':
                packageFileBuffer = asar.extractFile(srcPath, 'package.json').toString();
                break;
        }

        const packageFileJson = JSON.parse(packageFileBuffer);

        return { version: packageFileJson.version, buildInfo: packageFileJson.buildInfo, modification: packageFileJson.modification };
    }

    function getModVersion() {
        return require(path.join(SRC_PATH, '/main/config.js')).config.modification.version;
    }

    async function modifyPackage({ src = SRC_PATH, version = undefined, buildInfo = undefined, modVersion = undefined, appConfig = undefined }) {
        let packageJson = JSON.parse(await fsp.readFile(path.join(src, '/package.json'), 'utf8'));
        const oldVersion = packageJson.version;

        if (version) packageJson.version = version;
        if (buildInfo || version)
            packageJson.buildInfo = buildInfo ?? { VERSION: version, BRANCH: 'c3903938d4df76688c4639330c6834cd5ea664f2', BUILD_TIME: '2025-11-13T15:37:20Z' }; // TODO: Поразмыслить как сделать по нормальному для сборки мейна через Роллап
        if (modVersion) packageJson.modification.version = modVersion;
        if (appConfig) packageJson.appConfig = { ...packageJson.appConfig, ...appConfig };

        await fsp.writeFile(path.join(src, '/package.json'), JSON.stringify(packageJson, null, 2), 'utf8');
        return { oldVersion: oldVersion, newVersion: version };
    }

    async function getLatestRelease() {
        const response = await octokit.rest.repos.getLatestRelease({
            owner: gitOwner,
            repo: gitRepo,
        });

        if (!response.status.toString().startsWith('2')) return logger.info('Не удалось получить последний релиз:', response.data);

        return response.data;
    }

    async function createAndPushSpoofCommit(oldVersion = undefined, newVersion = undefined) {
        const currentCommit = await octokit.repos.getCommit({
            owner: gitOwner,
            repo: gitRepo,
            ref: 'master',
        });

        const modifiedFiles = [{ path: 'src/main/config.js' }, { path: 'src/package.json' }];

        const createBlobPromises = modifiedFiles.map((file) => {
            const content = fs.readFileSync(path.join(SRC_PATH, '..', file.path), 'utf8');
            return octokit.git.createBlob({
                owner: gitOwner,
                repo: gitRepo,
                content: content,
                encoding: 'utf-8',
            });
        });

        const blobs = await Promise.all(createBlobPromises);

        const tree = await octokit.git.createTree({
            owner: gitOwner,
            repo: gitRepo,
            base_tree: currentCommit.data.commit.tree.sha,
            tree: blobs.map((blob, index) => ({
                path: modifiedFiles[index].path,
                mode: '100644',
                type: 'blob',
                sha: blob.data.sha,
            })),
        });

        const commitResponse = await octokit.git.createCommit({
            owner: gitOwner,
            repo: gitRepo,
            message: oldVersion && newVersion ? `chore: Spoof version from ${oldVersion} to ${newVersion}` : 'chore: Spoof version',
            tree: tree.data.sha,
            parents: [currentCommit.data.sha],
        });

        await octokit.git.updateRef({
            owner: gitOwner,
            repo: gitRepo,
            ref: 'heads/master',
            sha: commitResponse.data.sha,
            force: true,
        });

        if (!commitResponse.status.toString().startsWith('2')) return logger.info('Не удалось создать коммит:', commitResponse.data);
        logger.info('Коммит успешно создан и отправлен в репозиторий');
    }

    /**
     * Загружает ассет в GitHub релиз с ретраями
     * @param {Object} octokit
     * @param {String} gitOwner
     * @param {String} gitRepo
     * @param {Number} releaseId
     * @param {String} asarPath
     * @param {Number} [maxRetries=3]
     * @returns {Promise<Object>} uploadResponse
     */
    async function uploadReleaseAssetWithRetry(octokit, gitOwner, gitRepo, releaseId, asarPath, maxRetries = 3) {
        const assetData = fs.readFileSync(asarPath);
        let uploadResponse = undefined;

        const assetName = path.basename(asarPath);

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                // Используем stage для отслеживания операции загрузки
                uploadResponse = await logger.stage(`Загрузка ассета ${assetName}`, async (log) => {
                    log.info(`Попытка #${attempt} загрузки ассета ${assetName}...`);
                    const resp = await octokit.repos.uploadReleaseAsset({
                        owner: gitOwner,
                        repo: gitRepo,
                        release_id: releaseId,
                        name: assetName,
                        data: assetData,
                        headers: {
                            'content-type': 'application/octet-stream',
                            'content-length': assetData.length,
                        },
                    });
                    return resp;
                });
                break;
            } catch (err) {
                logger.warn(`Попытка #${attempt} загрузки ассета ${assetName} не удалась:`, err.message);
                if (attempt === maxRetries) throw err;
                logger.warn(`Повторная попытка загрузки ассета через ${(2000 * attempt) / 1000} секунды...`);
                await new Promise((res) => setTimeout(res, 2000 * attempt));
            }
        }

        return uploadResponse;
    }

    /**
     * Загружает папку как asset (архивирует и загружает)
     * @param {Object} octokit
     * @param {String} gitOwner
     * @param {String} gitRepo
     * @param {Number} releaseId
     * @param {String} folderPath
     * @param {String} assetName - имя ассета (например, "build.zip")
     * @param {Number} [maxRetries=3]
     */
    async function uploadFolderAsAssetWithRetry(octokit, gitOwner, gitRepo, releaseId, folderPath, assetName, maxRetries = 3) {
        if (!fs.existsSync(folderPath)) return undefined;

        const tmpZipPath = path.join(path.dirname(folderPath), assetName); // например, build.zip
        await zipFolder(folderPath, tmpZipPath);

        const assetData = fs.readFileSync(tmpZipPath);

        let uploadResponse = undefined;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                uploadResponse = await logger.stage(`Загрузка ассета ${assetName}`, async (log) => {
                    log.info(`Попытка #${attempt} загрузки ассета ${assetName}...`);
                    const resp = await octokit.repos.uploadReleaseAsset({
                        owner: gitOwner,
                        repo: gitRepo,
                        release_id: releaseId,
                        name: assetName,
                        data: assetData,
                        headers: {
                            'content-type': 'application/zip',
                            'content-length': assetData.length,
                        },
                    });
                    return resp;
                });
                break;
            } catch (err) {
                logger.warn(`Попытка #${attempt} загрузки ассета ${assetName} не удалась:`, err.message);
                if (attempt === maxRetries) throw err;
                logger.warn(`Повторная попытка загрузки ассета через ${(2000 * attempt) / 1000} секунды...`);
                await new Promise((res) => setTimeout(res, 2000 * attempt));
            }
        }

        fs.unlinkSync(tmpZipPath); // удаляем временный архив
        return uploadResponse;
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

        if (!tagCreateResponse.status.toString().startsWith('2')) return logger.info('Не удалось создать тег', tagCreateResponse.data);

        logger.info('Тег успешно создан');

        const releaseResponse = await octokit.rest.repos.createRelease({
            owner: gitOwner,
            repo: gitRepo,
            tag_name: `onlyDiscordRPC@${version}`,
            name: version,
            draft: true,
            prerelease: false,
            body: patchNote.toGitHub(),
        });

        if (!releaseResponse.status.toString().startsWith('2')) return logger.info('Не удалось создать драфт:', releaseResponse.data);

        logger.info('Драфт успешно создан');

        const assetName = path.basename(asarPath);
        const dirPath = path.dirname(asarPath);
        const asarUnpackedPath = path.join(dirPath, 'app.asar.unpacked');

        const asarUploadResponse = await uploadReleaseAssetWithRetry(octokit, gitOwner, gitRepo, releaseResponse.data.id, asarPath);

        if (!asarUploadResponse.status.toString().startsWith('2')) return logger.info(`Не удалось загрузить ассет ${assetName}:`, releaseResponse.data);

        const asarUnpackedUploadResponse = await uploadFolderAsAssetWithRetry(
            octokit,
            gitOwner,
            gitRepo,
            releaseResponse.data.id,
            asarUnpackedPath, // путь к папке
            'app.asar.unpacked.zip', // имя ассета
        );

        if (!asarUnpackedUploadResponse.status.toString().startsWith('2')) return logger.info('Не удалось загрузить ассет app.asar.unpacked:', releaseResponse.data);

        const updatedRelease = await octokit.repos.updateRelease({
            owner: gitOwner,
            repo: gitRepo,
            release_id: releaseResponse.data.id,
            draft: false,
        });

        if (!updatedRelease.status.toString().startsWith('2')) return logger.info('Не удалось опубликовать релиз:', releaseResponse.data);

        logger.info('Релиз опубликован');
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
                    // уменьшено количество спама — используем info/success вместо time/timeEnd
                    logger.info(`    Минификация: ${destPath}`);
                    const code = await fsp.readFile(srcPath, 'utf8');
                    const result = await minify(code);
                    if (result.error) {
                        logger.error(`    Ошибка минификации ${destPath}:`, result.error);
                        continue;
                    }
                    await fsp.writeFile(destPath, result.code, 'utf8');
                    logger.success(`    Минифицирован: ${destPath}`);
                } catch (err) {
                    logger.warn(`    Ошибка при минификации ${destPath}:`, err);
                    await fsp.cp(srcPath, destPath, { recursive: true });
                    logger.info(`    Пропущен и скопирован: ${destPath}`);
                }
            } else if (stat.isDirectory()) {
                await minifyDir(srcPath, destPath);
            } else {
                await fsp.cp(srcPath, destPath, { recursive: true });
                logger.info(`    Скопирован: ${destPath}`);
            }
        }
    }
    function hashDirFiltered(dir, ignore = ['node_modules', 'dist', 'build', '.build-meta.json', '.git', '.DS_Store']) {
        const hash = crypto.createHash('sha256');

        function walk(p) {
            const entries = fs.readdirSync(p, { withFileTypes: true });
            for (const e of entries) {
                if (ignore.includes(e.name)) continue;

                const full = path.join(p, e.name);
                if (e.isDirectory()) {
                    walk(full);
                } else {
                    hash.update(e.name);
                    hash.update(fs.readFileSync(full));
                }
            }
        }

        walk(dir);
        return hash.digest('hex');
    }

    function getNativeBuildKey(nativeDir) {
        return crypto
            .createHash('sha256')
            .update(
                JSON.stringify({
                    sourcesHash: hashDirFiltered(nativeDir),
                    abi: process.versions.modules,
                    platform: process.platform,
                    arch: process.arch,
                }),
            )
            .digest('hex');
    }

    /**
     * Сборка и копирование нативного модуля
     * @param {string} moduleName - имя папки с модулем (например, setIconicThumbnail)
     */
    async function buildNativeModule(moduleName) {
        const nativeDir = path.join(__dirname, 'native', moduleName);
        const gypPath = path.join(nativeDir, 'binding.gyp');
        if (!fs.existsSync(gypPath)) throw new Error(`Не найден binding.gyp в ${nativeDir}`);

        const gyp = JSON.parse(
            fs
                .readFileSync(gypPath, 'utf8')
                .replace(/\/\/.*$/gm, '')
                .replace(/,\s*]/g, ']')
                .replace(/,\s*}/g, '}'),
        );

        const targetName = gyp.targets?.[0]?.target_name;
        if (!targetName) throw new Error('Не удалось получить target_name');

        const destDir = path.join(__dirname, 'src', 'main', 'native_modules', targetName);
        const destNode = path.join(destDir, `${targetName}.node`);
        const metaPath = path.join(destDir, '.build-meta.json');

        const buildKey = getNativeBuildKey(nativeDir);

        if (fs.existsSync(destNode) && fs.existsSync(metaPath) && JSON.parse(fs.readFileSync(metaPath, 'utf8')).buildKey === buildKey) {
            logger.info(`⏩ Нативный модуль ${targetName} актуален — сборка пропущена`);
            return;
        }

        logger.info(`🔨 Сборка нативного модуля: ${targetName}`);
        await logger.stage(`Сборка нативного модуля ${targetName}`, async (log) => {
            execSync('npm run build', { cwd: nativeDir, stdio: 'inherit' });
            return true;
        });

        const builtNode = path.join(nativeDir, 'build', 'Release', `${targetName}.node`);
        await fsp.mkdir(destDir, { recursive: true });
        await fsp.copyFile(builtNode, destNode);

        // JS wrapper
        const jsDir = path.join(nativeDir, 'js');
        if (fs.existsSync(jsDir)) {
            for (const file of await fsp.readdir(jsDir)) {
                await fsp.copyFile(path.join(jsDir, file), path.join(destDir, file));
            }
        }

        fs.writeFileSync(
            metaPath,
            JSON.stringify(
                {
                    buildKey,
                    builtAt: new Date().toISOString(),
                },
                null,
                2,
            ),
        );

        logger.success(`✅ Модуль ${targetName} собран`);
    }

    async function buildNativeModules() {
        logger.info('Собираю нативные модули');
        const nativeDir = path.join(__dirname, 'native');
        const modules = (await fsp.readdir(nativeDir, { withFileTypes: true })).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
        for (const module of modules) {
            await buildNativeModule(module);
        }
    }

    async function buildMiniPlayer(force = false) {
        const miniPlayerDir = path.join(__dirname, 'miniplayer');
        const metaPath = path.join(miniPlayerDir, '.build-meta.json');

        if (!fs.existsSync(miniPlayerDir)) {
            logger.info('Миниплеер не найден, сборка пропущена');
            return;
        }

        const buildKey = crypto
            .createHash('sha256')
            .update(
                JSON.stringify({
                    sourcesHash: hashDirFiltered(miniPlayerDir),
                    node: process.version,
                    platform: process.platform,
                    arch: process.arch,
                }),
            )
            .digest('hex');

        if (!force && fs.existsSync(metaPath)) {
            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
            if (meta.buildKey === buildKey) {
                logger.info('⏩ Миниплеер актуален — сборка пропущена');
                return;
            }
        }

        logger.info('🎵 Сборка миниплеера...');
        await logger.stage('Сборка миниплеера', async (log) => {
            execSync('npm run build', {
                cwd: miniPlayerDir,
                stdio: 'inherit',
            });
            return true;
        });

        fs.writeFileSync(
            metaPath,
            JSON.stringify(
                {
                    buildKey,
                    builtAt: new Date().toISOString(),
                },
                null,
                2,
            ),
        );

        logger.success('✅ Миниплеер успешно собран');
    }

    async function build(
        { srcPath = SRC_PATH, destDir = DEFAULT_DIST_PATH, noMinify = false, noNativeModules = false } = {
            srcPath: SRC_PATH,
            destDir: DEFAULT_DIST_PATH,
            noMinify: false,
        },
    ) {
        await buildMiniPlayer();

        if (!noNativeModules) await buildNativeModules();

        if (!noMinify) {
            logger.info('Минификация...');
            await logger.stage('Минификация', async (log) => {
                await minifyDir(srcPath, MINIFIED_SRC_PATH);
                return true;
            });
        }

        logger.info('Архивация из ' + (noMinify ? srcPath : MINIFIED_SRC_PATH) + ' в ' + destDir);
        await logger.stage('Архивация', async (log) => {
            await asar.createPackageWithOptions(noMinify ? srcPath : MINIFIED_SRC_PATH, destDir, { unpackDir: '**/node_modules/{sharp,@img}/**/*' });
            return true;
        });

        if (!noMinify) {
            await fsp.rm(MINIFIED_SRC_PATH, { recursive: true });
            logger.info('Минифицированный код отчищен');
        }
    }

    async function buildDirectly(src, noMinify = false, noNativeModules = false, forceOpen = false) {
        if (process.platform === 'darwin' && checkIfSystemIntegrityProtectionEnabled()) {
            logger.info('System Integrity Protection включён. Обход невозможен, пожалуйста, отключите SIP для File System и попробуйте снова.');
            return false;
        }
        oldYMHash = calcASARHeaderHash(DIRECT_DIST_PATH).hash;

        const shouldReopen = await closeYandexMusic();

        await build({ srcPath: src, destDir: DIRECT_DIST_PATH, noMinify: noMinify, noNativeModules: noNativeModules });

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Dirty delay. To make sure YM is closed

        await bypassAsarIntegrity();

        if (shouldReopen || forceOpen) {
            logger.info('Запуск Яндекс Музыки...');
            launchYandexMusic();
            logger.info('Яндекс Музыка запущена');
        }
    }

    async function spoof(type = 'extracted', shouldRelease = false) {
        // Используем stage для всей операции spoof
        return await logger.stage('Спуфинг', async (log) => {
            log.info('Спуфинг...');
            let latestRelease, modVersion;
            const versions = await getLatestYMVersion(type);
            if (shouldRelease) {
                latestRelease = await getLatestRelease();
                modVersion = (await getLatestYMVersion('src')).modification.version;
            }
            log.info('Последняя версия ЯМ', versions);
            const result = await modifyPackage({ version: versions.version, buildInfo: versions.buildInfo });

            if (latestRelease) {
                if (semver.lte(modVersion, latestRelease.name)) {
                    const nextVersion = semver.inc(latestRelease.name, 'patch');
                    await modifyPackage({ modVersion: nextVersion });
                    log.info('Версия мода изменена с', modVersion, 'на', nextVersion);
                    await createAndPushSpoofCommit(result.oldVersion, result.newVersion);
                }
            }

            log.success('Спуфинг завершён');
            log.info('Спуфнуто с', result.oldVersion, 'до', result.newVersion);
            return result;
        });
    }

    async function release(dest, versions = undefined) {
        const version = await getModVersion();
        const { version: ymVersion } = await getLatestYMVersion();
        const patchNote = versions ? PatchNote.forSpoofPatch(versions.newVersion, version, versions.oldVersion) : new PatchNote(ymVersion, version, patchNoteStringMD);
        await createGitHubRelease(version, dest, patchNote);
        await sendPatchNoteToDiscord(patchNote);
    }

    async function extractIfNotExist(version, force = false, src = undefined) {
        const extractedPathDir = path.join(EXTRACTED_DIR_PATH, version);
        if (!force && fs.existsSync(extractedPathDir)) return logger.info('Папка под ' + version + ' уже существует:', extractedPathDir);
        await fsp.mkdir(extractedPathDir, { recursive: true });
        await asar.extractAll(src ?? DIRECT_DIST_PATH, extractedPathDir);
        logger.info('Релиз ' + version + ' успешно извлечён в', extractedPathDir);
        return extractedPathDir;
    }

    async function extractBuild(force = false, src = undefined, type = 'direct', withPure = true) {
        if (!fs.existsSync(EXTRACTED_DIR_PATH)) {
            await fsp.mkdir(EXTRACTED_DIR_PATH, { recursive: true });
        }
        const latestYMVersion = await getLatestYMVersion(type, src);

        const pathToExtractedBuild = await extractIfNotExist(latestYMVersion.version, force, src);

        if (withPure) {
            const pathToPureExtractedBuild = await extractIfNotExist(`${latestYMVersion.version}@pure`, force);

            return { pureExtracted: pathToPureExtractedBuild, extracted: pathToExtractedBuild };
        }

        return { extracted: pathToExtractedBuild };
    }

    async function replaceInFilesRecursively(dir, rules) {
        const entries = await fsp.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await replaceInFilesRecursively(fullPath, rules);
            } else if (entry.isFile()) {
                let content = await fsp.readFile(fullPath, 'utf8');
                let newContent = content;
                for (const { regex, replacement } of rules) {
                    newContent = newContent.replace(regex, replacement);
                }
                if (newContent !== content) {
                    await fsp.writeFile(fullPath, newContent, 'utf8');
                    logger.info(`Вхождение найдено и заменено в: ${fullPath}`);
                }
            }
        }
    }

    async function patchExtractedBuild(extractedPath, options = { unlockDevtools: true, unlockDevPanel: true }) {
        logger.info('Патчинг извлечённого релиза', extractedPath);

        if (options.unlockDevtools) {
            // Old way (Using it again because new YM version bundles all main files into main/index.js)
            let indexJs = await fsp.readFile(path.join(extractedPath, '/index.js'), 'utf8');
            indexJs = indexJs.replace(/const\s?webPreferences\s?=\s?\{/i, 'const webPreferences = { devTools: true,');
            await fsp.writeFile(path.join(extractedPath, '/index.js'), indexJs, 'utf8');

            // await modifyPackage({src: extractedPath, appConfig: { enableDevTools: true, enableUpdateByProbability: false } });
            // logger.info("Devtools Разблокированы", extractedPath);
        }

        if (options.unlockDevPanel) {
            const rules = [
                // Old way
                // { regex: /panel: ?!1, ?allowOverwriteExperiments: ?!1/g, replacement: 'panel:!0,allowOverwriteExperiments:!0' },
                // { regex: /exposeSonataStateInWindow: ?!1/g, replacement: 'exposeSonataStateInWindow:!0' },
                { regex: /e\.set\(c.qV, ?![10]\), ?e\.set\(c.yc, ?![10]\), ?e\.set\(c.W4, ?![10]\)/g, replacement: 'e.set(c.qV,!0),e.set(c.yc,!0),e.set(c.W4,!0)' },
            ];

            logger.info('Применяю regex патчи', extractedPath, rules);
            await replaceInFilesRecursively(path.join(extractedPath, '/app/'), rules);
            logger.info('Regex патчи применены', extractedPath);
        }
    }

    function calcASARHeaderHash(archivePath) {
        const headerString = asar.getRawHeader(archivePath).headerString;
        const hash = crypto.createHash('sha256').update(headerString).digest('hex');
        return { algorithm: 'SHA256', hash };
    }

    function dumpEntitlements(appPath) {
        try {
            execSync(`codesign -d --entitlements :- '${appPath}' > '${EXTRACTED_ENTITLEMENTS_PATH}'`);
            logger.info(`Упакованы entitlements из ${appPath} в ${EXTRACTED_ENTITLEMENTS_PATH}`);
        } catch (error) {
            logger.error(`Не удалось упаковать entitlements из ${appPath} в ${EXTRACTED_ENTITLEMENTS_PATH}.`, error);
        }
    }

    function checkIfElectronAsarIntegrityIsUsed() {
        try {
            execSync(`plutil -p '${INFO_PLIST_PATH}' | grep -q ElectronAsarIntegrity`);
            return true;
        } catch {
            return false;
        }
    }

    function checkIfSystemIntegrityProtectionEnabled() {
        try {
            const response = execSync(`csrutil status`);
            return response.includes('enabled');
        } catch {
            return false;
        }
    }

    async function bypassWinAsarIntegrity(appPath) {
        logger.info(`Подготовка к замене хеша`);
        try {
            const exePath = appPath;

            if (!fs.existsSync(exePath)) {
                return logger.info(`Файл не найден по пути: ${exePath}`);
            }

            // // 2) Создание резервной копии
            // const backupPath = exePath + '.backup';
            // if (!fs.existsSync(backupPath)) {
            //     fs.copyFileSync(exePath, backupPath);
            //     console.log(`Резервная копия создана: ${backupPath}`);
            // } else {
            //     console.log(`Резервная копия уже существует: ${backupPath}`);
            // }

            // 3) Шаблоны (ASCII‑hex)
            const oldHexStr = oldYMHashOverride ?? oldYMHash;
            const newHexStr = calcASARHeaderHash(DIRECT_DIST_PATH).hash;

            logger.info(`Хеши: ${oldHexStr} ${newHexStr} ${oldHexStr.length} ${newHexStr.length}`);

            if (oldHexStr.length !== newHexStr.length) {
                return logger.info('Длины старого и нового хеша не совпадают');
            }

            if (oldHexStr === newHexStr) {
                return logger.info('Старый и новый хеши совпадают, изменения не требуется');
            }

            const oldBuf = Buffer.from(oldHexStr, 'ascii');
            const newBuf = Buffer.from(newHexStr, 'ascii');

            // 4) Чтение, замена, запись
            const fileBuf = fs.readFileSync(exePath);
            let count = 0;
            let offset = 0;

            while (true) {
                const idx = fileBuf.indexOf(oldBuf, offset);
                if (idx === -1) break;
                newBuf.copy(fileBuf, idx);
                count++;
                offset = idx + oldBuf.length;
            }

            if (count === 0) {
                logger.info('Шаблон не найден, изменений не внесено.');
            } else {
                fs.writeFileSync(exePath, fileBuf);
                logger.info(`Успешно заменено вхождений: ${count}.`);
            }
        } catch (err) {
            logger.error('Ошибка: ' + err.message);
        }
    }

    async function bypassDarwinAsarIntegrity(appPath) {
        if (process.platform !== 'darwin') {
            logger.info('Не удалось обойти asar integrity: Доступно только для macOS');
            return false;
        }

        if (checkIfSystemIntegrityProtectionEnabled()) {
            logger.info('System Integrity Protection включён. Обход невозможен, пожалуйста, отключите SIP для File System и попробуйте снова.');
            return false;
        }

        try {
            if (checkIfElectronAsarIntegrityIsUsed()) {
                logger.info('Asar integrity включено. Обход');
                const newHash = calcASARHeaderHash(DIRECT_DIST_PATH).hash;
                logger.info(`Хеш модифицированного asar: ${newHash}`);
                logger.info('Подменяю хеш в Info.plist');

                const plistContent = fs.readFileSync(INFO_PLIST_PATH, 'utf8');
                const plistData = plist.parse(plistContent);
                plistData.ElectronAsarIntegrity['Resources/app.asar'].hash = newHash;
                fs.writeFileSync(INFO_PLIST_PATH, plist.build(plistData));
            }

            logger.info('Подменяю подпись');
            dumpEntitlements(appPath);

            execSync(`codesign --force --entitlements ${EXTRACTED_ENTITLEMENTS_PATH} --sign - '${appPath}'`);
            fs.unlinkSync(EXTRACTED_ENTITLEMENTS_PATH);
            logger.info('Кеш очищен');

            logger.info('Обход asar integrity завершён');
        } catch (error) {
            logger.error('Не удалось обойти asar integrity', error);
            fs.unlinkSync(EXTRACTED_ENTITLEMENTS_PATH);
            logger.info('Кеш очищен');
        }
    }

    async function bypassAsarIntegrity(dest = undefined) {
        if (process.platform === 'darwin') await bypassDarwinAsarIntegrity(dest ?? MAC_APP_PATH);
        if (process.platform === 'win32') await bypassWinAsarIntegrity(dest ?? WINDOWS_EXE_PATH);
    }

    // Copied from https://github.com/PulseSync-LLC/PulseSync-client/blob/dev/src/main/utils/appUtils.ts
    async function getYandexMusicProcesses() {
        if (process.platform === 'darwin') {
            try {
                const command = `pgrep -f "Яндекс Музыка"`;
                const { stdout } = await execAsync(command, { encoding: 'utf8' });
                const processes = stdout.split('\n').filter((line) => line.trim() !== '');
                return processes.map((pid) => ({ pid: parseInt(pid, 10) })).filter((proc) => !isNaN(proc.pid));
            } catch (error) {
                logger.error('Ошибка выявления процесса Яндекс Музыки на Mac:', error);
                return [];
            }
        } else if (process.platform === 'linux') {
            try {
                const command = `pgrep -fa "yandexmusic"`;
                const { stdout } = await execAsync(command, { encoding: 'utf8' });
                const processes = stdout
                    .split('\n')
                    .filter((line) => line.trim() !== '')
                    .filter((line) => !['pgrep', 'yandexmusicmodpatcher', 'YandexMusicModPatcher'].some((keyword) => line.includes(keyword)));
                return processes
                    .map((line) => {
                        const parts = line.split(' ');
                        const pid = parseInt(parts[0], 10);
                        return { pid };
                    })
                    .filter((proc) => !isNaN(proc.pid));
            } catch (error) {
                logger.error('Ошибка выявления процесса Яндекс Музыки на Linux:', error);
                return [];
            }
        } else {
            try {
                const command = `tasklist /FI "IMAGENAME eq Яндекс Музыка.exe" /FO CSV /NH`;
                const { stdout } = await execAsync(command, { encoding: 'utf8' });
                const processes = stdout.split('\n').filter((line) => line.trim() !== '');
                const yandexProcesses = [];
                processes.forEach((line) => {
                    const parts = line.split('","');
                    if (parts.length > 1) {
                        const pidStr = parts[1].replace(/"/g, '').trim();
                        const pid = parseInt(pidStr, 10);
                        if (!isNaN(pid)) {
                            yandexProcesses.push({ pid });
                        }
                    }
                });
                return yandexProcesses;
            } catch (error) {
                logger.error('Ошибка выявления процесса Яндекс Музыки:', error);
                return [];
            }
        }
    }

    async function isYandexMusicRunning() {
        return (await getYandexMusicProcesses())?.length > 0;
    }

    async function closeYandexMusic() {
        const yandexProcesses = await getYandexMusicProcesses();
        if (yandexProcesses.length === 0) {
            logger.info('Яндекс Музыка не запущена. Закрытие не требуется.');
            return false;
        }

        logger.info('Закрываю Яндекс Музыку...');

        for (const proc of yandexProcesses) {
            try {
                process.kill(proc.pid);
                logger.info(`Процесс Яндекс Музыки с PID ${proc.pid} был завершён.`);
            } catch (error) {
                logger.error(`Не удалось завершить процесс ${proc.pid}:`, error);
            }
        }

        return true;
    }

    async function launchYandexMusic() {
        return await openExternalDetached('yandexmusic://');
    }

    async function openExternalDetached(url) {
        let command, args;

        if (process.platform === 'win32') {
            command = 'cmd.exe';
            args = ['/c', 'start', '', url];
        } else if (process.platform === 'darwin') {
            command = 'open';
            args = [url];
        } else {
            command = 'xdg-open';
            args = [url];
        }

        (await spawnAsync(command, args, { detached: true, stdio: 'ignore' })).unref();
    }

    async function run(command, flags) {
        if (command)
            await logger.stage(`${command}`, async (log) => {
                const force = flags.f ?? false;

                const forceOpen = flags.forceOpen ?? false;
                const lastExtracted = flags.lastExtracted ?? false;
                const extractType = flags.extractType ?? 'direct';
                const withoutPure = flags.withoutPure ?? false;
                const noNativeModules = command === 'extract' || lastExtracted ? true : (flags.noNativeModules ?? false);
                oldYMHashOverride = flags.oldYMHashOverride;

                const shouldPatch = flags.p ?? false;
                const shouldMinify = flags.m ?? false;
                const shouldBuildDirectly = flags.d ?? false;
                const shouldRelease = flags.r ?? false;
                const shouldBuild = flags.b ?? false;

                const dest = flags.dest ?? (lastExtracted ? DEFAULT_PATCHED_DIST_PATH : DEFAULT_DIST_PATH);
                const src = command === 'extract' ? flags.src : lastExtracted ? await getLatestExtractedSrcDir(true) : (flags.src ?? SRC_PATH);

                // ...existing code...
                // showHelp function to avoid switch fallthrough and code duplication
                async function showHelp() {
                    logger.info('\n');
                    logger.info(
                        'Команды:\n\n    help - Отображает это сообщение\n    build - собирает проект в asar-файл\n    spoof - подменяет версию приложения в src на последнюю\n    release - создаёт релиз на GitHub и автоматически загружает asar\n    extract - извлекает новый билд из приложения\n    patch - патчит извлечённый билд для разблокировки девтулзов и дев панели\n    bypass-asar-integrity - обходит проверку целостности asar\n    rebuild - шорткат для build -d --noNativeModules --forceOpen\n',
                    );

                    logger.info(
                        'Флаги:\n\n    -f - форсирует перезапись/пересборку/повторное извлечение\n    --forceOpen - форсирует открытие Яндекс Музыки после выполнения команды\n    --noNativeModules - пропускает сборку нативных модулей (только для build и buildDirectly)\n    -m - минифицирует исходный код (только для build и buildDirectly)\n    -r - создаёт релиз на GitHub (только для spoof или build)\n    -b - собирает проект (только для spoof)\n    -d - собирает напрямую в дистрибутив Яндекс Музыки (только для build и patch)\n    -p - патчит извлечённый (только для extract)\n    --lastExtracted - использует последний извлечённый билд из ./extracted/ в качестве src (только для build и buildDirectly)\n    --extractType [direct/extracted/src/customSrc/customAsar] - тип источника для извлечения (только для extract), по умолчанию direct\n    --withoutPure - не извлекает чистую версию без патчей (только для extract)\n    --src [path] - путь к исходному кода или asar-файлу, в зависимости от команды\n    --dest [path] - путь к результирующему asar-файлу, в зависимости от команды\n    --oldYMHashOverride [hash] - переопределяет старый хеш asar при обходе целостности (только Windows; для bypass-asar-integrity и build -d)\n',
                    );

                    logger.info(
                        'Флаги с аргументами указываются через =, например --oldYMHashOverride=f9cdcfb583ccebb5b23edaab0ea90165bee0479458532a0580c1b3a307d746d3',
                    );

                }

                switch (command) {
                    case 'build':
                        if (shouldBuildDirectly) {
                            await buildDirectly(src, !shouldMinify, noNativeModules, forceOpen);
                            break;
                        }
                        if (shouldRelease) {
                            await build({ noNativeModules: noNativeModules });
                            await release(dest);
                            break;
                        }

                        await build({ srcPath: src, destDir: dest, noMinify: !shouldMinify, noNativeModules: noNativeModules });
                        break;
                    case 'spoof':
                        const versions = await spoof('extracted', shouldRelease);
                        if (shouldBuild || shouldRelease) await build({ noNativeModules: noNativeModules });
                        if (shouldRelease) await release(dest, versions);
                        break;
                    case 'release':
                        await release(dest);
                        break;

                    case 'extract':
                        const { extracted } = await extractBuild(force, src, extractType, !withoutPure);
                        if (shouldPatch) await patchExtractedBuild(extracted);
                        if (shouldBuildDirectly) await buildDirectly(extracted, !shouldMinify, noNativeModules, forceOpen);
                        if (shouldBuild)
                            await build({ srcPath: extracted, destDir: DEFAULT_PATCHED_DIST_PATH, noMinify: !shouldMinify, noNativeModules: noNativeModules });
                        break;
                    case 'patch':
                        await patchExtractedBuild(src);
                        if (shouldBuildDirectly) await buildDirectly(src, !shouldMinify, noNativeModules, forceOpen);
                        break;
                    case 'bypass-asar-integrity':
                        await bypassAsarIntegrity(dest);
                        break;
                    case 'rebuild':
                        await buildDirectly(src, true, true, true);
                        break;
                    case 'help':
                        await showHelp();
                        break;
                    default:
                        if (command) logger.info('Неизвестная команда:', command, '\nИнтерпретирую как help...');
                        await showHelp();
                        break;
                }

                const isYmRunning = await isYandexMusicRunning();
                if (!isYmRunning && forceOpen) {
                    logger.info('Запуск Яндекс Музыки...');
                    launchYandexMusic();
                    logger.info('Яндекс Музыка запущена');
                }

                if (command) return true;
            });
        const isYmRunning = await isYandexMusicRunning();
        if (!isYmRunning && flags?.forceOpen) {
            logger.info('Запуск Яндекс Музыки...');
            launchYandexMusic();
            logger.info('Яндекс Музыка запущена');
        }
    }
    const args = minimist(process.argv.slice(2));
    logger.debug(args);
    await run(args._?.[0], args);
})();
