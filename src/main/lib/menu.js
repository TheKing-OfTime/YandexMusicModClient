"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMenu = void 0;
const electron_1 = require("electron");
const node_os_1 = __importDefault(require("node:os"));
const updater_js_1 = require("./updater.js");
const config_js_1 = require("../config.js");
const platform_js_1 = require("../constants/platform.js");
const i18n_js_1 = require("./i18n.js");
const createSupportChatUrl = () => {
    const context = JSON.stringify({ entrypoint: 'web_desktop' });
    return `https://yandex.ru/chat?context=${encodeURIComponent(context)}#${config_js_1.config.common.SUPPORT_URL}`;
};
const createApplicationMenu = () => {
    const updater = (0, updater_js_1.getUpdater)();
    const template = [];
    if (node_os_1.default.platform() === platform_js_1.Platform.MACOS) {
        template.push({
            label: (0, i18n_js_1.formatMessage)({ id: 'about-app.app-name' }),
            submenu: [
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.about' }),
                    role: 'about'
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.terms' }),
                    click() {
                        electron_1.shell.openExternal(config_js_1.config.common.TERMS_OF_USE_URL);
                    }
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.recommendations' }),
                    click() {
                        electron_1.shell.openExternal(config_js_1.config.common.RECOMMENDATIONS_URL);
                    }
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.support' }),
                    click() {
                        electron_1.shell.openExternal(createSupportChatUrl());
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.hide-yandex-music' }),
                    role: 'hide'
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.quit' }),
                    role: 'quit'
                }
            ]
        });
        template.push({
            label: (0, i18n_js_1.formatMessage)({ id: 'desktop.edit' }),
            submenu: [
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.undo' }),
                    accelerator: 'CmdOrCtrl+Z',
                    role: 'undo'
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.redo' }),
                    accelerator: 'Shift+CmdOrCtrl+Z',
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.cut' }),
                    accelerator: 'CmdOrCtrl+X',
                    role: 'cut'
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.copy' }),
                    accelerator: 'CmdOrCtrl+C',
                    role: 'copy'
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.paste' }),
                    accelerator: 'CmdOrCtrl+V',
                    role: 'paste'
                },
                {
                    label: (0, i18n_js_1.formatMessage)({ id: 'desktop.select-all' }),
                    accelerator: 'CmdOrCtrl+A',
                    role: 'selectAll'
                }
            ]
        });
    }
    if (config_js_1.config.enableDevTools) {
        const debugMenu = [
            {
                role: 'reload'
            },
            {
                role: 'forceReload'
            },
            {
                role: 'toggleDevTools'
            }
        ];
        if (config_js_1.config.enableAutoUpdate) {
            debugMenu.unshift({
                label: 'Check for updates',
                click() {
                    updater.check();
                }
            });
        }
        template.push({
            label: 'Debug',
            submenu: debugMenu
        });
    }
    return electron_1.Menu.buildFromTemplate(template);
};
const setupMenu = () => {
    electron_1.Menu.setApplicationMenu(createApplicationMenu());
};
exports.setupMenu = setupMenu;
