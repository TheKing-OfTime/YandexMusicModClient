"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadUnavailableErrorPage = exports.loadURL = void 0;
const loader_js_1 = require("./loader.js");
const config_js_1 = require("../config.js");
const store_js_1 = require("./store.js");

const loadUrlInWindow = (0, loader_js_1.loader)({
  protocol: config_js_1.config.appProtocol,
  hostname: config_js_1.config.appHostname,
  buildPath: config_js_1.config.buildPath,
  bypassCSP: config_js_1.config.bypassCSP,
  isCorsEnabled: config_js_1.config.enableWebSecurity,
});

const loadURL = async (window) => {
  const startupPage = store_js_1.getModFeatures()?.windowBehavior?.startupPage ?? "/";
  await loadUrlInWindow(window, startupPage.startsWith('/') ? startupPage.substring(1) : startupPage);
};
exports.loadURL = loadURL;

const loadUnavailableErrorPage = async (window) => {
  await loadUrlInWindow(window, "unavailable.html");
};
exports.loadUnavailableErrorPage = loadUnavailableErrorPage;