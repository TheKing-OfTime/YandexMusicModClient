"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNewerReleaseNotes = void 0;
const rcompare_js_1 = __importDefault(require("semver/functions/rcompare.js"));
const getSortedDescReleaseNotesKeys_js_1 = require("./getSortedDescReleaseNotesKeys.js");
const removeNewerReleaseNotes = (data, version) => {
    const currentReleaseNotes = {};
    if (!version) {
        return currentReleaseNotes;
    }
    const keysToAdd = Object.keys(data).filter((key) => {
        const extractedVersion = (0, getSortedDescReleaseNotesKeys_js_1.extractVersion)(key);
        return (0, rcompare_js_1.default)(extractedVersion, version) >= 0;
    });
    keysToAdd.forEach((key) => {
        const value = data[key];
        if (value) {
            currentReleaseNotes[key] = value;
        }
    });
    return currentReleaseNotes;
};
exports.removeNewerReleaseNotes = removeNewerReleaseNotes;
