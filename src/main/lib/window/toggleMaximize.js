"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleMaximize = void 0;
const tray_js_1 = require("../tray.js");
const state_js_1 = require("../state.js");
const toggleMaximize = (window) => {
    if (window.isMaximized()) {
        window.unmaximize();
    }
    else {
        window.maximize();
    }
    state_js_1.state.isMinimized = false;
    (0, tray_js_1.updateTrayMenu)(window);
};
exports.toggleMaximize = toggleMaximize;
