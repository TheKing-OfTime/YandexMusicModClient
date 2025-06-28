"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const electron_log_1 = __importDefault(require("electron-log"));
const formatLog_js_1 = require("./utils/formatLog.js");
const getErrorBoosterTransport_js_1 = require("./utils/getErrorBoosterTransport.js");
class Logger {
  scope;
  logger;
  constructor(scope) {
    this.scope = scope;
    this.logger = electron_log_1.default.scope(scope);
  }
  log(...data) {
    this.logger.log(...data);
  }
  info(...data) {
    this.logger.info(...data);
  }
  error(...data) {
    this.logger.error(...data);
  }
  warn(...data) {
    this.logger.warn(...data);
  }
  debug(...data) {
    this.logger.debug(...data);
  }
  verbose(...data) {
    this.logger.verbose(...data);
  }
  silly(...data) {
    this.logger.silly(...data);
  }
  withPrefix(...prefix) {
    const methods = [
      "log",
      "info",
      "error",
      "warn",
      "debug",
      "verbose",
      "silly",
    ];
    return methods.reduce((logger, method) => {
      logger[method] = (...data) => this.logger[method](...prefix, ...data);
      return logger;
    }, {});
  }
  static startCatching(options) {
    electron_log_1.default.errorHandler.startCatching(options);
  }
  static setupLogger() {
    electron_log_1.default.transports.errorBooster = (0,
    getErrorBoosterTransport_js_1.getErrorBoosterTransport)();
    electron_log_1.default.transports.console.format = formatLog_js_1.formatLog;
    electron_log_1.default.transports.file.format = formatLog_js_1.formatLog;
  }
}
exports.Logger = Logger;
