"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = corsHandler;
const config_js_1 = require("../../../config.js");
const cors_js_1 = require("../../../constants/cors.js");
const METRIKA_URLS = cors_js_1.TLDS.map(
    (tld) => cors_js_1.PROTOCOL + cors_js_1.METRIKA_DOMAIN + tld,
);
const DIRECT_URLS = cors_js_1.TLDS.map(
    (tld) => cors_js_1.PROTOCOL + cors_js_1.DIRECT_DOMAIN + tld,
);
const ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = "access-control-allow-origin";
const NEW_HEADER_VALUE = [
    `${config_js_1.config.app.appProtocol}://${config_js_1.config.app.appHostname}`,
];
function corsHandler(responseHeaders, details) {
    const newResponseHeaders = structuredClone(responseHeaders);
    if (METRIKA_URLS.some((url) => details.url.startsWith(url))) {
        const allowOrigin = (newResponseHeaders[
            ACCESS_CONTROL_ALLOW_ORIGIN_HEADER
        ] ?? [])[0];
        if (allowOrigin && cors_js_1.ALLOWED_HOSTS.includes(allowOrigin)) {
            newResponseHeaders[ACCESS_CONTROL_ALLOW_ORIGIN_HEADER] =
                NEW_HEADER_VALUE;
        }
    } else if (DIRECT_URLS.some((url) => details.url.startsWith(url))) {
        newResponseHeaders[ACCESS_CONTROL_ALLOW_ORIGIN_HEADER] =
            NEW_HEADER_VALUE;
    }
    return newResponseHeaders;
}
