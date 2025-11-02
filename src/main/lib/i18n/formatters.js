"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.formatMessage = void 0;
const electron_1 = require("electron");
const intl_messageformat_1 = __importDefault(require("intl-messageformat"));
const config_js_1 = require("../../config.js");
const ru_json_1 = __importDefault(require("../../translations/compiled/ru.json"));
const en_json_1 = __importDefault(require("../../translations/compiled/en.json"));
const uz_json_1 = __importDefault(require("../../translations/compiled/uz.json"));
const kk_json_1 = __importDefault(require("../../translations/compiled/kk.json"));
const TRANSLATIONS = {
    en: en_json_1.default,
    ru: ru_json_1.default,
    uz: uz_json_1.default,
    kk: kk_json_1.default
};
const isSupportedLanguage = (language) => {
    return config_js_1.config.app.systemLanguages.includes(language);
};
const getLocaleLanguage = (locale) => {
    let language;
    try {
        language = new Intl.Locale(locale).language;
    }
    catch {
        language = '';
    }
    return language;
};
const getSystemLanguage = () => {
    const supportedLanguage = electron_1.app.getPreferredSystemLanguages().map(getLocaleLanguage).find(isSupportedLanguage);
    return supportedLanguage || config_js_1.config.app.systemDefaultLanguage;
};
let systemLanguage;
const formatMessage = (params, values) => {
    if (!systemLanguage) {
        systemLanguage = getSystemLanguage();
    }
    const translations = TRANSLATIONS[systemLanguage];
    const value = translations?.[params.id];
    let message = '';
    if (Array.isArray(value) || typeof value === 'string') {
        message = new intl_messageformat_1.default(value, systemLanguage).format(values);
    }
    return Array.isArray(message) ? message.join('') : message;
};
exports.formatMessage = formatMessage;
const formatDate = (params) => {
    const { date, options, language } = params;
    if (!systemLanguage) {
        systemLanguage = getSystemLanguage();
    }
    const currentLanguage = language && isSupportedLanguage(language) ? language : systemLanguage;
    try {
        let dateObj;
        dateObj = new Date(date);
        const formatter = new Intl.DateTimeFormat(currentLanguage, options);
        return formatter.format(dateObj);
    }
    catch {
        return date.toString();
    }
};
exports.formatDate = formatDate;
