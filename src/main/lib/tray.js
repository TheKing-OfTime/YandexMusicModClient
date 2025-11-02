"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTray = exports.updateTrayMenu = void 0;
const electron_1 = require("electron");
const node_path_1 = require("node:path");
const deviceInfo_js_1 = require("./deviceInfo.js");
const updater_js_1 = require("./updater.js");
const modUpdater_js_1 = require("./modUpdater.js");
const formatters_js_1 = require("./i18n/formatters.js");
const state_js_1 = require("./state.js");
const toggleWindowState_js_1 = require("./window/toggleWindowState.js");
const platform_js_1 = require("../types/platform.js");
const playerActions_js_1 = require("../types/playerActions.js");
const config_js_1 = require("../config.js");
const events_js_1 = require("../events.js");
const store_js_1 = require("./store.js");
const supportChat_js_1 = require("./supportChat.js");
let tray = null;
const createPngIcon = () => {
    const sizes = [22, 24, 32, 48, 16];
    const iconsPath = (0, node_path_1.join)(
        process.resourcesPath,
        "assets",
        "icons",
    );
    const icon = electron_1.nativeImage.createEmpty();
    for (const size of sizes) {
        const iconPath = (0, node_path_1.join)(
            iconsPath,
            `icon_${size}x${size}.png`,
        );
        const sizeIcon = electron_1.nativeImage.createFromPath(iconPath);
        icon.addRepresentation({
            width: size,
            height: size,
            buffer: sizeIcon.toPNG(),
        });
    }
    return icon;
};
const createIcoIcon = () => {
    const iconPath = (0, node_path_1.join)(
        process.resourcesPath,
        "assets",
        "icon.ico",
    );
    return electron_1.nativeImage.createFromPath(iconPath);
};
const trayIcon = () => {
    if (deviceInfo_js_1.devicePlatform === platform_js_1.Platform.LINUX) {
        return createPngIcon();
    }
    return createIcoIcon();
};
const createContextMenu = (window) => {
    const updater = (0, updater_js_1.getUpdater)();
    const modUpdater = (0, modUpdater_js_1.getModUpdater)();
    const windowStateLabel = state_js_1.state.isMinimized
        ? (0, formatters_js_1.formatMessage)({ id: "windows-menu.unwrap" })
        : (0, formatters_js_1.formatMessage)({ id: "windows-menu.roll-up" });
    const playButtonLabel = state_js_1.state.player.isPlaying
        ? (0, formatters_js_1.formatMessage)({ id: "player-actions.pause" })
        : (0, formatters_js_1.formatMessage)({ id: "player-actions.play" });
    const template = [
        {
            label: windowStateLabel,
            click() {
                (0, toggleWindowState_js_1.toggleWindowState)(window);
            },
        },
        {
            label: (0, formatters_js_1.formatMessage)({
                id: "desktop.check-for-updates",
            }),
            click() {
                updater.check();
            },
        },
        {
            label: "Проверить обновления мода",
            click() {
                modUpdater.check();
            },
        },
        {
            label: "Переустановить мод",
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
            label: (0, formatters_js_1.formatMessage)({
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
            label: (0, formatters_js_1.formatMessage)({
                id: "player-actions.next-track",
            }),
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
        label: (0, formatters_js_1.formatMessage)({ id: "desktop.about" }),
        submenu: [
          {
            label: (0, formatters_js_1.formatMessage)({
              id: "desktop.terms",
            }),
            click() {
              electron_1.shell.openExternal(
                  config_js_1.config.common.TERMS_OF_USE_URL,
              );
            },
          },
          {
            label: (0, formatters_js_1.formatMessage)({
              id: "desktop.recommendations",
            }),
            click() {
              electron_1.shell.openExternal(
                  config_js_1.config.common.RECOMMENDATIONS_URL,
              );
            },
          },
          {
            label: (0, formatters_js_1.formatMessage)({
              id: "desktop.support",
            }),
            click() {
              electron_1.shell.openExternal(
                  (0, supportChat_js_1.createSupportChatUrl)(),
              );
            },
          },
        ],
      },
        {
            type: "separator",
        },
        {
            label: (0, formatters_js_1.formatMessage)({ id: "desktop.quit" }),
            role: "quit",
        },
    ];
    if (config_js_1.config.app.enableDevTools || store_js_1.getDevtoolsEnabled()) {
        template.unshift({
            label: "Debug",
            submenu: [
                {
                    label: "Reload",
                    click() {
                        window.reload();
                    },
                },
                {
                    label: "Toggle DevTools",
                    click() {
                        if (window.webContents.isDevToolsOpened()) {
                            window.webContents.closeDevTools();
                        } else {
                            window.webContents.openDevTools();
                        }
                    },
                },
            ],
        });
    }
    return electron_1.Menu.buildFromTemplate(template);
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
        (0, toggleWindowState_js_1.toggleWindowState)(window);
        // (0, events_js_1.sendPlayerAction)(    TODO uncomment when Electron fix double-click issue
        //   window,
        //   playerActions_js_1.PlayerActions.TOGGLE_PLAY,
        // );
    });
    tray.on("double-click", () => {
        (0, toggleWindowState_js_1.toggleWindowState)(window);
    });
};
exports.setupTray = setupTray;
