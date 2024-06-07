"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialTheme = void 0;
const storage_1 = require("../constants/storage");
const theme_1 = require("../constants/theme");
const getLocalStorageTheme = () => {
    const item = window.localStorage.getItem(storage_1.StorageKeys.Theme);
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
    const media = window.matchMedia(`(prefers-color-scheme: ${theme_1.Theme.Light})`);
    return media.matches ? theme_1.Theme.Light : theme_1.Theme.Dark;
};
const getInitialTheme = () => {
    const theme = getLocalStorageTheme();
    switch (theme) {
        case theme_1.Theme.Dark:
        case theme_1.Theme.Light:
            return theme;
        case 'system':
            return getPreferredColorScheme();
        default:
            return theme_1.Theme.Dark;
    }
};
exports.getInitialTheme = getInitialTheme;
