"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const events_js_1 = require("../../events");
const playerActions_js_1 = require("../../constants/playerActions.js");
const path = require("node:path");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const taskBarExtensionLogger = new Logger_js_1.Logger("TaskBarExtension");
let playerState;
let assets = {};

const taskBarExtension = (window) => {
  loadAssets();
  //updateTaskbarExtension(window);
};
exports.taskBarExtension = taskBarExtension;

const onPlayerStateChange = (window, newPlayerState) => {
  playerState = newPlayerState;
  updateTaskbarExtension(window);
};

exports.onPlayerStateChange = onPlayerStateChange;

const loadAssets = () => {
  taskBarExtensionLogger.log("Loading assets...");
  loadAsset("previous", "Previous");
  loadAsset("next", "Next");
  loadAsset("play", "Playing");
  loadAsset("pause", "Paused");
  taskBarExtensionLogger.log("Assets loaded");
};

const loadAsset = (name, fileName) => {
  assets[name] = electron_1.nativeImage.createFromPath(
    path.join(__dirname, `assets/${fileName}.png`),
  );
};

const clearTaskbarExtension = (window) => {
  taskBarExtensionLogger.log(window.setThumbarButtons([]));
};

const updateTaskbarExtension = (window) => {
  let status = window.setThumbarButtons([
    {
      tooltip: "Previous",
      icon: assets.previous,
      flags: playerState?.previousUnavailable ? ["disabled"] : undefined,
      click() {
        taskBarExtensionLogger.log("Previous");
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.PREVIOUS,
        );
      },
    },
    {
      tooltip: playerState?.isPlaying ? "Pause" : "Play",
      icon: playerState?.isPlaying ? assets.pause : assets.play,
      click() {
        taskBarExtensionLogger.log("Play/Pause");
        events_js_1.sendPlayerAction(
          window,
          playerState?.isPlaying
            ? playerActions_js_1.PlayerActions.PAUSE
            : playerActions_js_1.PlayerActions.PLAY,
        );
      },
    },
    {
      tooltip: "Next",
      icon: assets.next,
      flags: playerState?.nextUnavailable ? ["disabled"] : undefined,
      click() {
        taskBarExtensionLogger.log("Next");
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.NEXT,
        );
      },
    },
  ]);

  taskBarExtensionLogger.log(
    "ThumbarButtons set:",
    status ? "success" : "failed",
  );
};
