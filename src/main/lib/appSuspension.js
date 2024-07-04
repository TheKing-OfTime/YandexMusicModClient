"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleAppSuspension = void 0;
const electron_1 = require("electron");
const Logger_js_1 = require("../packages/logger/Logger.js");
const appSuspensionLogger = new Logger_js_1.Logger('AppSuspension');
let powerSaveBlockerId = null;
const enableSuspensionBlocker = () => {
    disableSuspensionBlocker();
    powerSaveBlockerId = electron_1.powerSaveBlocker.start('prevent-app-suspension');
    appSuspensionLogger.info('App suspension blocker is enabled');
};
const disableSuspensionBlocker = () => {
    if (typeof powerSaveBlockerId !== 'number') {
        return;
    }
    electron_1.powerSaveBlocker.stop(powerSaveBlockerId);
    appSuspensionLogger.info('App suspension blocker is disabled');
};
const toggleAppSuspension = (enable) => {
    if (enable) {
        enableSuspensionBlocker();
    }
    else {
        disableSuspensionBlocker();
    }
};
exports.toggleAppSuspension = toggleAppSuspension;
