"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdater = exports.Updater = void 0;
const semver = require("semver");
const electron_1 = require("electron");
const electron_updater_1 = require("electron-updater");
const state_js_1 = require("./state.js");
const store_js_1 = require("./store.js");
const deviceInfo_js_1 = require("./deviceInfo.js");
const config_js_1 = require("../config.js");
const updateStatus_js_1 = require("../types/updateStatus.js");
const Logger_js_1 = require("../packages/logger/Logger.js");
const probabilityBuckets = {
    6: '0-5',
    26: '5-25',
    51: '25-50',
    101: '50-100'
};
const isVersionDeprecated = () => {
    if (!config_js_1.config.common.DEPRECATED_VERSIONS) {
        return false;
    }
    return semver.satisfies(electron_1.app.getVersion(), config_js_1.config.common.DEPRECATED_VERSIONS);
};
class Updater {
  latestAvailableVersion = null;
  updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
  updaterId = null;
  onUpdateListeners = [];
  logger;
  constructor() {
        this.logger = new Logger_js_1.Logger('UpdateLogger');
        electron_updater_1.autoUpdater.autoDownload = false;
        electron_updater_1.autoUpdater.logger = this.logger.withPrefix('Logger inside "electron-updater" package');
    electron_updater_1.autoUpdater.autoRunAppAfterInstall = true;
        electron_updater_1.autoUpdater.on('error', (error) => {
            this.logger.error('Updater error', error);
    });
        electron_updater_1.autoUpdater.on('update-downloaded', (updateInfo) => {
            this.logger.log('Update downloaded', updateInfo.version);
            if (isVersionDeprecated()) {
                this.logger.info('This version is deprecated', electron_1.app.getVersion(), config_js_1.config.common.DEPRECATED_VERSIONS);
          this.install();
          return;
        }
      this.latestAvailableVersion = updateInfo.version;
      this.onUpdateListeners.forEach((listener) => {
        listener(updateInfo.version);
      });
    });
  }
  updateApplier(updateResult) {
        const { downloadPromise, updateInfo, cancellationToken } = updateResult;
        if ('commonConfig' in updateInfo) {
            this.logger.info('Common config', updateInfo.commonConfig);
      (0, config_js_1.applyCommonConfig)(updateInfo.commonConfig);
    }
        if (downloadPromise !== null) {
            return;
        }
        (0, deviceInfo_js_1.logSystemMetrics)(true);
        if (isVersionDeprecated() || !config_js_1.config.enableUpdateByProbability) {
            this.downloadUpdate(cancellationToken, updateInfo.version);
      return;
    }
        if ('updateProbability' in updateInfo && config_js_1.config.enableUpdateByProbability) {
            this.logger.info(`Update probability: ${updateInfo.updateProbability}; checking with client value ${this.clientUpdateProbability}`);
            const updateProbability = Number(updateInfo.updateProbability);
            if (this.clientUpdateProbability <= updateProbability && updateProbability > 0) {
                this.downloadUpdate(cancellationToken, updateInfo.version);
            }
        }
    }
    async downloadUpdate(cancellationToken, version) {
        this.logger.info('New version available', electron_1.app.getVersion(), '->', version);
    this.updateStatus = updateStatus_js_1.UpdateStatus.DOWNLOADING;
        electron_updater_1.autoUpdater
            .downloadUpdate(cancellationToken)
      .then((downloadResult) => {
        if (downloadResult) {
          this.updateStatus = updateStatus_js_1.UpdateStatus.DOWNLOADED;
          this.logger.info(`Download result: ${downloadResult}`);
        }
      })
      .catch((error) => {
        this.updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
        this.logger.error("Downloader error", error);
      });
  }
  async check() {
    if (this.updateStatus !== updateStatus_js_1.UpdateStatus.IDLE) {
      this.logger.log("New update is processing", this.updateStatus);
      return;
    }
    try {
      const updateResult =
        await electron_updater_1.autoUpdater.checkForUpdates();
      if (!updateResult) {
                this.logger.log('Updater is inactive');
        return;
      }
      this.updateApplier(updateResult);
    } catch (error) {
      this.logger.error("Update check error", error);
    }
  }
  start() {
    this.check();
    this.updaterId = setInterval(() => {
      this.check();
    }, config_js_1.config.common.UPDATE_POLL_INTERVAL_MS);
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
    this.logger.info("Installing a new version", this.latestAvailableVersion);
    state_js_1.state.willQuit = true;
    electron_updater_1.autoUpdater.quitAndInstall();
  }
    get clientUpdateProbability() {
        const deviceId = (0, store_js_1.getDeviceId)();
        const num = Number.parseInt(deviceId, 16);
        if (Number.isNaN(num)) {
            return 0;
        }
        return num % 101;
    }
    getProbabilityBucket() {
        for (const bucket of Object.keys(probabilityBuckets)) {
            if (this.clientUpdateProbability < Number(bucket)) {
                return probabilityBuckets[Number(bucket)];
            }
        }
        return;
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
