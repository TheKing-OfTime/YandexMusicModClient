"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyCommonConfig = exports.config = void 0;
const package_json_1 = __importDefault(require("../package.json"));
exports.config = {
  enableDevTools: false,
  enableWebSecurity: true,
  enableAutoUpdate: true,
  bypassCSP: false,
  buildPath: "build/next-desktop",
  appProtocol: "music-application",
  appHostname: "desktop",
  metrikaCounters: [95673848, 95673843],
  deeplinkProtocol: package_json_1.default.meta.DEEPLINK_PROTOCOL,
  buildInfo: package_json_1.default.buildInfo,
  meta: package_json_1.default.meta,
  common: package_json_1.default.common,
  errorBooster: {
    project: "'music.frontend.desktop'",
    clickUrl: "https://yandex.ru/clck/click",
    clickErrorCounter: "690.2354",
  },
};
const applyCommonConfig = (commonConfig) => {
  Object.assign(exports.config.common, commonConfig ?? {});
};
exports.applyCommonConfig = applyCommonConfig;
