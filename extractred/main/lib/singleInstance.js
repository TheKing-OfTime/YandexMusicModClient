"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForSingleInstance = void 0;
const electron_1 = require("electron");
const createWindow_js_1 = require("./createWindow.js");
const handleDeeplink_js_1 = require("./handlers/handleDeeplink.js");
const Logger_js_1 = require("../packages/logger/Logger.js");
const singleInstanceLogger = new Logger_js_1.Logger('SingleInstance');
const isFirstInstance = electron_1.app.requestSingleInstanceLock();
const checkForSingleInstance = () => {
    singleInstanceLogger.info('Single instance');
    if (isFirstInstance) {
        electron_1.app.on('second-instance', (event, commandLine) => {
            const [window] = electron_1.BrowserWindow.getAllWindows();
            if (window) {
                if (window.isMinimized()) {
                    window.restore();
                    singleInstanceLogger.log('Restore window');
                }
                const lastCommandLineArg = commandLine.pop();
                if (lastCommandLineArg && (0, handleDeeplink_js_1.checkIsDeeplink)(lastCommandLineArg)) {
                    (0, handleDeeplink_js_1.navigateToDeeplink)(window, lastCommandLineArg);
                }
                (0, createWindow_js_1.toggleWindowVisibility)(window, true);
                singleInstanceLogger.log('Show window');
            }
        });
    }
    else {
        electron_1.app.quit();
    }
};
exports.checkForSingleInstance = checkForSingleInstance;
