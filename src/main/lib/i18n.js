"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
const electron_1 = require("electron");
const intl_messageformat_1 = __importDefault(require("intl-messageformat"));
const ru_json_1 = __importDefault(require("../translations/compiled/ru.json"));
var LANGUAGES;
(function (LANGUAGES) {
    LANGUAGES["RU"] = "ru";
})(LANGUAGES || (LANGUAGES = {}));
let translations = {
    ru: ru_json_1.default
};
let lang = null;
const getLanguage = () => {
    const locale = electron_1.app.getLocale();
    return [LANGUAGES.RU].includes(locale) ? locale : LANGUAGES.RU;
};
const formatMessage = (params, values) => {
    if (!lang) {
        lang = getLanguage();
    }
    const value = translations[lang]?.[params.id];
    let message = '';
    if (Array.isArray(value) || typeof value === 'string') {
        message = new intl_messageformat_1.default(value, lang).format(values);
    }
    return Array.isArray(message) ? message.join('') : message;
};
exports.formatMessage = formatMessage;
