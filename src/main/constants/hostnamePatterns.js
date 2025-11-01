"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssoPassportYaHostnamePattern =
  exports.ssoPassportYandexHostnamePattern =
  exports.passportYandexHostnamePattern =
  exports.oAuthHostnamePattern =
  exports.oldMusicHostnamePattern =
  exports.yandexHostnamePattern =
  exports.applicationHostnamePattern =
    void 0;
const config_js_1 = require("../config.js");
exports.applicationHostnamePattern = new RegExp(`^${config_js_1.config.app.appHostname}$`);
exports.yandexHostnamePattern = new RegExp(`^yandex.(\\w{2,3})$`);
exports.oldMusicHostnamePattern = new RegExp(`^music.(qa.)?yandex.(\\w{2,3})$`);
exports.oAuthHostnamePattern = new RegExp(`^oauth.yandex.(\\w{2,3})$`);
exports.passportYandexHostnamePattern = new RegExp(`^passport.yandex.(\\w{2,3})$`);
exports.ssoPassportYandexHostnamePattern = new RegExp(`^sso.passport.yandex.(\\w{2,3})$`);
exports.ssoPassportYaHostnamePattern = new RegExp(`^sso.ya.(\\w{2,3})$`);
