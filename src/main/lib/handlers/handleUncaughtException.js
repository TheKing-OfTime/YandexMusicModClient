"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUncaughtException = void 0;
const Logger_js_1 = require("../../packages/logger/Logger.js");
const uncaughtExceptionLogger = new Logger_js_1.Logger("UncaughtException");
const handleUncaughtException = () => {
  process.on("uncaughtException", (error) => {
    uncaughtExceptionLogger.error(error, error.stack);
  });
  Logger_js_1.Logger.startCatching({
    showDialog: false,
    onError({ error }) {
      uncaughtExceptionLogger.error(
        "UncaughtException log from handleUncaughtException",
        error,
        error.stack,
      );
    },
  });
};
exports.handleUncaughtException = handleUncaughtException;
