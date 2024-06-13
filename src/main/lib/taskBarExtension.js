"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskBarExtension = void 0;
const electron_1 = require("electron");
const Logger_js_1 = require("../packages/logger/Logger.js");
const appSuspensionControllerLogger = new Logger_js_1.Logger(
  "AppSuspensionController",
);
let powerSaveBlockerId;

const taskBarExtension = (window) => {
  window.setThumbarButtons([
    {
      tooltip: "Previous",
      icon: nativeImage.createFromPath(path.join(__dirname, "button1.png")),
      flags: ["disabled", "nobackground"],
      click() {
        console.log("button1 clicked");
      },
    },
    {
      tooltip: "Play",
      icon: nativeImage.createFromPath(path.join(__dirname, "button2.png")),
      flags: ["enabled", "nobackground"],
      click() {
        console.log("button2 clicked.");
      },
    },
    {
      tooltip: "Next",
      icon: nativeImage.createFromPath(path.join(__dirname, "button2.png")),
      flags: ["enabled", "nobackground"],
      click() {
        console.log("button2 clicked.");
      },
    },
  ]);
};

exports.taskBarExtension = taskBarExtension;

const preventAppSuspension = () => {
  if (powerSaveBlockerId) {
    stopPreventing();
  }
  powerSaveBlockerId = electron_1.powerSaveBlocker.start(
    "prevent-app-suspension",
  );
  appSuspensionControllerLogger.info("App suspension is prevented");
};
const stopPreventing = () => {
  if (powerSaveBlockerId) {
    electron_1.powerSaveBlocker.stop(powerSaveBlockerId);
    appSuspensionControllerLogger.info("All blockers are stopped");
  }
};
