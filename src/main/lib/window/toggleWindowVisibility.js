"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleWindowVisibility = void 0;
const state_js_1 = require("../state.js");
const tray_js_1 = require("../tray.js");
const toggleWindowVisibility_js_1 = require("../taskBarExtension/taskBarExtension.js");
const toggleWindowVisibility = (window, isVisible) => {
    if (isVisible) {
        window.show();
        window.setSkipTaskbar(false);
        taskBarExtension_js_1.onPlayerStateChange(window, undefined);
        state_js_1.state.isWindowHidden = false;
        state_js_1.state.isMinimized = false;
    }
    else {
        window.hide();
        window.setSkipTaskbar(true);
        state_js_1.state.isWindowHidden = true;
        state_js_1.state.isMinimized = true;
    }
    (0, tray_js_1.updateTrayMenu)(window);
};
exports.toggleWindowVisibility = toggleWindowVisibility;
