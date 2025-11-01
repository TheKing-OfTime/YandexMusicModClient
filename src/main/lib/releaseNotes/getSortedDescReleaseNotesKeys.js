"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortedDescReleaseNotesKeys = exports.extractVersion = void 0;
const rcompare_js_1 = __importDefault(require("semver/functions/rcompare.js"));
const i18nKeys_js_1 = require("../../constants/i18nKeys.js");
const extractVersion = (key) => {
    return key.split(i18nKeys_js_1.RELEASE_NOTES_KEY_PREFIX)[1] ?? '';
};
exports.extractVersion = extractVersion;
const getSortedDescReleaseNotesKeys = (dictionary) => {
    return Object.keys(dictionary)
        .filter((key) => key.startsWith(i18nKeys_js_1.RELEASE_NOTES_KEY_PREFIX))
        .sort((key1, key2) => {
        const version1 = (0, exports.extractVersion)(key1) ?? '';
        const version2 = (0, exports.extractVersion)(key2) ?? '';
        return (0, rcompare_js_1.default)(version1, version2);
    });
};
exports.getSortedDescReleaseNotesKeys = getSortedDescReleaseNotesKeys;
