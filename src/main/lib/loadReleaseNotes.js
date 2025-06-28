"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadReleaseNotes = void 0;
const electron_1 = require("electron");
const config_1 = require("../config");
const Logger_1 = require("../packages/logger/Logger");
const commonLogger = new Logger_1.Logger("Common");
const loadReleaseNotes = async (language) => {
  const url = `${config_1.config.common.UPDATE_URL}release-notes/${language}.json`;
  try {
    const response = await electron_1.net.fetch(url, {
      cache: "no-store",
    });
    commonLogger.info(
      `Request to ${url} completed with status: `,
      response.status,
    );
    return response.json();
  } catch (error) {
    commonLogger.error(`Release-notes loading failed with error: `, error);
    return;
  }
};
exports.loadReleaseNotes = loadReleaseNotes;
