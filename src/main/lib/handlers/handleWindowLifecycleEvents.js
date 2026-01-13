"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWindowLifecycleEvents = void 0;
const electron_1 = require("electron");
const state_js_1 = require("../state.js");
const toggleWindowVisibility_js_1 = require("../window/toggleWindowVisibility.js");
const loadURL_js_1 = require("../loadURL.js");
const deviceInfo_js_1 = require("../deviceInfo.js");
const platform_js_1 = require("../../types/platform.js");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const events_js_1 = require("../../events.js");
const config_js_1 = require("../../config.js");
const store_js_1 = require("../store.js");
const tray_js_1 = require("../tray.js");
const lifecycleLogger = new Logger_js_1.Logger("WindowLifecycle");
const USER_ID_IFRAME_URL_REGEXP = /^https:\/\/yandex.\w{2,3}\/user-id/;
const CONNECTION_ERROR_CODES = [-15, -21];
const checkAndUpdateApplicationData = (window) => {
    const diff = Date.now() - state_js_1.state.lastWindowBlurredOrHiddenTime;
    if (diff >= config_js_1.config.common.REFRESH_EVENT_TRIGGER_TIME_MS) {
        (0, events_js_1.sendRefreshApplicationData)(window);
    }
};
const setBlurredTime = () => {
    state_js_1.state.lastWindowBlurredOrHiddenTime = Date.now();
};

let resizeCorrectionTimer = null;
let isApplyingEvenCorrection = false;

const updateWindowDimensions = (window) => {
    const applyCorrection = () => {
        const [w, h] = window.getSize();
        const evenW = w & ~1;
        const evenH = h & ~1;

        if (w !== evenW || h !== evenH) {
            isApplyingEvenCorrection = true;
            window.setSize(evenW, evenH);
            isApplyingEvenCorrection = false;
        }

        store_js_1.setWindowDimensions(
            evenW,
            evenH,
            window.isMaximized(),
        );
    };


    if (deviceInfo_js_1.devicePlatform === platform_js_1.Platform.LINUX) {
        if (resizeCorrectionTimer) {
            clearTimeout(resizeCorrectionTimer);
        }

        resizeCorrectionTimer = setTimeout(() => {
            applyCorrection();
            resizeCorrectionTimer = null;
        }, 50);

        return;
    }

    applyCorrection();
};

const handleWindowLifecycleEvents = (window) => {
    electron_1.app.on("activate", () => {
        (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(window, true);
    });
    electron_1.app.on("before-quit", () => {
        state_js_1.state.willQuit = true;
    });
    electron_1.app.on("window-all-closed", () => {
        if (
            [
                platform_js_1.Platform.WINDOWS,
                platform_js_1.Platform.LINUX,
            ].includes(deviceInfo_js_1.devicePlatform)
        ) {
            electron_1.app.quit();
        }
    });
    electron_1.app.on("browser-window-blur", () => {
        setBlurredTime();
    });
    electron_1.app.on("browser-window-focus", () => {
        checkAndUpdateApplicationData(window);
    });
    window.on("show", () => {
        state_js_1.state.isMinimized = false;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on("hide", () => {
        setBlurredTime();
        state_js_1.state.isMinimized = true;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on("minimize", () => {
        setBlurredTime();
        state_js_1.state.isMinimized = true;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on("maximize", () => {
        checkAndUpdateApplicationData(window);
        updateWindowDimensions(window);
        state_js_1.state.isMinimized = false;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on("unmaximize", () => {
        updateWindowDimensions(window);
        state_js_1.state.isMinimized = false;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on("restore", () => {
        checkAndUpdateApplicationData(window);
        state_js_1.state.isMinimized = false;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on("resized", () => {
        if (isApplyingEvenCorrection) {
            return;
        }
        updateWindowDimensions(window);
    });
    window.on("moved", () => {
        const position = window.getPosition();
        store_js_1.setWindowPosition(position[0], position[1]);
    });
    window.on("close", (event) => {
        if (deviceInfo_js_1.devicePlatform !== platform_js_1.Platform.MACOS) {
            return;
        }
        if (state_js_1.state.willQuit) {
            return;
        }
        event.preventDefault();
        if (window.isFullScreen()) {
            window.once("leave-full-screen", () => {
                (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(
                    window,
                    false,
                );
            });
            window.setFullScreen(false);
        } else {
            (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(
                window,
                false,
            );
        }
    });
    const webContents = window.webContents;
    webContents.on(
        "did-fail-load",
        (event, errorCode, errorDescription, validatedUrl) => {
            const message = `Failed to load ${validatedUrl}: ${errorDescription} (${errorCode})`;
            lifecycleLogger.error(message);
            if (
                (errorCode <= -100 ||
                    CONNECTION_ERROR_CODES.includes(errorCode)) &&
                !USER_ID_IFRAME_URL_REGEXP.test(validatedUrl)
            ) {
                (0, loadURL_js_1.loadUnavailableErrorPage)(window);
            }
        },
    );
    webContents.on("did-finish-load", () => {
        webContents.insertCSS(`
                body {
                    .passp-page {
                        -webkit-app-region: drag;
                    }
                }
            `);
    });
};
exports.handleWindowLifecycleEvents = handleWindowLifecycleEvents;
