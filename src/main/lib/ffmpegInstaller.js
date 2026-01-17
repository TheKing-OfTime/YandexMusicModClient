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
        this.logger = new Logger_js_1.Logger("FfmpegUpdater");
        this.repo = repo;
        this.tagName = tagName;
        this.requireHash = requireHash;

        this.platform = mapPlatform();
        this.arch = mapArch(this.platform);

        this.baseDir = getBaseDirNearAsar();
        this.tempDir = path.join(this.baseDir, "temp");

        this.assetName = `ffmpeg-${this.platform}-${this.arch}.tar.gz`;
        this.archivePath = path.join(this.tempDir, this.assetName);
        this.extractDir = path.join(this.tempDir, "extract");

        this.installPath = path.join(this.baseDir, getBinaryName(this.platform));
    }

    getDownloadUrl() {
        return `https://github.com/${this.repo}/releases/download/${this.tagName}/${this.assetName}`;
    }

    getHashUrl() {
        return `https://github.com/${this.repo}/releases/download/${this.tagName}/ffmpeg-${this.platform}-${this.arch}.sha256`;
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
        if (!(await fsPromise.stat(src).catch(() => false))) {
            throw new Error("Extracted ffmpeg binary not found");
        }

        await fsPromise.copyFile(src, this.installPath);
        if (process.platform !== "win32") {
            await fsPromise.chmod(this.installPath, 0o755);
        }
    }

    async ensureInstalled() {
        this.logger.log("Downloading:", this.assetName);
        await this.download(this.getDownloadUrl(), this.archivePath);
        await this.extract();
        await this.install();

        if (this.requireHash) {
            const expected = (await axios.get(this.getHashUrl())).data.trim();
            const actual = await sha256File(this.installPath);
            if (expected !== actual) {
                await fsPromise.unlink(this.installPath);
                throw new Error("SHA-256 mismatch");
            }
        }

        return this.installPath;
    }
}

exports.FfmpegUpdater = FfmpegUpdater;
