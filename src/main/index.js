"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const node_os_1 = __importDefault(require("node:os"));
const store_js_1 = require("./lib/store.js");
const config_js_1 = require("./config.js");
const platform_js_1 = require("./types/platform.js");
const Logger_js_1 = require("./packages/logger/Logger.js");
const systemMenu_js_1 = require("./lib/systemMenu.js");
const tray_js_1 = require("./lib/tray.js");
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
(0, store_js_1.init)();
(0, handleUncaughtException_js_1.handleUncaughtException)();
(0, singleInstance_js_1.checkForSingleInstance)();
(0, handleDeeplink_js_1.handleDeeplinkOnApplicationStartup)();
electron_1.app.setLoginItemSettings({
    openAtLogin: store_js_1.getModFeatures()?.windowBehavior?.autoLaunchOnSystemStartup ?? false,
    path: electron_1.app.getPath("exe")
});
(async () => {
  const updater = (0, updater_js_1.getUpdater)();
  const modUpdater = new modUpdater_js_1;
  await electron_1.app.whenReady();
  (0, systemMenu_js_1.setupSystemMenu)();
  const window = await (0, createWindow_js_1.createWindow)();
  if (node_os_1.default.platform() === platform_js_1.Platform.WINDOWS) {
    (0, tray_js_1.setupTray)(window);
  }
  (0, safeRedirects_js_1.safeRedirects)(window);
    (0, handleWindowReady_js_1.handleWindowReady)(window);
  (0, handleWindowLifecycleEvents_js_1.handleWindowLifecycleEvents)(window);
  (0, handleWindowSessionEvents_js_1.handleWindowSessionEvents)(window);
  (0, events_js_1.handleApplicationEvents)(window);
  (0, handleExternalLink_js_1.handleExternalLink)(window);
  (0, handleDeeplink_js_1.handleDeeplink)(window);
  (0, taskBarExtension_js_1.taskBarExtension)(window);
  (0, handleHeadersReceived_js_1.handleHeadersReceived)(window);
  (0, handleBackgroundTasks_js_1.handleBackgroundTasks)(window);
  (0, handleCrash_js_1.handleCrash)();
  await (0, loadURL_js_1.loadURL)(window);
  if (node_os_1.default.platform() === platform_js_1.Platform.WINDOWS) {
    (0, customTitleBar_js_1.createCustomTitleBar)(window);
  }
  if (store_js_1.getAutoUpdatesEnabled() ?? config_js_1.config.enableAutoUpdate) {
    updater.start();
    updater.onUpdate((version) => {
      (0, events_js_1.sendUpdateAvailable)(window, version);
    });
    modUpdater.start();
    modUpdater.onUpdate((currVersion, newVersion) => {
      (0, events_js_1.sendModUpdateAvailable)(window, currVersion, newVersion);
    });
  }
})();
