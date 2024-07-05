"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWindow =
  exports.toggleWindowState =
  exports.toggleWindowVisibility =
    void 0;
const node_path_1 = __importDefault(require("node:path"));
const electron_1 = require("electron");
const config_js_1 = require("../config.js");
const state_js_1 = require("./state.js");
const tray_js_1 = require("./tray.js");
const taskBarExtension_js_1 = require("./taskBarExtension/taskBarExtension.js");
const toggleWindowVisibility = (window, isVisible) => {
  if (isVisible) {
    window.show();
    window.setSkipTaskbar(false);
    taskBarExtension_js_1.onPlayerStateChange(window, undefined);
    state_js_1.state.isWindowHidden = false;
  } else {
    window.hide();
    window.setSkipTaskbar(true);
    state_js_1.state.isWindowHidden = true;
  }
  (0, tray_js_1.updateTrayMenu)(window);
};
exports.toggleWindowVisibility = toggleWindowVisibility;
const toggleWindowState = (window) => {
  if (state_js_1.state.isWindowHidden) {
    (0, exports.toggleWindowVisibility)(window, true);
  } else if (window.isMinimized()) {
    window.restore();
    taskBarExtension_js_1.onPlayerStateChange(window, undefined);
  } else {
    window.minimize();
  }
  (0, tray_js_1.updateTrayMenu)(window);
};
exports.toggleWindowState = toggleWindowState;
const createWindow = async () => {
  const window = new electron_1.BrowserWindow({
    show: false,
    center: true,
    titleBarStyle: "hidden",
    trafficLightPosition: {
      x: 16,
      y: 10,
    },
    minWidth: 768,
    minHeight: 650,
    width: 1280,
    height: 800,
    webPreferences: {
      devTools: config_js_1.config.enableDevTools,
      webSecurity: config_js_1.config.enableWebSecurity,
      nodeIntegrationInWorker: true,
      nodeIntegration: false,
      contextIsolation: true,
      autoplayPolicy: "no-user-gesture-required",
      preload: node_path_1.default.join(__dirname, "preload.js"),
    },
  });
  window.once("ready-to-show", () => {
    (0, exports.toggleWindowVisibility)(window, true);
  });
  return window;
};
exports.createWindow = createWindow;
