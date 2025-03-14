"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHeadersReceived = void 0;
const framesHandler_js_1 = require("./framesHandler.js");
const corsHandler_js_1 = require("./corsHandler.js");
const deviceInfo_js_1 = require("../../deviceInfo.js");
const platform_js_1 = require("../../../types/platform.js");
const experimentOverridesHandler_js_1 = require("./remoteExperimentsOverride.js");
const filter = { urls: ['*://*/*'] };
const apiFilter = { urls: ['https://api.music.yandex.net/*'] };
const handlers = [corsHandler_js_1.corsHandler, framesHandler_js_1.framesHandler, experimentOverridesHandler_js_1.experimentOverridesHandler];
const handleHeadersReceived = (window) => {
    window.webContents.session.webRequest.onHeadersReceived(filter, (details, callback) => {
        const responseHeaders = handlers.reduce((acc, value) => {
            return value(acc, details);
        }, details.responseHeaders ?? {});
        callback({
            responseHeaders
        });
    });
    if (![platform_js_1.Platform.MACOS, platform_js_1.Platform.WINDOWS].includes(deviceInfo_js_1.devicePlatform))
    window.webContents.session.webRequest.onBeforeSendHeaders(apiFilter, (details, callback) => {
        const headers = details.requestHeaders;
        let newHeaders = structuredClone(headers);
        if (headers) {
          if (headers['x-yandex-music-client']) {
              newHeaders['x-yandex-music-client'] = 'YandexMusicDesktopAppWindows/' + headers['x-yandex-music-client'].split('/')[1];
          }
        }
        callback({ requestHeaders: newHeaders });
    })
};
exports.handleHeadersReceived = handleHeadersReceived;
