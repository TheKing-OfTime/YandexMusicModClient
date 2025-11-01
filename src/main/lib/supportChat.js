"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupportChatUrl = void 0;
const config_js_1 = require("../config.js");
const createSupportChatUrl = () => {
    const context = JSON.stringify({ entrypoint: 'web_desktop' });
    return `https://yandex.ru/chat?context=${encodeURIComponent(context)}#${config_js_1.config.common.SUPPORT_URL}`;
};
exports.createSupportChatUrl = createSupportChatUrl;
