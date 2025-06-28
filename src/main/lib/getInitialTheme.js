"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialTheme = void 0;
const storage_js_1 = require("../types/storage.js");
const theme_js_1 = require("../types/theme.js");
const getLocalStorageTheme = () => {
  const item = window.localStorage.getItem(storage_js_1.StorageKeys.Theme);
  if (!item) {
    return null;
  }
  try {
    const value = JSON.parse(item)?.value;
    if (
      value &&
      typeof value === "string" &&
      Object.values(theme_js_1.Theme).includes(value)
    ) {
      return value;
    }
  } catch {}
  return null;
};
const getSystemTheme = () => {
  const media = window.matchMedia(`(prefers-color-scheme: light)`);
  return media.matches ? theme_js_1.Theme.Light : theme_js_1.Theme.Dark;
};
const getInitialTheme = () => {
  const theme = getLocalStorageTheme();
  switch (theme) {
    case theme_js_1.Theme.Dark:
    case theme_js_1.Theme.Light:
      return theme;
    default:
      return getSystemTheme();
  }
};
exports.getInitialTheme = getInitialTheme;
