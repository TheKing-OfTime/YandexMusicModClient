"use strict";

const fsPromise = require("fs").promises;
const fs = require("original-fs");
const path = require("path");
const https = require("https");
const axios = require("axios");
const electron = require("electron");
const { spawn } = require("child_process");
const crypto = require("crypto");
const { pipeline } = require("stream/promises");
const Logger_js_1 = require("../packages/logger/Logger.js");

function isProbablyAsarPath(p) {
    return typeof p === "string" && (p.endsWith(".asar") || p.includes(`${path.sep}app.asar`));
}

function getBaseDirNearAsar() {
    const appPath = electron.app.getAppPath();
    return isProbablyAsarPath(appPath) ? path.dirname(appPath) : appPath;
}

function mapPlatform() {
    switch (process.platform) {
        case "win32":
            return "windows";
        case "linux":
            return "linux";
        case "darwin":
            return "macos";
        default:
            throw new Error(`Unsupported platform: ${process.platform}`);
    }
}

function mapArch(platform) {
    let arch;
    switch (process.arch) {
        case "x64":
            arch = "x86_64";
            break;
        case "arm64":
            arch = "arm64";
            break;
        default:
            throw new Error(`Unsupported CPU arch: ${process.arch}`);
    }

    // Ваш workflow: linux/windows только x86_64, macOS x86_64+arm64
    if ((platform === "linux" || platform === "windows") && arch !== "x86_64") {
        throw new Error(`No FFmpeg prebuilt for ${platform}/${arch} in current release set`);
    }

    return arch;
}

function getBinaryName(platform) {
    return platform === "windows" ? "ffmpeg.exe" : "ffmpeg";
}

async function ensureDir(p) {
    await fsPromise.mkdir(p, { recursive: true });
}

async function fileExists(p) {
    try {
        await fsPromise.access(p, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

async function deleteFile(p, logger) {
    try {
        if (await fileExists(p)) {
            await fsPromise.unlink(p);
            if (logger) logger.log("Deleted:", p);
        }
    } catch (e) {
        if (logger) logger.error("Failed to delete:", p, e?.message || e);
    }
}

async function cleanupDir(p, logger) {
    try {
        await fsPromise.rm(p, { recursive: true, force: true });
        if (logger) logger.log("Cleaned:", p);
    } catch (e) {
        if (logger) logger.error("Failed to clean dir:", p, e?.message || e);
    }
}

async function chmodExecutableIfNeeded(p) {
    if (process.platform === "win32") return;
    await fsPromise.chmod(p, 0o755);
}

async function moveFileOverwrite(src, dst) {
    await ensureDir(path.dirname(dst));
    if (await fileExists(dst)) {
        await fsPromise.unlink(dst);
    }
    await fsPromise.rename(src, dst);
}

function runCommandCapture(command, args, opts = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            windowsHide: true,
            stdio: ["ignore", "pipe", "pipe"],
            ...opts,
        });

        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (d) => (stdout += d.toString()));
        child.stderr.on("data", (d) => (stderr += d.toString()));

        child.on("error", reject);
        child.on("close", (code) => {
            if (code === 0) resolve({ stdout, stderr });
            else {
                const err = new Error(`Command failed: ${command} ${args.join(" ")} (exit ${code})`);
                err.stdout = stdout;
                err.stderr = stderr;
                err.exitCode = code;
                reject(err);
            }
        });
    });
}

async function unzipArchive(zipPath, outDir, logger) {
    await ensureDir(outDir);

    if (process.platform === "win32") {
        const zp = zipPath.replace(/"/g, '""');
        const od = outDir.replace(/"/g, '""');

        // PowerShell Expand-Archive
        await runCommandCapture("powershell.exe", [
            "-NoProfile",
            "-NonInteractive",
            "-ExecutionPolicy",
            "Bypass",
            "-Command",
            `Expand-Archive -LiteralPath "${zp}" -DestinationPath "${od}" -Force`,
        ]);

        return;
    }

    if (process.platform === "darwin") {
        // На macOS ditto обычно надёжнее unzip
        try {
            await runCommandCapture("ditto", ["-x", "-k", zipPath, outDir]);
            return;
        } catch (e) {
            if (logger) {
                logger.warn("ditto failed, falling back to unzip.");
                logger.warn(String(e.stderr || e.message || e));
            }
            // fallback to unzip
        }
    }

    // Linux (и fallback на macOS): unzip
    await runCommandCapture("unzip", ["-o", zipPath, "-d", outDir]);
}

function extractFirstSha256(text) {
    if (typeof text !== "string") return null;
    const m = text.match(/\b[a-fA-F0-9]{64}\b/);
    return m ? m[0].toLowerCase() : null;
}

async function sha256File(filePath) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash("sha256");
        const stream = fs.createReadStream(filePath);
        stream.on("error", reject);
        stream.on("data", (chunk) => hash.update(chunk));
        stream.on("end", () => resolve(hash.digest("hex")));
    });
}

class FfmpegUpdater {
    logger;

    repo;
    tagName;
    requireHash;

    baseDir;
    tempDir;

    platform;
    arch;
    assetName;

    zipPath;
    extractDir;

    installedBinPath;

    _expectedHash = null;
    _expectedHashChecked = false;

    constructor({ repo, tagName = "ffmpeg-binaries", requireHash = true } = {}) {
        if (typeof repo !== "string" || !repo.includes("/")) {
            throw new Error(`"repo" is required in form "OWNER/REPO"`);
        }

        this.logger = new Logger_js_1.Logger("FfmpegUpdaterLogger");

        this.repo = repo;
        this.tagName = tagName;
        this.requireHash = requireHash === true;

        this.baseDir = getBaseDirNearAsar();

        // TEMP РЯДОМ С app.asar
        this.tempDir = path.join(this.baseDir, "temp");

        this.platform = mapPlatform();
        this.arch = mapArch(this.platform);

        this.assetName = `ffmpeg-${this.platform}-${this.arch}.zip`;

        this.zipPath = path.join(this.tempDir, this.assetName);
        this.extractDir = path.join(this.tempDir, "ffmpeg-extract");

        this.installedBinPath = path.join(this.baseDir, getBinaryName(this.platform));

        this.logger.log("Initialized. baseDir:", this.baseDir);
        this.logger.log("Temp dir:", this.tempDir);
        this.logger.log("Asset:", this.assetName);
        this.logger.log("Install path:", this.installedBinPath);
        this.logger.log("requireHash:", this.requireHash);
    }

    getInstalledPath() {
        return this.installedBinPath;
    }

    getDownloadUrl() {
        return `https://github.com/${this.repo}/releases/download/${encodeURIComponent(this.tagName)}/${this.assetName}`;
    }

    // В вашем воркфлоу хеш публикуется как: ffmpeg-<platform>-<arch>.sha256 (SHA бинарника)
    getHashUrl() {
        const base = `https://github.com/${this.repo}/releases/download/${encodeURIComponent(this.tagName)}/`;
        return base + `ffmpeg-${this.platform}-${this.arch}.sha256`;
    }

    async clearCaches() {
        this.logger.log("Clearing caches...");
        await deleteFile(this.zipPath, this.logger);
        await cleanupDir(this.extractDir, this.logger);
        this.logger.log("Caches cleared.");
    }

    async fetchExpectedHash() {
        if (this._expectedHashChecked) return this._expectedHash;

        this._expectedHashChecked = true;
        this._expectedHash = null;

        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            keepAlive: true,
        });

        const url = this.getHashUrl();

        try {
            const resp = await axios.get(url, {
                httpsAgent,
                responseType: "text",
                headers: { "User-Agent": "Electron-FFmpeg-Updater" },
                maxRedirects: 10,
                validateStatus: (s) => (s >= 200 && s < 300) || s === 404,
            });

            if (resp.status === 404) {
                this.logger.warn("Expected hash file not found (404):", url);
                return null;
            }

            const hash = extractFirstSha256(typeof resp.data === "string" ? resp.data : String(resp.data));
            if (!hash) {
                this.logger.warn("Hash file fetched but no SHA-256 found:", url);
                return null;
            }

            this._expectedHash = hash;
            this.logger.log("Expected SHA-256 fetched:", hash);
            return hash;
        } catch (e) {
            this.logger.warn("Failed to fetch expected hash:", url, e?.message || e);
            return null;
        }
    }

    async getInstalledHash() {
        if (!(await fileExists(this.installedBinPath))) return null;
        return await sha256File(this.installedBinPath);
    }

    async isInstalled() {
        if (!(await fileExists(this.installedBinPath))) return false;

        const expected = await this.fetchExpectedHash();
        if (!expected) return this.requireHash ? false : true;

        const installed = await this.getInstalledHash();
        if (!installed) return false;

        return installed.toLowerCase() === expected.toLowerCase();
    }

    async downloadFile(url, outPath, callback) {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            keepAlive: true,
        });

        await ensureDir(path.dirname(outPath));

        // Если существует старый файл — удаляем перед скачиванием
        await deleteFile(outPath, this.logger);

        const response = await axios.get(url, {
            httpsAgent,
            responseType: "stream",
            headers: { "User-Agent": "Electron-FFmpeg-Updater" },
            maxRedirects: 10,
            validateStatus: (s) => s >= 200 && s < 400,
        });

        const totalLength = parseInt(response.headers["content-length"] || "0", 10);
        let downloadedLength = 0;

        response.data.on("data", (chunk) => {
            downloadedLength += chunk.length;
            if (typeof callback === "function") {
                const progress = totalLength > 0 ? downloadedLength / totalLength : 0;
                callback(progress, progress);
            }
        });

        const writer = fs.createWriteStream(outPath);

        try {
            await pipeline(response.data, writer);
        } catch (e) {
            await deleteFile(outPath, this.logger);
            if (typeof callback === "function") callback(-1, -1);
            throw e;
        }

        // sanity: проверка размера
        const st = await fsPromise.stat(outPath);
        if (!st || st.size < 1024 * 1024) {
            // 1MB — минимальная “защита” от HTML/ошибки/обрезка (ffmpeg zip обычно сильно больше)
            await deleteFile(outPath, this.logger);
            throw new Error(`Downloaded file too small (${st?.size || 0} bytes). Likely not a valid zip.`);
        }

        if (typeof callback === "function") callback(1.1, -1);
        this.logger.log("Downloaded zip:", outPath, "size:", st.size);
    }

    async extractAndInstall(force = false) {
        // Если уже установлен и хеш совпадает — ничего не делаем
        if (!force) {
            const ok = await this.isInstalled();
            if (ok) {
                this.logger.log("FFmpeg already installed (hash verified):", this.installedBinPath);
                return this.installedBinPath;
            }
        }

        await ensureDir(this.tempDir);
        await cleanupDir(this.extractDir, this.logger);
        await ensureDir(this.extractDir);

        this.logger.log("Extracting zip:", this.zipPath);

        try {
            await unzipArchive(this.zipPath, this.extractDir, this.logger);
        } catch (e) {
            // Очень частый кейс: zip битый/недокачанный. Делаем одну попытку перекачать и распаковать заново.
            this.logger.error("Unzip failed.");
            if (e.stderr) this.logger.error(String(e.stderr));
            if (e.stdout) this.logger.warn(String(e.stdout));

            this.logger.warn("Retrying: re-download and unzip once...");

            await cleanupDir(this.extractDir, this.logger);
            await ensureDir(this.extractDir);
            await deleteFile(this.zipPath, this.logger);

            await this.downloadFile(this.getDownloadUrl(), this.zipPath);

            await unzipArchive(this.zipPath, this.extractDir, this.logger);
        }

        const binName = getBinaryName(this.platform);
        const extractedBinPath = path.join(this.extractDir, binName);

        if (!(await fileExists(extractedBinPath))) {
            const entries = await this.listExtractDir();
            throw new Error(`Expected "${binName}" not found after unzip. Extract dir entries: ${entries.join(", ")}`);
        }

        this.logger.log("Installing to:", this.installedBinPath);
        await moveFileOverwrite(extractedBinPath, this.installedBinPath);
        await chmodExecutableIfNeeded(this.installedBinPath);

        // Пост-проверка по SHA (если доступен)
        const expected = await this.fetchExpectedHash();
        if (expected) {
            const installed = await this.getInstalledHash();
            if (!installed || installed.toLowerCase() !== expected.toLowerCase()) {
                this.logger.error("Installed ffmpeg hash mismatch. Removing binary.");
                await deleteFile(this.installedBinPath, this.logger);
                throw new Error("FFmpeg install failed: hash mismatch");
            }
            this.logger.log("Installed ffmpeg hash verified.");
        } else if (this.requireHash) {
            this.logger.error("Expected hash unavailable and requireHash=true. Removing binary.");
            await deleteFile(this.installedBinPath, this.logger);
            throw new Error("FFmpeg install failed: expected hash unavailable");
        } else {
            this.logger.warn("Expected hash unavailable. Installed without hash verification.");
        }

        return this.installedBinPath;
    }

    async ensureInstalled(callback, { force = false, clearCacheFirst = false } = {}) {
        if (clearCacheFirst) {
            await this.clearCaches();
        }

        // Сбрасываем кэш хеша на запуск (на случай обновления релиза)
        this._expectedHash = null;
        this._expectedHashChecked = false;

        if (!force) {
            const ok = await this.isInstalled();
            if (ok) {
                this.logger.log("FFmpeg already installed; skipping download.");
                return this.installedBinPath;
            }
            this.logger.log("FFmpeg not installed (missing or hash mismatch). Will download.");
        }

        const url = this.getDownloadUrl();
        this.logger.log("Downloading:", url);

        await this.downloadFile(url, this.zipPath, callback);
        const installed = await this.extractAndInstall(force);

        await cleanupDir(this.extractDir, this.logger);
        // zip можно удалять или кешировать; оставляю удаление, чтобы не копить мусор
        await deleteFile(this.zipPath, this.logger);

        this.logger.log("FFmpeg ready:", installed);
        return installed;
    }

    async listExtractDir() {
        try {
            const entries = await fsPromise.readdir(this.extractDir, { withFileTypes: true });
            return entries.map((e) => (e.isDirectory() ? `${e.name}/` : e.name));
        } catch {
            return [];
        }
    }
}

exports.FfmpegUpdater = FfmpegUpdater;

exports.getFfmpegUpdater = (() => {
    let instance;
    return (opts) => {
        if (!instance) {
            instance = new FfmpegUpdater(opts);
        }
        return instance;
    };
})();
