"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const node_os_1 = __importDefault(require("node:os"));
const config_js_1 = require("../config.js");
const getInitialTheme_js_1 = require("./getInitialTheme.js");
const theme_js_1 = require("../constants/theme.js");
const hostnamePatterns_js_1 = require("../constants/hostnamePatterns.js");
electron_1.contextBridge.exposeInMainWorld('VERSION', String(config_js_1.config.buildInfo.VERSION));
electron_1.contextBridge.exposeInMainWorld('BRANCH', String(config_js_1.config.buildInfo.BRANCH));
electron_1.contextBridge.exposeInMainWorld('PLATFORM', node_os_1.default.platform());
electron_1.contextBridge.exposeInMainWorld('desktopEvents', {
    send(name, ...args) {
        electron_1.ipcRenderer.send(name, ...args);
    },
    on(name, listener) {
        electron_1.ipcRenderer.on(name, listener);
    },
    off(name, listener) {
        electron_1.ipcRenderer.off(name, listener);
    },
    invoke(name, ...args) {
        return electron_1.ipcRenderer.invoke(name, ...args);
    }
});
window.document.addEventListener('DOMContentLoaded', () => {
    const theme = (0, getInitialTheme_js_1.getInitialTheme)();
    if (hostnamePatterns_js_1.applicationHostnamePattern.test(window.location.hostname)) {
        window.document.documentElement.style.backgroundColor = theme === theme_js_1.Theme.Light ? '#FFFFFF' : '#000000';
    }
});
