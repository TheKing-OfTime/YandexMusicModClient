"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCrash = void 0;
const electron_1 = require("electron");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const applicationCrashLogger = new Logger_js_1.Logger("ApplicationCrash");
const REASON_CRASHED = "crashed";
const REASON_OOM = "oom";
const handleCrash = () => {
  electron_1.app.on("render-process-gone", (event, webContents, detailed) => {
    applicationCrashLogger.error(
      "Application crashed",
      detailed.reason,
      detailed.exitCode,
    );
    if ([REASON_CRASHED, REASON_OOM].includes(detailed.reason)) {
      if (detailed.reason === REASON_CRASHED) {
        applicationCrashLogger.info("Relaunching");
        electron_1.app.relaunch({
          args: process.argv.slice(1),
        });
      }
      electron_1.app.exit(0);
    }
  });
};
exports.handleCrash = handleCrash;
