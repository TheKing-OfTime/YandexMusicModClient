"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWindowReady = void 0;
const deviceInfo_js_1 = require("../deviceInfo.js");
function handleWindowReady(window) {
    window.once('ready-to-show', async () => {
        (0, deviceInfo_js_1.logSoftwareInfo)();
        (0, deviceInfo_js_1.logSystemMetrics)();
    });
}
exports.handleWindowReady = handleWindowReady;
