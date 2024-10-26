"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialTheme = void 0;
const storage_js_1 = require("../types/storage.js");
const theme_js_1 = require("../types/theme.js");
const getLocalStorageTheme = () => {
    const item = window.localStorage.getItem(storage_js_1.StorageKeys.Theme);
    if (!item) {
        return;
    }
    try {
        return JSON.parse(item)?.value;
    }
    catch {
        return;
    }
};
const getPreferredColorScheme = () => {
    const media = window.matchMedia(`(prefers-color-scheme: ${theme_js_1.Theme.Light})`);
    return media.matches ? theme_js_1.Theme.Light : theme_js_1.Theme.Dark;
};
const getInitialTheme = () => {
    const theme = getLocalStorageTheme();
    switch (theme) {
        case theme_js_1.Theme.Dark:
        case theme_js_1.Theme.Light:
            return theme;
        case 'system':
            return getPreferredColorScheme();
        default:
            return theme_js_1.Theme.Dark;
    }
};
exports.getInitialTheme = getInitialTheme;
