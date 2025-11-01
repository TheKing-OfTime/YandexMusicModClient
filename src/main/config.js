"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyCommonConfig = exports.config = void 0;
const package_json_1 = __importDefault(require("../package.json"));
exports.config = {
  app: package_json_1.default.appConfig,
  modification: package_json_1.default.modification,
  buildInfo: package_json_1.default.buildInfo,
  meta: package_json_1.default.meta,
  common: package_json_1.default.common,
};
const applyCommonConfig = (commonConfig) => {
  Object.assign(exports.config.common, commonConfig ?? {});
};
exports.applyCommonConfig = applyCommonConfig;
