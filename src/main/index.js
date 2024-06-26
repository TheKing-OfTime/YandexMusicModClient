"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const node_os_1 = __importDefault(require("node:os"));
const config_js_1 = require("./config.js");
const handleExternalLink_js_1 = require("./lib/handlers/handleExternalLink.js");
const menu_js_1 = require("./lib/menu.js");
const handleWindowLifecycleEvents_js_1 = require("./lib/handlers/handleWindowLifecycleEvents.js");
const singleInstance_js_1 = require("./lib/singleInstance.js");
const logWindowLifecycle_js_1 = require("./lib/logWindowLifecycle.js");
const taskBarExtension_js_1 = require("./lib/taskBarExtension/taskBarExtension.js");
const handleCrash_js_1 = require("./lib/handlers/handleCrash.js");
const createWindow_js_1 = require("./lib/createWindow.js");
const handleDeeplink_js_1 = require("./lib/handlers/handleDeeplink.js");
const updater_js_1 = require("./lib/updater.js");
const events_js_1 = require("./events.js");
const handleUncaughtException_js_1 = require("./lib/handlers/handleUncaughtException.js");
const customTitleBar_js_1 = require("./lib/customTitleBar.js");
const platform_js_1 = require("./constants/platform.js");
const handleMetrikaRequests_js_1 = require("./lib/handlers/handleMetrikaRequests.js");
const loadURL_js_1 = require("./lib/loadURL.js");
const safeRedirects_js_1 = require("./lib/safeRedirects.js");
const Logger_js_1 = require("./packages/logger/Logger.js");
const handleWindowSessionEvents_js_1 = require("./lib/handlers/handleWindowSessionEvents.js");
Logger_js_1.Logger.setupLogger();
(0, handleUncaughtException_js_1.handleUncaughtException)();
(0, singleInstance_js_1.checkForSingleInstance)();
(0, handleDeeplink_js_1.handleDeeplinkOnApplicationStartup)();
(async () => {
  const updater = (0, updater_js_1.getUpdater)();
  await electron_1.app.whenReady();
  (0, menu_js_1.setupMenu)();
  const window = await (0, createWindow_js_1.createWindow)();
  (0, safeRedirects_js_1.safeRedirects)(window);
  (0, handleWindowLifecycleEvents_js_1.handleWindowLifecycleEvents)(window);
  (0, handleWindowSessionEvents_js_1.handleWindowSessionEvents)(window);
  (0, events_js_1.handleApplicationEvents)(window);
  (0, handleExternalLink_js_1.handleExternalLink)(window);
  (0, logWindowLifecycle_js_1.logWindowLifecycle)(window);
  (0, handleDeeplink_js_1.handleDeeplink)(window);
  (0, handleMetrikaRequests_js_1.handleMetrikaRequests)(window);
  (0, taskBarExtension_js_1.taskBarExtension)(window);
  (0, handleCrash_js_1.handleCrash)();
  await (0, loadURL_js_1.loadURL)(window);
  if (node_os_1.default.platform() === platform_js_1.Platform.WINDOWS) {
    (0, customTitleBar_js_1.createCustomTitleBar)(window);
  }
  if (config_js_1.config.enableAutoUpdate) {
    updater.start();
    updater.onUpdate((version) => {
      (0, events_js_1.sendUpdateAvailable)(window, version);
    });
  }
})();
