"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeeplink =
  exports.handleDeeplinkOnApplicationStartup =
  exports.navigateToDeeplink =
  exports.checkIsDeeplink =
    void 0;
const electron_1 = require("electron");
const state_js_1 = require("../state.js");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const config_js_1 = require("../../config.js");
const events_js_1 = require("../../events.js");
let deeplinkUrl = null;
const deeplinkLogger = new Logger_js_1.Logger("Deeplink");
const transformUrlToInternal = (url) => {
  return url.replace(`${config_js_1.config.deeplinkProtocol}://`, "/");
};
const checkIsDeeplink = (value) => {
  const deeplinkRegexp = /yandexmusic:\/\/.*/;
  return deeplinkRegexp.test(value);
};
exports.checkIsDeeplink = checkIsDeeplink;
const navigateToDeeplink = (window, url) => {
  if (!url) {
    return;
  }
  const pathname = transformUrlToInternal(url);
  deeplinkLogger.info("Navigate to", url, pathname);
  (0, events_js_1.sendOpenDeeplink)(window, pathname);
  window.focus();
  state_js_1.state.deeplink = null;
};
exports.navigateToDeeplink = navigateToDeeplink;
const handleDeeplinkOnApplicationStartup = () => {
  const lastArgFromProccessArgs = process.argv.pop();
  if (
    lastArgFromProccessArgs &&
    (0, exports.checkIsDeeplink)(lastArgFromProccessArgs)
  ) {
    state_js_1.state.deeplink = lastArgFromProccessArgs;
  }
  if (
    !electron_1.app.isDefaultProtocolClient(config_js_1.config.deeplinkProtocol)
  ) {
    electron_1.app.setAsDefaultProtocolClient(
      config_js_1.config.deeplinkProtocol,
    );
  }
  electron_1.app.on("open-url", (event, url) => {
    event.preventDefault();
    state_js_1.state.deeplink = url;
    deeplinkLogger.info("Open on startup", deeplinkUrl);
  });
};
exports.handleDeeplinkOnApplicationStartup = handleDeeplinkOnApplicationStartup;
const handleDeeplink = (window) => {
  electron_1.app.on("open-url", (event, url) => {
    event.preventDefault();
    (0, exports.navigateToDeeplink)(window, url);
  });
  (0, exports.navigateToDeeplink)(window, deeplinkUrl);
};
exports.handleDeeplink = handleDeeplink;
