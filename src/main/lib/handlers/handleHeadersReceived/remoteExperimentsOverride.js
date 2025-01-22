"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experimentOverridesHandler = void 0;
const config_1 = require("../../../config");
const EXPERIMENTS_URLS = [
    'https://ymmc-api.artem-matvienko0.workers.dev'
];
function experimentOverridesHandler(responseHeaders, details) {
    const newResponseHeaders = structuredClone(responseHeaders);
    if (!EXPERIMENTS_URLS.some((url) => details.url.startsWith(url))) {
        return newResponseHeaders;
    }
    newResponseHeaders['access-control-allow-origin'] = [`${config_1.config.appProtocol}://${config_1.config.appHostname}`];
    return newResponseHeaders;
}
exports.experimentOverridesHandler = experimentOverridesHandler;
