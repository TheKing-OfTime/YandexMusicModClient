"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleExternalLink = void 0;
const electron_1 = require("electron");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const externalLinkLogger = new Logger_js_1.Logger("ExternalLink");
const BLOCKED_URL_PROTOCOLS = [
  "file:",
  "javascript:",
  "vbscript:",
  "data:",
  "about:",
  "chrome:",
  "ms-cxh:",
  "ms-cxh-full:",
  "ms-word:",
];
const shouldOpenExternalUrl = (protocol) => {
  return !BLOCKED_URL_PROTOCOLS.includes(protocol);
};
const handleExternalLink = (window) => {
  window.webContents.setWindowOpenHandler(({ url }) => {
    setImmediate(() => {
      if (shouldOpenExternalUrl(url)) {
        externalLinkLogger.warn("Open external link", url);
        electron_1.shell.openExternal(url);
      }
    });
    return { action: "deny" };
  });
};
exports.handleExternalLink = handleExternalLink;
