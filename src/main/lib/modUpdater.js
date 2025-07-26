const fetch = require("node-fetch");
const zlib = require("node:zlib");
const exec = require("child_process").exec;
const promisify = require("util").promisify;
const fsPromise = require("fs").promises;
const fs = require("original-fs");
const path = require("path");
const semver = require("semver");
const Logger_js_1 = require("../packages/logger/Logger.js");
const config_js_1 = require("../config.js");
const https = require("https");
const axios = require("axios");
const electron = require("electron");
const { spawn } = require('child_process');
const spawnAsync = promisify(spawn);

const execPromise = promisify(exec);
const unzipPromise = promisify(zlib.unzip);
const zstdDecompressPromise = zlib.zstdDecompress ? promisify(zlib.zstdDecompress) : undefined;

exports.getModUpdater = exports.ModUpdater = void 0;

const UPDATE_CHECK_URL = `https://api.github.com/repos/TheKing-OfTime/YandexMusicModClient/releases/latest`;
const APP_ASAR_PATH = electron.app.getAppPath();
const APP_ASAR_TMP_DOWNLOAD_PATH = path.join(
  electron.app.getAppPath(),
  "../../",
  "temp\\app.asar",
);
const APP_ASAR_TMP_GZIP_DOWNLOAD_PATH = path.join(
  electron.app.getAppPath(),
  "../../",
  "temp\\app.asar.gz",
);
const APP_ASAR_TMP_ZSTD_DOWNLOAD_PATH = path.join(
electron.app.getAppPath(),
"../../",
"temp\\app.asar.zst",
);
const TMP_PATH = path.join(electron.app.getAppPath(), "../../", "\\temp");
const currentVersion = config_js_1.config.modification.version;
console.log(APP_ASAR_PATH);
let latestVersion = currentVersion;

class ModUpdater {
  updaterId = null;
  onModUpdateListeners = [];
  logger;
  latestUrl = undefined;
  isCompressed = false;
  compressionType = null; // null, 'gzip', 'zstd'
  constructor() {
    this.isCompressed = false;
    this.logger = new Logger_js_1.Logger("ModUpdaterLogger");
    this.logger.log("Initializing");
  }

  start() {
    this.check();
    this.updaterId = setInterval(() => {
      this.check();
    }, config_js_1.config.common.UPDATE_POLL_INTERVAL_MS);
    this.logger.log("Loop started");
  }
  stop() {
    if (this.updaterId) {
      clearInterval(this.updaterId);
      this.logger.log("Loop stopped");
    }
  }

  parseAssets(assets) {
    const priorityFiles = ["app.asar.gz", "app.asar"];

    if (zstdDecompressPromise) {
      priorityFiles.unshift("app.asar.zst");
    }

    for (const filename of priorityFiles) {
      const asset = assets.find((a) => a.name === filename);
      if (asset) {
        if (filename === "app.asar.gz") {
          this.isCompressed = true;
          this.compressionType = "gzip";
        }
        if (filename === "app.asar.zst") {
          this.isCompressed = true;
          this.compressionType = "zstd";
        }
        return asset.browser_download_url;
      }
    }
  }

  async check(force = false) {
    const url = await this.checkForUpdates(force);
    if (!url) return;

    this.latestUrl = url;
    force
      ? this.onModUpdateListeners.forEach((listener) => {
          listener(currentVersion, latestVersion);
        })
      : setTimeout(() => {
          //That's disgusting fix. I know...
          this.onModUpdateListeners.forEach((listener) => {
            listener(currentVersion, latestVersion);
          });
        }, 5000);
  }

  async checkForUpdates(force = false) {
    const response = await fetch(UPDATE_CHECK_URL);
    const releaseData = await response.json();
    if (force || semver.lt(latestVersion, releaseData.name)) {
      latestVersion = releaseData.name;
      this.logger.log(
        "New version available:",
        currentVersion,
        "->",
        latestVersion,
      );
      this.isCompressed = false;
      return this.parseAssets(releaseData.assets);
    }
    return false;
  }

  async downloadFile(url, path, callback) {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
      keepAlive: true,
    });

    const writer = fs.createWriteStream(path);
    let isFinished = false;
    let isError = false;

    const response = await axios.get(url, {
      httpsAgent,
      responseType: "stream",
    });

    const totalLength = parseInt(response.headers["content-length"] || "0", 10);
    let downloadedLength = 0;

    response.data.on("data", (chunk) => {
      if (isFinished) return;
      downloadedLength += chunk.length;
      const progress = downloadedLength / totalLength;

      callback(progress, progress);
      writer.write(chunk);
    });
    response.data.on("end", () => {
      if (isFinished) return;
      isFinished = true;
      writer.end();
    });
    response.data.on("error", (err) => {
      if (isFinished) return;
      isFinished = true;
      isError = true;
      writer.end();
      fsPromise.unlink(path);
      this.logger.error("Download error:", err.message);
      callback(-1, -1);
    });

    writer.on("finish", async () => {
      try {
        if (!isFinished) return;
        if (isError) return;
        this.logger.log("Downloaded update.");
        if (this.isCompressed) {
          if (this.compressionType === "zstd" && zstdDecompressPromise) {
            await this.decompressZstdFile(
              APP_ASAR_TMP_ZSTD_DOWNLOAD_PATH,
              APP_ASAR_TMP_DOWNLOAD_PATH,
            );
          } else {
            await this.decompressGzipFile(
              APP_ASAR_TMP_GZIP_DOWNLOAD_PATH,
              APP_ASAR_TMP_DOWNLOAD_PATH,
            );
          }

        }
        callback(1.1, -1);
        this.logger.log("Update ready to install.");
      } catch (e) {
        await fsPromise.unlink(path);
        this.logger.error("Error writing file:", e);
        callback(-1, -1);
      }
    });

    writer.on("error", (err) => {
      fsPromise.unlink(path);
      this.logger.error("Error writing file:", err);
      callback(-1, -1);
    });
  }

  async deleteFile(path) {
    await fsPromise.unlink(path);
    this.logger.log("Deleted: ", path);
  }

  async renameFile(oldPath, newPath) {
    await fsPromise.rename(oldPath, newPath);
    this.logger.log("Renamed: ", oldPath, " to ", newPath);
  }
  async copyFile(oldPath, newPath) {
    await execPromise(`copy ${oldPath} ${newPath}`);
    this.logger.log("Copied: ", oldPath, " to ", newPath);
  }

  async openPatcher(path) {
    const cmdScript = `ymmp://patch/from-mod/${encodeURI(path)}`;
    this.logger.log("Opening external detached: ", cmdScript);
    await this.openExternalDetached(cmdScript);
  }

  async openExternalDetached(url) {
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

    (await spawnAsync(command, args, { detached: true, stdio: 'ignore', })).unref();
  }

  async decompressGzipFile(oldPath, newPath) {
    const compressedData = await fsPromise.readFile(oldPath);

    const decompressedData = await unzipPromise(compressedData);

    await fsPromise.writeFile(newPath, decompressedData);
    this.logger.log("Decompressed: ", oldPath, " to ", newPath);
  }

  async decompressZstdFile(oldPath, newPath) {
    const compressedData = await fsPromise.readFile(oldPath);

    const decompressedData = await zstdDecompressPromise(compressedData);

    await fsPromise.writeFile(newPath, decompressedData);
    this.logger.log("Decompressed: ", oldPath, " to ", newPath);
  }

  onUpdateAvailable(listener) {
    this.onModUpdateListeners.push(listener);
  }
  async onUpdateDownload(callback) {
    if (!fs.existsSync(TMP_PATH)) {
      await fsPromise.mkdir(TMP_PATH);
      this.logger.log("Created temp directory.");
    }
    await this.downloadFile(
      this.latestUrl,
      this.isCompressed
        ? APP_ASAR_TMP_GZIP_DOWNLOAD_PATH
        : APP_ASAR_TMP_DOWNLOAD_PATH,
      callback,
    );
  }

  async onInstallUpdate() {
    this.logger.log("Installing update...");
    try {
      await this.openPatcher(APP_ASAR_TMP_DOWNLOAD_PATH);
    } catch (e) {
      this.logger.error("Update install failed:", e);
    }
    this.logger.log("Update installed.");
  }
}

exports.ModUpdater = ModUpdater;
exports.getModUpdater = (() => {
  let modUpdater;
  return () => {
    if (!modUpdater) {
      modUpdater = new ModUpdater();
    }
    return modUpdater;
  };
})();
