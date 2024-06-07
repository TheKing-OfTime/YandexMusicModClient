"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeRedirects = void 0;
const node_url_1 = __importDefault(require("node:url"));
const hostnamePatterns_js_1 = require("../constants/hostnamePatterns.js");
const Logger_js_1 = require("../packages/logger/Logger.js");
const ALLOWED_HOSTNAME_PATTERNS = [
    hostnamePatterns_js_1.yandexHostnamePattern,
    hostnamePatterns_js_1.applicationHostnamePattern,
    hostnamePatterns_js_1.oAuthHostnamePattern,
    hostnamePatterns_js_1.passportYandexHostnamePattern,
    hostnamePatterns_js_1.ssoPassportYandexHostnamePattern,
    hostnamePatterns_js_1.ssoPassportYaHostnamePattern,
    hostnamePatterns_js_1.oldMusicHostnamePattern
];
const safeRedirectsLogger = new Logger_js_1.Logger('SafeRedirects');
const isSafeHostname = (hostname) => {
    return ALLOWED_HOSTNAME_PATTERNS.some((pattern) => pattern.test(hostname));
};
const safeRedirects = (window) => {
    window.webContents.on('will-navigate', (event, targetUrl) => {
        const { hostname } = node_url_1.default.parse(targetUrl);
        if (hostname && !isSafeHostname(hostname)) {
            safeRedirectsLogger.warn('Redirect prevented', window.webContents.getURL(), hostname);
            event.preventDefault();
        }
    });
};
exports.safeRedirects = safeRedirects;
