const fetch = require("node-fetch");
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

const execPromise = promisify(exec);

exports.getModUpdater = exports.ModUpdater = void 0;

const UPDATE_CHECK_URL = `https://api.github.com/repos/TheKing-OfTime/YandexMusicModClient/releases/latest`;
const APP_ASAR_PATH = path.join(
  process.env.LOCALAPPDATA,
  "\\Programs\\YandexMusic\\resources\\app.asar",
);
const APP_ASAR_TMP_DOWNLOAD_PATH = path.join(
  process.env.LOCALAPPDATA,
  "\\Programs\\YandexMusic\\temp\\app.asar",
);
const TMP_PATH = path.join(
  process.env.LOCALAPPDATA,
  "\\Programs\\YandexMusic\\temp",
);
const currentVersion = config_js_1.config.modification.version;
console.log(APP_ASAR_PATH);
let latestVersion = currentVersion;

class ModUpdater {
  updaterId = null;
  onModUpdateListeners = [];
  logger;
  latestUrl = undefined;
  constructor() {
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

  async check() {
    const url = await this.checkForUpdates();
    if (!url) return;

    this.latestUrl = url;
    //await this.deleteFile(APP_ASAR_PATH)
    //await this.renameFile(APP_ASAR_UPDATE_PATH, APP_ASAR_PATH);
    setTimeout(() => {
      //That's disgusting fix. I know...
      this.onModUpdateListeners.forEach((listener) => {
        listener(currentVersion, latestVersion);
      });
    }, 5000);
  }

  async checkForUpdates() {
    const response = await fetch(UPDATE_CHECK_URL);
    const releaseData = await response.json();
    if (semver.lt(latestVersion, releaseData.name)) {
      latestVersion = releaseData.name;
      this.logger.log(
        "New version available:",
        currentVersion,
        "->",
        latestVersion,
      );
      return releaseData.assets[0].browser_download_url;
    }
    return false;
  }

  async downloadFile(url, path, callback) {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
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

    writer.on("finish", () => {
      try {
        if (!isFinished) return;
        if (isError) return;
          this.logger.log("Downloaded update.");
          this.copyFile(APP_ASAR_TMP_DOWNLOAD_PATH, APP_ASAR_PATH);
          callback(1.1, -1);
          this.logger.log("Updated installed.");
      } catch (e) {
        fsPromise.unlink(path);
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

  onUpdateAvailable(listener) {
    this.onModUpdateListeners.push(listener);
  }
  async onUpdateInstall(callback) {
    if (!fs.existsSync(TMP_PATH)) {
      await fsPromise.mkdir(TMP_PATH);
      this.logger.log("Created temp directory.");
    }
    await this.downloadFile(
      this.latestUrl,
      APP_ASAR_TMP_DOWNLOAD_PATH,
      callback,
    );
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
