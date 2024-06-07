"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFirstLaunch = exports.needToShowReleaseNotes = void 0;
const semver_1 = require("semver");
const electron_1 = require("electron");
const electron_store_1 = __importDefault(require("electron-store"));
const store_js_1 = require("../constants/store.js");
const config_js_1 = require("../config.js");
const store = new electron_store_1.default();
const needToShowReleaseNotes = () => {
    const currentVersion = electron_1.app.getVersion();
    const storeVersion = String(store.get(store_js_1.StoreKeys.VERSION));
    store.set(store_js_1.StoreKeys.VERSION, currentVersion);
    if (!(0, semver_1.valid)(storeVersion) || (0, semver_1.gt)(currentVersion, storeVersion)) {
        if (config_js_1.config.common.SHOW_RELEASE_NOTES) {
            return true;
        }
    }
    return false;
};
exports.needToShowReleaseNotes = needToShowReleaseNotes;
const isFirstLaunch = () => {
    const storeVersion = store.get(store_js_1.StoreKeys.VERSION);
    const hasRecentlyLaunched = Boolean(store.get(store_js_1.StoreKeys.HAS_RECENLTY_LAUNCHED));
    if (storeVersion) {
        store.set(store_js_1.StoreKeys.HAS_RECENLTY_LAUNCHED, true);
        return false;
    }
    if (!hasRecentlyLaunched) {
        store.set(store_js_1.StoreKeys.HAS_RECENLTY_LAUNCHED, true);
    }
    return !hasRecentlyLaunched;
};
exports.isFirstLaunch = isFirstLaunch;
