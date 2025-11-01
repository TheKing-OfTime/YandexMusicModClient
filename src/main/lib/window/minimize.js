"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimize = void 0;
const tray_js_1 = require("../tray.js");
const state_js_1 = require("../state.js");
const minimize = (window) => {
    window.minimize();
    state_js_1.state.isMinimized = true;
    (0, tray_js_1.updateTrayMenu)(window);
};
exports.minimize = minimize;
