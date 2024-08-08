"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWindowLifecycleEvents = void 0;
const electron_1 = require("electron");
const node_os_1 = __importDefault(require("node:os"));
const state_js_1 = require("../state.js");
const createWindow_js_1 = require("../createWindow.js");
const loadURL_js_1 = require("../loadURL.js");
const platform_js_1 = require("../../constants/platform.js");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const events_js_1 = require("../../events.js");
const config_js_1 = require("../../config.js");
const store_js_1 = require("../store.js");
const lifecycleLogger = new Logger_js_1.Logger('WindowLifecycle');
const checkAndUpdateApplicationData = (window) => {
    const diff = Date.now() - state_js_1.state.lastWindowBlurredOrHiddenTime;
    if (diff >= config_js_1.config.common.REFRESH_EVENT_TRIGGER_TIME_MS) {
        (0, events_js_1.sendRefreshApplicationData)(window);
    }
};
const setBlurredTime = () => {
    state_js_1.state.lastWindowBlurredOrHiddenTime = Date.now();
};
const handleWindowLifecycleEvents = (window) => {
    electron_1.app.on('activate', () => {
        (0, createWindow_js_1.toggleWindowVisibility)(window, true);
    });
    electron_1.app.on('before-quit', () => {
        state_js_1.state.willQuit = true;
    });
    electron_1.app.on('window-all-closed', () => {
        if (node_os_1.default.platform() === platform_js_1.Platform.WINDOWS) {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('browser-window-blur', () => {
        setBlurredTime();
    });
    electron_1.app.on('browser-window-focus', () => {
        checkAndUpdateApplicationData(window);
    });
    window.on('hide', () => {
        setBlurredTime();
    });
    window.on('minimize', () => {
        setBlurredTime();
    });
    window.on('maximize', () => {
        checkAndUpdateApplicationData(window);
    });
    window.on('restore', () => {
        checkAndUpdateApplicationData(window);
    });
    window.on('resized', () => {
        const sizes = window.getSize();
        store_js_1.setWindowDimensions(sizes[0], sizes[1]);
    })
    window.on('close', (event) => {
        if (node_os_1.default.platform() !== platform_js_1.Platform.MACOS) {
            return;
        }
        if (state_js_1.state.willQuit) {
            return;
        }
        event.preventDefault();
        if (window.isFullScreen()) {
            window.once('leave-full-screen', () => {
                (0, createWindow_js_1.toggleWindowVisibility)(window, false);
            });
            window.setFullScreen(false);
        }
        else {
            (0, createWindow_js_1.toggleWindowVisibility)(window, false);
        }
    });
    const webContents = window.webContents;
    webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedUrl) => {
        const message = `Failed to load ${validatedUrl}: ${errorDescription} (${errorCode})`;
        lifecycleLogger.error(message);
        if (errorCode <= -100) {
            (0, loadURL_js_1.loadUnavailableErrorPage)(window);
        }
    });
};
exports.handleWindowLifecycleEvents = handleWindowLifecycleEvents;
