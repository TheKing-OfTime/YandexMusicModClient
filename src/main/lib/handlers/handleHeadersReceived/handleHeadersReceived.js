"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHeadersReceived = void 0;
const framesHandler_js_1 = require("./framesHandler.js");
const corsHandler_js_1 = require("./corsHandler.js");
const experimentOverridesHandler_js_1 = require("./remoteExperimentsOverride.js");
const filter = { urls: ["*://*/*"] };
const handlers = [
    corsHandler_js_1.corsHandler,
    framesHandler_js_1.framesHandler,
    experimentOverridesHandler_js_1.experimentOverridesHandler,
];
const handleHeadersReceived = (window) => {
    window.webContents.session.webRequest.onHeadersReceived(
        filter,
        (details, callback) => {
            const responseHeaders = handlers.reduce((acc, value) => {
                return value(acc, details);
            }, details.responseHeaders ?? {});
            callback({
                responseHeaders,
            });
        },
    );
};
exports.handleHeadersReceived = handleHeadersReceived;
