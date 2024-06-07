"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMetrikaRequests = void 0;
const config_js_1 = require("../../config.js");
const filters = {
    urls: config_js_1.config.metrikaCounters.map((counterId) => `https://mc.yandex.ru/*/${counterId}*`)
};
const ALLOWED_HOSTS = ['music-application:'];
const handleMetrikaRequests = (window) => {
    window.webContents.session.webRequest.onHeadersReceived(filters, (details, callback) => {
        const responseHeaders = details.responseHeaders ?? {};
        const allowOrigin = (responseHeaders['access-control-allow-origin'] ?? [])[0];
        if (allowOrigin && ALLOWED_HOSTS.includes(allowOrigin)) {
            responseHeaders['access-control-allow-origin'] = [`${config_js_1.config.appProtocol}://${config_js_1.config.appHostname}`];
        }
        callback({
            responseHeaders
        });
    });
};
exports.handleMetrikaRequests = handleMetrikaRequests;
