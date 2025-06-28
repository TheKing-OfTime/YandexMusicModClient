"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorBoosterTransport = void 0;
const node_os_1 = __importDefault(require("node:os"));
const ErrorBooster_js_1 = require("../../error-booster/ErrorBooster.js");
const getErrorBoosterTransport = () => {
  const errorBooster = new ErrorBooster_js_1.ErrorBooster();
  const transport = function (logMessage) {
    if (logMessage.level !== "error") {
      return;
    }
    const logChunks = logMessage.data || [];
    const error = logChunks.find((data) => data instanceof Error);
    const message = logChunks.find((data) => typeof data === "string");
    const info = logChunks
      .map((data) => {
        let result;
        if (typeof data === "string") {
          result = data;
        } else if (data instanceof Error) {
          result = data.toString();
        } else {
          try {
            result = JSON.stringify(data);
          } catch {
            result = "[Value can not be stringified]";
          }
        }
        return result;
      })
      .join(", ");
    errorBooster.sendData({
      message: message || error?.message || "UnknownError",
      stack: error?.stack,
      level: logMessage.level,
      source: logMessage.scope,
      additional: {
        os: node_os_1.default.version(),
        info,
      },
      dateTime: Number(logMessage.date?.getTime()),
    });
  };
  transport.level = "error";
  transport.transforms = [];
  return transport;
};
exports.getErrorBoosterTransport = getErrorBoosterTransport;
