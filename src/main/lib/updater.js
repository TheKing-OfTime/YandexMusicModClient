"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdater = exports.Updater = void 0;
const semver = require('semver');
const electron_1 = require("electron");
const electron_updater_1 = require("electron-updater");
const state_js_1 = require("./state.js");
const config_js_1 = require("../config.js");
const updateUrgency_js_1 = require("../constants/updateUrgency.js");
const updateStatus_js_1 = require("../constants/updateStatus.js");
const Logger_js_1 = require("../packages/logger/Logger.js");
class Updater {
    latestAvailableVersion = null;
    updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
    updaterId = null;
    onUpdateListeners = [];
    logger;
    constructor() {
        this.logger = new Logger_js_1.Logger('UpdateLogger');
        electron_updater_1.autoUpdater.logger = this.logger.withPrefix('Logger inside "electron-updater" package');
        electron_updater_1.autoUpdater.autoRunAppAfterInstall = true;
        electron_updater_1.autoUpdater.on('error', (error) => {
            this.logger.error('Updater error', error);
        });
        electron_updater_1.autoUpdater.on('checking-for-update', () => {
            this.logger.log('Checking for update');
        });
        electron_updater_1.autoUpdater.on('update-downloaded', (updateInfo) => {
            this.logger.log('Update downloaded', updateInfo.version);
            if ('updateUrgency' in updateInfo) {
                if (updateInfo.updateUrgency === updateUrgency_js_1.UpdateUrgency.HARD) {
                    this.logger.info('This update should be installed now');
                    this.install();
                    return;
                }
            }
            if (config_js_1.config.common.DEPRECATED_VERSIONS) {
                const isDeprecatedVersion = semver.satisfies(electron_1.app.getVersion(), config_js_1.config.common.DEPRECATED_VERSIONS);
                if (isDeprecatedVersion) {
                    this.logger.info('This version is deprecated', electron_1.app.getVersion(), config_js_1.config.common.DEPRECATED_VERSIONS);
                    this.install();
                    return;
                }
            }
            this.latestAvailableVersion = updateInfo.version;
            this.onUpdateListeners.forEach((listener) => {
                listener(updateInfo.version);
            });
        });
    }
    updateApplier(updateResult) {
        const { downloadPromise, updateInfo } = updateResult;
        if ('updateUrgency' in updateInfo) {
            this.logger.info('Urgency', updateInfo.updateUrgency);
        }
        if ('commonConfig' in updateInfo) {
            this.logger.info('Common config', updateInfo.commonConfig);
            (0, config_js_1.applyCommonConfig)(updateInfo.commonConfig);
        }
        if (!downloadPromise) {
            return;
        }
        this.logger.info('New version available', electron_1.app.getVersion(), '->', updateInfo.version);
        this.updateStatus = updateStatus_js_1.UpdateStatus.DOWNLOADING;
        downloadPromise
            .then((downloadResult) => {
            if (downloadResult) {
                this.updateStatus = updateStatus_js_1.UpdateStatus.DOWNLOADED;
                this.logger.info(`Download result: ${downloadResult}`);
            }
        })
            .catch((error) => {
            this.updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
            this.logger.error('Downloader error', error);
        });
    }
    async check() {
        if (this.updateStatus !== updateStatus_js_1.UpdateStatus.IDLE) {
            this.logger.log('New update is processing', this.updateStatus);
            return;
        }
        try {
            const updateResult = await electron_updater_1.autoUpdater.checkForUpdates();
            if (!updateResult) {
                this.logger.log('No update found');
                return;
            }
            this.updateApplier(updateResult);
        }
        catch (error) {
            this.logger.error('Update check error', error);
        }
    }
    start() {
        this.check();
        this.updaterId = setInterval(() => {
            this.check();
        }, config_js_1.config.common.UPDATE_POLL_INTERVAL);
    }
    stop() {
        if (this.updaterId) {
            clearInterval(this.updaterId);
        }
    }
    onUpdate(listener) {
        this.onUpdateListeners.push(listener);
    }
    install() {
        this.logger.info('Installing a new version', this.latestAvailableVersion);
        state_js_1.state.willQuit = true;
        electron_updater_1.autoUpdater.quitAndInstall();
    }
}
exports.Updater = Updater;
exports.getUpdater = (() => {
    let updater;
    return () => {
        if (!updater) {
            updater = new Updater();
        }
        return updater;
    };
})();
