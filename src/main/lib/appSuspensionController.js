"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSuspensionController = void 0;
const electron_1 = require("electron");
const Logger_js_1 = require("../packages/logger/Logger.js");
const appSuspensionControllerLogger = new Logger_js_1.Logger('AppSuspensionController');
let powerSaveBlockerId;
const appSuspensionController = (isMusicPlaying) => {
    if (isMusicPlaying) {
        preventAppSuspension();
    }
    else {
        stopPreventing();
    }
};
exports.appSuspensionController = appSuspensionController;
const preventAppSuspension = () => {
    if (powerSaveBlockerId) {
        stopPreventing();
    }
    powerSaveBlockerId = electron_1.powerSaveBlocker.start('prevent-app-suspension');
    appSuspensionControllerLogger.info('App suspension is prevented');
};
const stopPreventing = () => {
    if (powerSaveBlockerId) {
        electron_1.powerSaveBlocker.stop(powerSaveBlockerId);
        appSuspensionControllerLogger.info('All blockers are stopped');
    }
};
