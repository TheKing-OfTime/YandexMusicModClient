"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleWindowState = void 0;
const state_js_1 = require("../state.js");
const tray_js_1 = require("../tray.js");
const toggleWindowVisibility_js_1 = require("../taskBarExtension/taskBarExtension.js");
const toggleWindowState = (window) => {
    if (state_js_1.state.isWindowHidden) {
        (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(window, true);
    }
    else if (window.isMinimized()) {
        window.restore();
        taskBarExtension_js_1.onPlayerStateChange(window, undefined);
        state_js_1.state.isMinimized = false;
    }
    else {
        window.minimize();
        state_js_1.state.isMinimized = true;
    }
    (0, tray_js_1.updateTrayMenu)(window);
};
exports.toggleWindowState = toggleWindowState;
