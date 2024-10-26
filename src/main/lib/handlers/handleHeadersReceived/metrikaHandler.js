"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metrikaHandler = void 0;
const config_1 = require("../../../config");
const ALLOWED_HOSTS = ['music-application:'];
const METRIKA_URLS = [
    'https://mc.yandex.ru',
    'https://mc.yandex.com',
    'https://mc.yandex.kz',
    'https://mc.yandex.by',
    'https://mc.yandex.uz'
];
function metrikaHandler(responseHeaders, details) {
    const newResponseHeaders = structuredClone(responseHeaders);
    if (!METRIKA_URLS.some((metrikaUrl) => details.url.startsWith(metrikaUrl))) {
        return newResponseHeaders;
    }
    const allowOrigin = (newResponseHeaders['access-control-allow-origin'] ?? [])[0];
    if (allowOrigin && ALLOWED_HOSTS.includes(allowOrigin)) {
        newResponseHeaders['access-control-allow-origin'] = [`${config_1.config.appProtocol}://${config_1.config.appHostname}`];
    }
    return newResponseHeaders;
}
exports.metrikaHandler = metrikaHandler;
