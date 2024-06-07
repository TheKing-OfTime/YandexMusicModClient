"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserYandexId = void 0;
const electron_1 = require("electron");
const cookies_js_1 = require("../../../constants/cookies.js");
const getUserYandexId = async () => {
    try {
        const cookie = await electron_1.session.defaultSession.cookies.get({
            name: cookies_js_1.YANDEX_ID,
            domain: cookies_js_1.PASSPORT_LOGIN_DOMAIN
        });
        return cookie?.[0]?.value;
    }
    catch {
        return undefined;
    }
};
exports.getUserYandexId = getUserYandexId;
