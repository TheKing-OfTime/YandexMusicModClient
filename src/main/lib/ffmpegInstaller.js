const fsPromise = require("fs").promises;
const fs = require("original-fs");
const path = require("path");
const https = require("https");
const axios = require("axios");
const electron = require("electron");
const { spawn } = require("child_process");
const promisify = require("util").promisify;
const crypto = require("crypto");
const Logger_js_1 = require("../packages/logger/Logger.js");

const spawnAsync = promisify(spawn);

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

    // Your CI produces:
    // - linux: x86_64 only
    // - windows: x86_64 only
    // - macos: x86_64 + arm64
    if ((platform === "linux" || platform === "windows") && arch !== "x86_64") {
        throw new Error(`No FFmpeg prebuilt for ${platform}/${arch} in your current release set`);
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
            logger && logger.log("Deleted:", p);
        }
    } catch (e) {
        logger && logger.error("Failed to delete:", p, e?.message || e);
    }
}

async function cleanupDir(p, logger) {
    try {
        await fsPromise.rm(p, { recursive: true, force: true });
        logger && logger.log("Cleaned:", p);
    } catch (e) {
        logger && logger.error("Failed to clean dir:", p, e?.message || e);
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

function runCommand(command, args, opts = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, { stdio: "ignore", windowsHide: true, ...opts });
        child.on("error", reject);
        child.on("close", (code) => {
            if (code === 0) resolve();
            else reject(new Error(`Command failed: ${command} ${args.join(" ")} (exit ${code})`));
        });
    });
}

async function unzipArchive(zipPath, outDir) {
    await ensureDir(outDir);

    if (process.platform === "win32") {
        const zp = zipPath.replace(/"/g, '""');
        const od = outDir.replace(/"/g, '""');

        await runCommand("powershell.exe", [
            "-NoProfile",
            "-NonInteractive",
            "-ExecutionPolicy",
            "Bypass",
            "-Command",
            `Expand-Archive -LiteralPath "${zp}" -DestinationPath "${od}" -Force`,
        ]);
        return;
    }

    await runCommand("unzip", ["-o", zipPath, "-d", outDir]);
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

    // Config
    repo;
    tagName;
    requireHash;

    // Derived paths
    baseDir;
    tempDir;

    platform;
    arch;
    assetName;

    zipPath;
    extractDir;

    installedBinPath;

    // Cache
    _expectedHash = null;
    _expectedHashChecked = false;

    constructor({ repo, tagName = "ffmpeg-binaries", requireHash = false }) {
        if (typeof repo !== "string" || !repo.includes("/")) {
            throw new Error(`"repo" is required in form "OWNER/REPO"`);
        }

        this.logger = new Logger_js_1.Logger("FfmpegUpdaterLogger");

        this.repo = repo;
        this.tagName = tagName;
        this.requireHash = requireHash === true;

        this.baseDir = getBaseDirNearAsar();
        this.tempDir = path.join(electron.app.getPath('temp'), "YandexMusicModClient", "ffmpeg");

        this.platform = mapPlatform();
        this.arch = mapArch(this.platform);
        this.assetName = `ffmpeg-${this.platform}-${this.arch}.zip`;

        this.zipPath = path.join(this.tempDir, this.assetName);
        this.extractDir = path.join(this.tempDir, `ffmpeg-extract`);

        this.installedBinPath = path.join(this.baseDir, getBinaryName(this.platform));

        this.logger.log("Initialized. baseDir:", this.baseDir);
        this.logger.log("Temp dir:", this.tempDir);
        this.logger.log("Asset:", this.assetName);
        this.logger.log("Install path:", this.installedBinPath);
        this.logger.log("requireHash:", this.requireHash);
    }

    getDownloadUrl() {
        return `https://github.com/${this.repo}/releases/download/${encodeURIComponent(this.tagName)}/${this.assetName}`;
    }

    getHashCandidatesUrls() {
        // Preferred: zip sidecar
        const base = `https://github.com/${this.repo}/releases/download/${encodeURIComponent(this.tagName)}/`;
        return [
            base + `${this.assetName}.sha256`,
            base + `${this.assetName.replace(/\.zip$/i, "")}.sha256`,
        ];
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

        const urls = this.getHashCandidatesUrls();

        for (const url of urls) {
            try {
                const resp = await axios.get(url, {
                    httpsAgent,
                    responseType: "text",
                    headers: { "User-Agent": "Electron-FFmpeg-Updater" },
                    maxRedirects: 10,
                    validateStatus: (s) => (s >= 200 && s < 300) || s === 404,
                });

                if (resp.status === 404) {
                    continue;
                }

                const hash = extractFirstSha256(typeof resp.data === "string" ? resp.data : String(resp.data));
                if (hash) {
                    this._expectedHash = hash;
                    this.logger.log("Expected SHA-256 fetched from:", url);
                    this.logger.log("Expected SHA-256:", hash);
                    return this._expectedHash;
                }

                this.logger.warn("Hash file fetched but no SHA-256 found in content:", url);
            } catch (e) {
                this.logger.warn("Failed to fetch hash file:", url, e?.message || e);
            }
        }

        if (this.requireHash) {
            this.logger.warn("Expected SHA-256 not found. requireHash=true => treating as not installed.");
        } else {
            this.logger.warn("Expected SHA-256 not found. Falling back to existence-only checks.");
        }

        return this._expectedHash;
    }

    async getInstalledHash() {
        if (!(await fileExists(this.installedBinPath))) return null;
        return await sha256File(this.installedBinPath);
    }

    async hashesMatch() {
        const expected = await this.fetchExpectedHash();
        if (!expected) return this.requireHash ? false : null; // null => unknown (hash not available)

        const installed = await this.getInstalledHash();
        if (!installed) return false;

        return installed.toLowerCase() === expected.toLowerCase();
    }

    /**
     * Returns true if ffmpeg is installed AND hash matches expected (when hash is available).
     * If expected hash cannot be fetched:
     *   - requireHash=false (default): returns true when file exists.
     *   - requireHash=true: returns false (treat as not installed).
     */
    async isInstalled() {
        if (!(await fileExists(this.installedBinPath))) return false;

        const match = await this.hashesMatch();

        if (match === true) return true;
        if (match === false) return false;

        // match === null => expected hash unavailable
        return this.requireHash ? false : true;
    }

    async downloadFile(url, outPath, callback) {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            keepAlive: true,
        });

        await ensureDir(path.dirname(outPath));

        const writer = fs.createWriteStream(outPath);
        let isFinished = false;
        let isError = false;

        const response = await axios.get(url, {
            httpsAgent,
            responseType: "stream",
            headers: {
                "User-Agent": "Electron-FFmpeg-Updater",
            },
            maxRedirects: 10,
            validateStatus: (s) => s >= 200 && s < 400,
        });

        const totalLength = parseInt(response.headers["content-length"] || "0", 10);
        let downloadedLength = 0;

        response.data.on("data", (chunk) => {
            if (isFinished) return;
            downloadedLength += chunk.length;

            if (typeof callback === "function") {
                const progress = totalLength > 0 ? downloadedLength / totalLength : 0;
                callback(progress, progress);
            }

            writer.write(chunk);
        });

        response.data.on("end", () => {
            if (isFinished) return;
            isFinished = true;
            writer.end();
        });

        response.data.on("error", async (err) => {
            if (isFinished) return;
            isFinished = true;
            isError = true;
            writer.end();
            await deleteFile(outPath, this.logger);
            this.logger.error("Download error:", err?.message || err);
            if (typeof callback === "function") callback(-1, -1);
        });

        writer.on("finish", async () => {
            try {
                if (!isFinished) return;
                if (isError) return;

                this.logger.log("Downloaded FFmpeg zip:", outPath);
                if (typeof callback === "function") callback(1.1, -1);
            } catch (e) {
                await deleteFile(outPath, this.logger);
                this.logger.error("Error writing file:", e?.message || e);
                if (typeof callback === "function") callback(-1, -1);
            }
        });

        writer.on("error", async (err) => {
            await deleteFile(outPath, this.logger);
            this.logger.error("Writer error:", err?.message || err);
            if (typeof callback === "function") callback(-1, -1);
        });
    }

    async extractAndInstall(force = false) {
        // If already installed (hash-verified) and not forcing, do nothing.
        if (!force) {
            const ok = await this.isInstalled();
            if (ok) {
                this.logger.log("FFmpeg already installed (hash-verified when available):", this.installedBinPath);
                return this.installedBinPath;
            }
        }

        await ensureDir(this.tempDir);
        await cleanupDir(this.extractDir, this.logger);
        await ensureDir(this.extractDir);

        this.logger.log("Extracting zip:", this.zipPath);
        await unzipArchive(this.zipPath, this.extractDir);

        const binName = getBinaryName(this.platform);
        const extractedBinPath = path.join(this.extractDir, binName);

        if (!(await fileExists(extractedBinPath))) {
            const entries = await this.listExtractDir();
            throw new Error(
                `Expected "${binName}" not found after unzip. Extract dir entries: ${entries.join(", ")}`
            );
        }

        this.logger.log("Installing to:", this.installedBinPath);
        await moveFileOverwrite(extractedBinPath, this.installedBinPath);
        await chmodExecutableIfNeeded(this.installedBinPath);

        // Post-install hash verification (when available)
        const match = await this.hashesMatch();
        if (match === false) {
            this.logger.error("Installed ffmpeg hash mismatch. Removing binary and treating as not installed.");
            await deleteFile(this.installedBinPath, this.logger);
            throw new Error("FFmpeg install failed: hash mismatch");
        }

        if (match === null) {
            if (this.requireHash) {
                this.logger.error("Expected hash unavailable and requireHash=true. Removing binary.");
                await deleteFile(this.installedBinPath, this.logger);
                throw new Error("FFmpeg install failed: expected hash unavailable");
            } else {
                this.logger.warn("Expected hash unavailable. Installed binary without hash verification.");
            }
        } else {
            this.logger.log("Installed ffmpeg hash verified.");
        }

        return this.installedBinPath;
    }

    /**
     * Downloads the zip and ensures ffmpeg is installed next to app.asar.
     *
     * If hashes do not match (when expected hash is available), the binary is treated as NOT installed.
     *
     * @param {(progress:number)=>void} callback
     * @param {Object} [opts]
     * @param {boolean} [opts.force=false] - force reinstall
     * @param {boolean} [opts.clearCacheFirst=false] - delete cached zip/extract before download
     */
    async ensureInstalled(callback, { force = false, clearCacheFirst = false } = {}) {
        if (clearCacheFirst) {
            await this.clearCaches();
        }

        // Reset hash cache for this run (in case tag content changed)
        this._expectedHash = null;
        this._expectedHashChecked = false;

        // If installed and verified (when possible), skip download unless force
        if (!force) {
            const ok = await this.isInstalled();
            if (ok) {
                this.logger.log("FFmpeg already installed; skipping download.");
                return this.installedBinPath;
            }
            this.logger.log("FFmpeg not installed (or hash mismatch). Will download and install.");
        }

        const url = this.getDownloadUrl();

        this.logger.log("Downloading:", url);
        await this.downloadFile(url, this.zipPath, callback);

        const installed = await this.extractAndInstall(force);

        await cleanupDir(this.extractDir, this.logger);
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
