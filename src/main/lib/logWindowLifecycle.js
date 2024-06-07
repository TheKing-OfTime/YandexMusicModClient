"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWindowLifecycle = void 0;
const electron_1 = require("electron");
const config_js_1 = require("../config.js");
const Logger_js_1 = require("../packages/logger/Logger.js");
const applicationLogger = new Logger_js_1.Logger('Application');
const lifecycleLogger = new Logger_js_1.Logger('WindowLifecycle');
function logWindowLifecycle(window) {
    applicationLogger.info(`Version: ${electron_1.app.getVersion()}`);
    applicationLogger.info(`Build: ${config_js_1.config.buildInfo.VERSION} (${config_js_1.config.buildInfo.BRANCH})`);
    window.on('ready-to-show', () => {
        lifecycleLogger.log('Ready to show');
    });
    window.on('closed', () => {
        lifecycleLogger.log('Closed');
    });
}
exports.logWindowLifecycle = logWindowLifecycle;
