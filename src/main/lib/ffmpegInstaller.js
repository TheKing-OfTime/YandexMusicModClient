"use strict";

const fs = require("original-fs");
const fsPromise = fs.promises;
const path = require("path");
const https = require("https");
const axios = require("axios");
const electron = require("electron");
const crypto = require("crypto");
const tar = require("tar");
const { pipeline } = require("stream/promises");
const Logger_js_1 = require("../packages/logger/Logger.js");

function getBaseDirNearAsar() {
    const appPath = electron.app.getAppPath();
    return appPath.includes("app.asar") ? path.dirname(appPath) : appPath;
}

function mapPlatform() {
    if (process.platform === "win32") return "windows";
    if (process.platform === "linux") return "linux";
    if (process.platform === "darwin") return "macos";
    throw new Error(`Unsupported platform: ${process.platform}`);
}

function mapArch(platform) {
    if (process.arch === "x64") return "x86_64";
    if (process.arch === "arm64" && platform === "macos") return "arm64";
    throw new Error(`Unsupported arch: ${process.arch}`);
}

function getBinaryName(platform) {
    return platform === "windows" ? "ffmpeg.exe" : "ffmpeg";
}

async function sha256File(p) {
    const hash = crypto.createHash("sha256");
    await pipeline(fs.createReadStream(p), hash);
    return hash.digest("hex");
}

class FfmpegUpdater {
    constructor({ repo, tagName = "ffmpeg-binaries", requireHash = true }) {
        if (typeof repo !== "string" || !repo.includes("/")) {
            throw new Error(`"repo" must be in form "OWNER/REPO"`);
        }

        this.logger = new Logger_js_1.Logger("FfmpegUpdater");
        this.repo = repo;
        this.tagName = tagName;
        this.requireHash = requireHash === true;

        this.platform = mapPlatform();
        this.arch = mapArch(this.platform);

        this.baseDir = getBaseDirNearAsar();
        this.tempDir = path.join(this.baseDir, "temp");

        this.assetName = `ffmpeg-${this.platform}-${this.arch}.tar.gz`;
        this.archivePath = path.join(this.tempDir, this.assetName);
        this.extractDir = path.join(this.tempDir, "extract");

        this.installPath = path.join(this.baseDir, getBinaryName(this.platform));

        this.logger.log("Initialized");
        this.logger.log("Platform:", this.platform, this.arch);
        this.logger.log("Install path:", this.installPath);
        this.logger.log("Require hash:", this.requireHash);
    }

    getDownloadUrl() {
        return `https://github.com/${this.repo}/releases/download/${this.tagName}/${this.assetName}`;
    }

    getHashUrl() {
        return `https://github.com/${this.repo}/releases/download/${this.tagName}/ffmpeg-${this.platform}-${this.arch}.sha256`;
    }

    async fileExists(p) {
        try {
            await fsPromise.access(p, fs.constants.F_OK);
            return true;
        } catch {
            return false;
        }
    }

    async fetchExpectedHash() {
        const agent = new https.Agent({ keepAlive: true });

        try {
            const resp = await axios.get(this.getHashUrl(), {
                httpsAgent: agent,
                responseType: "text",
                headers: { "User-Agent": "Electron-FFmpeg-Updater" },
                validateStatus: (s) => s === 200 || s === 404,
            });

            if (resp.status === 404) {
                this.logger.warn("SHA-256 file not found (404)");
                return null;
            }

            const m = String(resp.data).match(/\b[a-fA-F0-9]{64}\b/);
            if (!m) {
                this.logger.warn("SHA-256 file fetched but hash not found");
                return null;
            }

            return m[0].toLowerCase();
        } catch (e) {
            this.logger.warn("Failed to fetch SHA-256:", e?.message || e);
            return null;
        }
    }

    /**
     * Проверяет, установлен ли FFmpeg:
     * - бинарник существует
     * - при requireHash=true совпадает SHA-256
     */
    async isInstalled() {
        if (!(await this.fileExists(this.installPath))) {
            return false;
        }

        if (!this.requireHash) {
            return true;
        }

        const expected = await this.fetchExpectedHash();
        if (!expected) {
            return false;
        }

        const actual = await sha256File(this.installPath);
        return actual.toLowerCase() === expected.toLowerCase();
    }

    async download(url, out) {
        await fsPromise.mkdir(path.dirname(out), { recursive: true });

        const agent = new https.Agent({ keepAlive: true });
        const resp = await axios.get(url, {
            responseType: "stream",
            httpsAgent: agent,
            headers: { "User-Agent": "Electron-FFmpeg-Updater" },
        });

        await pipeline(resp.data, fs.createWriteStream(out));
    }

    async extract() {
        await fsPromise.rm(this.extractDir, { recursive: true, force: true });
        await fsPromise.mkdir(this.extractDir, { recursive: true });

        await tar.x({
            file: this.archivePath,
            cwd: this.extractDir,
            gzip: true,
        });
    }

    async install() {
        const src = path.join(this.extractDir, getBinaryName(this.platform));
        if (!(await this.fileExists(src))) {
            throw new Error("Extracted ffmpeg binary not found");
        }

        await fsPromise.copyFile(src, this.installPath);
        if (process.platform !== "win32") {
            await fsPromise.chmod(this.installPath, 0o755);
        }
    }

    async ensureInstalled({ force = false } = {}) {
        if (!force) {
            const ok = await this.isInstalled();
            if (ok) {
                this.logger.log("FFmpeg already installed");
                return this.installPath;
            }
        }

        this.logger.log("Downloading:", this.assetName);
        await this.download(this.getDownloadUrl(), this.archivePath);
        await this.extract();
        await this.install();

        if (this.requireHash) {
            const expected = await this.fetchExpectedHash();
            if (!expected) {
                await fsPromise.unlink(this.installPath);
                throw new Error("Expected SHA-256 unavailable");
            }

            const actual = await sha256File(this.installPath);
            if (actual !== expected) {
                await fsPromise.unlink(this.installPath);
                throw new Error("SHA-256 mismatch");
            }
        }

        return this.installPath;
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
