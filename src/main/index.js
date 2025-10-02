"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

global.requireIfExists = (path) => {
  try {
    return require(path);
  } catch (e) {
    return false;
  }
};

const electron_1 = require("electron");
const path = require("path");
const fs = require("fs");
const config_js_1 = require("./config.js");
const platform_js_1 = require("./types/platform.js");
const Logger_js_1 = require("./packages/logger/Logger.js");
const systemMenu_js_1 = require("./lib/systemMenu.js");
const tray_js_1 = require("./lib/tray.js");
const store_js_1 = require("./lib/store.js");
const deviceInfo_js_1 = require("./lib/deviceInfo.js");
const singleInstance_js_1 = require("./lib/singleInstance.js");
const taskBarExtension_js_1 = require("./lib/taskBarExtension/taskBarExtension.js");
const createWindow_js_1 = require("./lib/createWindow.js");
const updater_js_1 = require("./lib/updater.js");
const modUpdater_js_1 = require("./lib/modUpdater.js");
const events_js_1 = require("./events.js");
const customTitleBar_js_1 = require("./lib/customTitleBar.js");
const loadURL_js_1 = require("./lib/loadURL.js");
const safeRedirects_js_1 = require("./lib/safeRedirects.js");
const handleCrash_js_1 = require("./lib/handlers/handleCrash.js");
const handleExternalLink_js_1 = require("./lib/handlers/handleExternalLink.js");
const handleWindowLifecycleEvents_js_1 = require("./lib/handlers/handleWindowLifecycleEvents.js");
const handleDeeplink_js_1 = require("./lib/handlers/handleDeeplink.js");
const handleUncaughtException_js_1 = require("./lib/handlers/handleUncaughtException.js");
const handleWindowSessionEvents_js_1 = require("./lib/handlers/handleWindowSessionEvents.js");
const handleWindowReady_js_1 = require("./lib/handlers/handleWindowReady.js");
const handleHeadersReceived_js_1 = require("./lib/handlers/handleHeadersReceived/handleHeadersReceived.js");
const handleBackgroundTasks_js_1 = require("./lib/handlers/handleBackgroundTasks.js");

Logger_js_1.Logger.setupLogger();
const logger = new Logger_js_1.Logger("Main");

logger.log('Application starting...');

// Set the session storage (aka offline tracks, cache, etc) path to the custom path if requested
function initSessionStoragePath() {
  if (
    (store_js_1.getModFeatures()?.downloader.useCustomPathForSessionStorage ??
      false) &&
    fs.existsSync(
      store_js_1.getModFeatures()?.downloader.customPathForSessionStorage,
    )
  ) {
    if (
      electron_1.app.getPath("sessionData") ===
      store_js_1.getModFeatures().downloader.customPathForSessionStorage
    )
      return;
    logger.log(
      "Custom path for session storage requested:",
      store_js_1.getModFeatures()?.downloader.customPathForSessionStorage,
    );
    const previousSessionStoragePath = electron_1.app.getPath("sessionData");
    electron_1.app.setPath(
      "sessionData",
      path.join(
        store_js_1.getModFeatures()?.downloader.customPathForSessionStorage,
        electron_1.app.getName(),
      ),
    );
    fs.cpSync(
      previousSessionStoragePath,
      electron_1.app.getPath("sessionData"),
      {
        recursive: true,
        force: true,
        preserveTimestamps: true,
        filter: (src, destination) => {
          return !["config.json", ".updaterId", "logs"].some((el) =>
            src.endsWith(el),
          );
        },
      },
    );
  } else {
    if (
      electron_1.app.getPath("sessionData") ===
      electron_1.app.getPath("userData")
    )
      return;
    logger.log("Default path for session storage requested");
    const previousSessionStoragePath = electron_1.app.getPath("sessionData");
    electron_1.app.setPath("sessionData", electron_1.app.getPath("userData"));
    fs.cpSync(
      previousSessionStoragePath,
      electron_1.app.getPath("sessionData"),
      {
        recursive: true,
        force: true,
        preserveTimestamps: true,
        filter: (src, destination) => {
          return !["config.json", ".updaterId", "logs"].some((el) =>
            src.endsWith(el),
          );
        },
      },
    );
  }
}

(0, store_js_1.init)();
(0, handleUncaughtException_js_1.handleUncaughtException)();
(0, singleInstance_js_1.checkForSingleInstance)();
(0, handleDeeplink_js_1.handleDeeplinkOnApplicationStartup)();

logger.log(`Auto-launch on system startup: ${store_js_1.getModFeatures()?.windowBehavior?.autoLaunchOnSystemStartup ?? false}`);
electron_1.app.setLoginItemSettings({
  openAtLogin:
    store_js_1.getModFeatures()?.windowBehavior?.autoLaunchOnSystemStartup ??
    false,
  path: electron_1.app.getPath("exe"),
});

if(!(store_js_1.getModFeatures()?.enableHardwareAcceleration ?? true)) {
    logger.log('Disabling hardware acceleration as requested');
    electron_1.app.disableHardwareAcceleration();
}

if (store_js_1.getModFeatures()?.tryEnableSurroundAudio ?? false) {
  logger.log(
    "--try-supported-channel-layouts:",
    electron_1.app.commandLine.hasSwitch("try-supported-channel-layouts"),
    "--force-wave-audio:",
    electron_1.app.commandLine.hasSwitch("force-wave-audio"),
    "--disable-audio-output-resampler:",
    electron_1.app.commandLine.hasSwitch("disable-audio-output-resampler"),
  );

  electron_1.app.commandLine.appendSwitch("try-supported-channel-layouts");
  electron_1.app.commandLine.appendSwitch("force-wave-audio");
  electron_1.app.commandLine.appendSwitch("disable-audio-output-resampler");

  logger.log(
    "--try-supported-channel-layouts:",
    electron_1.app.commandLine.hasSwitch("try-supported-channel-layouts"),
    "--force-wave-audio:",
    electron_1.app.commandLine.hasSwitch("force-wave-audio"),
    "--disable-audio-output-resampler:",
    electron_1.app.commandLine.hasSwitch("disable-audio-output-resampler"),
  );
}

initSessionStoragePath();

(async () => {
  const updater = (0, updater_js_1.getUpdater)();
  const modUpdater = (0, modUpdater_js_1.getModUpdater)();
  await electron_1.app.whenReady();

  logger.log('Electron.app is ready');

  (0, systemMenu_js_1.setupSystemMenu)();
  const window = await (0, createWindow_js_1.createWindow)();
  if (deviceInfo_js_1.devicePlatform === platform_js_1.Platform.WINDOWS) {
    (0, tray_js_1.setupTray)(window);
  }
  (0, deviceInfo_js_1.updateMaxDisplayFrameRateRefresh)();
  (0, safeRedirects_js_1.safeRedirects)(window);
  (0, handleWindowReady_js_1.handleWindowReady)(window);
  (0, handleWindowLifecycleEvents_js_1.handleWindowLifecycleEvents)(window);
  (0, handleWindowSessionEvents_js_1.handleWindowSessionEvents)(window);
  (0, events_js_1.handleApplicationEvents)(window);
  (0, handleExternalLink_js_1.handleExternalLink)(window);
  (0, handleDeeplink_js_1.handleDeeplink)(window);
  if (deviceInfo_js_1.devicePlatform === platform_js_1.Platform.WINDOWS) {
    await (0, taskBarExtension_js_1.taskBarExtension)(window);
  }
  (0, handleHeadersReceived_js_1.handleHeadersReceived)(window);
  (0, handleBackgroundTasks_js_1.handleBackgroundTasks)(window);
  (0, handleCrash_js_1.handleCrash)();
  await (0, loadURL_js_1.loadURL)(window);
  if (
    [platform_js_1.Platform.WINDOWS, platform_js_1.Platform.LINUX].includes(
      deviceInfo_js_1.devicePlatform,
    )
  ) {
    (0, customTitleBar_js_1.createCustomTitleBar)(window);
  }
  updater.onUpdate((version) => {
    (0, events_js_1.sendUpdateAvailable)(window, version);
  });
  if (
    store_js_1.getModFeatures()?.appAutoUpdates.enableAppAutoUpdate ??
    config_js_1.config.enableAutoUpdate
  ) {
    updater.start();
  }
  modUpdater.onUpdateAvailable((currVersion, newVersion) => {
    (0, events_js_1.sendModUpdateAvailable)(window, currVersion, newVersion);
  });
  if (
    store_js_1.getModFeatures()?.appAutoUpdates.enableModAutoUpdate &&
    deviceInfo_js_1.devicePlatform === platform_js_1.Platform.WINDOWS
  ) {
    modUpdater.start();
  }
})();
