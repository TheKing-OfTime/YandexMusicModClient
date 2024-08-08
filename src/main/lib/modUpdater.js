const fetch = require("node-fetch");
const { writeFile } = require('fs').promises;
const path = require("path");
const semver = require("semver");
const Logger_js_1 = require("../packages/logger/Logger.js");
const config_js_1 = require("../config.js");

const UPDATE_CHECK_URL = `https://api.github.com/repos/TheKing-OfTime/YandexMusicModClient/releases/tags/${config_js_1.config.modification.branch}`;
const APP_ASAR_PATH = path.join(process.env.LOCALAPPDATA,'\\Programs\\YandexMusic\\resources\\app.asar');
const currentVersion = config_js_1.config.modification.version;
console.log(APP_ASAR_PATH)


class ModUpdater {
    latestVersion = null;
    updaterId = null;
    onModUpdateListeners = [];
    logger;
    constructor() {
        this.logger = new Logger_js_1.Logger("ModUpdaterLogger");
        this.logger.log("Initializing");
    }

    start() {
        this.checkAndInstall();
        this.updaterId = setInterval(() => {
            this.checkAndInstall();
        }, config_js_1.config.common.UPDATE_POLL_INTERVAL_MS);
        this.logger.log("Loop started");
    }
    stop() {
        if (this.updaterId) {
            clearInterval(this.updaterId);
            this.logger.log("Loop stopped");
        }
    }

    async checkAndInstall() {
        const url = await this.checkForUpdates()
        if (!url) return;

        await this.downloadFile(url, APP_ASAR_PATH);
    }

    async checkForUpdates() {
        const response = await fetch(UPDATE_CHECK_URL);
        const releaseData = await response.json()
        this.latestVersion = releaseData.name;
        if (semver.lt(currentVersion, this.latestVersion)) {
            this.logger.log("New version available:", currentVersion, "->", this.latestVersion);
            return releaseData.assets[0].browser_download_url;
        }
        return false;
    }

    async downloadFile(url, path) {
        const res = await fetch(url);
        const buffer = await res.buffer();
        await writeFile(path, buffer);
        this.logger.log("Downloaded. Restart to apply changes");
        this.onModUpdateListeners.forEach((listener) => {
            listener(currentVersion, this.latestVersion);
        });
    }

    onUpdate(listener) {
        this.onModUpdateListeners.push(listener);
    }
}

module.exports = ModUpdater;
