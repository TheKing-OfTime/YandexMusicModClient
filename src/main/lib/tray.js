"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTray = exports.updateTrayMenu = void 0;
const electron_1 = require("electron");
const node_path_1 = require("node:path");
const updater_js_1 = require("./updater.js");
const modUpdater_js_1 = require("./modUpdater.js");
const i18n_js_1 = require("./i18n.js");
const state_js_1 = require("./state.js");
const createWindow_js_1 = require("./createWindow.js");
const playerActions_js_1 = require("../types/playerActions.js");
const config_js_1 = require("../config.js");
const events_js_1 = require("../events.js");
let tray = null;
const trayIcon = () => {
  const iconPath = (0, node_path_1.join)(
    process.resourcesPath,
    "assets",
    "icon.ico",
  );
  return electron_1.nativeImage.createFromPath(iconPath);
};
const createContextMenu = (window) => {
  const updater = (0, updater_js_1.getUpdater)();
  const modUpdater = (0, modUpdater_js_1.getModUpdater)();
  const windowStateLabel =
    state_js_1.state.isWindowHidden || window.isMinimized()
      ? (0, i18n_js_1.formatMessage)({ id: "windows-menu.unwrap" })
      : (0, i18n_js_1.formatMessage)({ id: "windows-menu.roll-up" });
  const playButtonLabel = state_js_1.state.player.isPlaying
    ? (0, i18n_js_1.formatMessage)({ id: "player-actions.pause" })
    : (0, i18n_js_1.formatMessage)({ id: "player-actions.play" });
  return electron_1.Menu.buildFromTemplate([
    {
      label: windowStateLabel,
      click() {
        (0, createWindow_js_1.toggleWindowState)(window);
      },
    },
    {
      label: (0, i18n_js_1.formatMessage)({ id: "desktop.check-for-updates" }),
      click() {
        updater.check();
      },
    },
    {
      label: 'Проверить обновления мода',
      click() {
        modUpdater.check();
      },
    },
    {
      label: 'Переустановить мод',
      click() {
        modUpdater.check(true);
      },
    },
    {
      type: "separator",
    },
    {
      label: playButtonLabel,
      click() {
        if (state_js_1.state.player.isPlaying) {
          (0, events_js_1.sendPlayerAction)(
            window,
            playerActions_js_1.PlayerActions.PAUSE,
          );
        } else {
          (0, events_js_1.sendPlayerAction)(
            window,
            playerActions_js_1.PlayerActions.PLAY,
          );
        }
      },
    },
    {
      label: (0, i18n_js_1.formatMessage)({
        id: "player-actions.previous-track",
      }),
      enabled: state_js_1.state.player.canMoveBackward,
      click() {
        (0, events_js_1.sendPlayerAction)(
          window,
          playerActions_js_1.PlayerActions.MOVE_BACKWARD,
        );
      },
    },
    {
      label: (0, i18n_js_1.formatMessage)({ id: "player-actions.next-track" }),
      enabled: state_js_1.state.player.canMoveForward,
      click() {
        (0, events_js_1.sendPlayerAction)(
          window,
          playerActions_js_1.PlayerActions.MOVE_FORWARD,
        );
      },
    },
    {
      type: "separator",
    },
    {
      label: (0, i18n_js_1.formatMessage)({ id: "desktop.quit" }),
      role: "quit",
    },
  ]);
};
const updateTrayMenu = (window) => {
  tray?.setContextMenu(createContextMenu(window));
};
exports.updateTrayMenu = updateTrayMenu;
const setupTray = (window) => {
  tray = new electron_1.Tray(trayIcon());
  tray.setToolTip(config_js_1.config.meta.PRODUCT_NAME_LOCALIZED);
  (0, exports.updateTrayMenu)(window);
  tray.on("click", () => {
    (0, events_js_1.sendPlayerAction)(
      window,
      playerActions_js_1.PlayerActions.TOGGLE_PLAY,
    );
  });
  tray.on("double-click", () => {
    (0, createWindow_js_1.toggleWindowState)(window);
  });
};
exports.setupTray = setupTray;
