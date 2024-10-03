"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const events_js_1 = require("../../events");
const config_js_1 = require("../../config");
const store_js_1 = require("../store.js");
const playerActions_js_1 = require("../../constants/playerActions.js");
const path = require("node:path");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const taskBarExtensionLogger = new Logger_js_1.Logger("TaskBarExtension");
const settings = store_js_1.getModFeatures()?.taskBarExtensions;
let playerState;
let assets = {dark:{},light:{}};
let systemTheme = electron_1.nativeTheme.shouldUseDarkColors ? "dark" : "light";

electron_1.nativeTheme.on('updated', ()=>{
  systemTheme = electron_1.nativeTheme.shouldUseDarkColors ? "dark" : "light";
})

const taskBarExtension = (window) => {
  loadAssets('dark');
  loadAssets('light');
  //updateTaskbarExtension(window);
};
exports.taskBarExtension = taskBarExtension;

const onPlayerStateChange = (window, newPlayerState) => {
  if (!(settings?.enable ?? true)) return;
  if (typeof newPlayerState !== "undefined") {
    playerState = structuredClone(newPlayerState);
  }
  updateTaskbarExtension(window);
};

exports.onPlayerStateChange = onPlayerStateChange;

const loadAssets = (variant) => {
  taskBarExtensionLogger.log(`Loading ${variant} assets...`);
  loadAsset("previous", variant, "Previous");
  loadAsset("next", variant, "Next");
  loadAsset("play", variant, "Playing");
  loadAsset("pause", variant, "Paused");
  loadAsset("like", variant, "Like");
  loadAsset("liked", variant, "Liked");
  loadAsset("dislike", variant, "Dislike");
  loadAsset("disliked", variant, "Disliked");
  loadAsset("shuffle", variant, "Shuffle");
  loadAsset("shuffled", variant, "Shuffled");
  loadAsset("repeat", variant, "Repeat");
  loadAsset("repeated", variant, "Repeated");
  loadAsset("one_repeated", variant, "One repeated");
  taskBarExtensionLogger.log("Assets loaded: " + variant);
};

const loadAsset = (name, variant, fileName) => {
  assets[variant][name] = electron_1.nativeImage.createFromPath(
    path.join(__dirname, `assets/${variant}/${fileName}.png`),
  );
};

const getActionsAvailabilityObject = (availableActions) => {
  return {
    previousUnavailable: !availableActions?.moveBackward,
    nextUnavailable: !availableActions?.moveForward,
    repeatUnavailable: !availableActions?.repeat,
    shuffleUnavailable: !availableActions?.shuffle,
  };
};

const getActionsStoreObject = (actionsStore) => {
  return {
    repeat: actionsStore?.repeat,
    shuffle: actionsStore?.shuffle,
    liked: actionsStore?.isLiked,
    disliked: actionsStore?.isDisliked,
  };
};

const clearTaskbarExtension = (window) => {
  taskBarExtensionLogger.log(window.setThumbarButtons([]));
};

const getTooltipString = () => {
  let title = playerState.track?.title;
  if (playerState?.track?.version) {
    title = playerState.track.title + ` (${playerState.track.version})`;
  }

  return (
    title +
    " | " +
    getArtist() +
    " ― " +
    config_js_1.config.meta.PRODUCT_NAME_LOCALIZED
  );
};

const getArtist = () => {
  let artistsArray = playerState.track?.artists;
  if (!artistsArray?.[0]) return "loading";
  let artistsLabel = artistsArray[0].name;
  artistsArray.shift();
  artistsArray.forEach((artist) => {
    artistsLabel += ", " + artist.name;
  });
  return artistsLabel;
};

const updateTaskbarExtension = (window) => {
  const availability = getActionsAvailabilityObject(
    playerState.availableActions,
  );
  const store = getActionsStoreObject(playerState.actionsStore);

  let repeatAsset = assets[systemTheme].repeat;
  let nextRepeatAction = playerActions_js_1.PlayerActions.REPEAT_NONE;
  switch (store.repeat) {
    case "none":
      repeatAsset = assets[systemTheme].repeat;
      nextRepeatAction = playerActions_js_1.PlayerActions.REPEAT_CONTEXT;
      break;
    case "context":
      repeatAsset = assets[systemTheme].repeated;
      nextRepeatAction = playerActions_js_1.PlayerActions.REPEAT_ONE;
      break;
    case "one":
      repeatAsset = assets[systemTheme].one_repeated;
      nextRepeatAction = playerActions_js_1.PlayerActions.REPEAT_NONE;
      break;
  }

  let buttons = [
    {
      tooltip: "Shuffle",
      icon: store.shuffle ? assets[systemTheme].shuffled : assets[systemTheme].shuffle,
      //flags: availability.nextUnavailable ? ["disabled"] : undefined,
      click() {
        taskBarExtensionLogger.log("Shuffle toggled");
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.TOGGLE_SHUFFLE,
        );
      },
    },
    {
      tooltip: "Dislike",
      icon: store.disliked ? assets[systemTheme].disliked : assets[systemTheme].dislike,
      //flags: availability.nextUnavailable ? ["disabled"] : undefined,
      click() {
        taskBarExtensionLogger.log("Dislike toggled");
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.TOGGLE_DISLIKE,
        );
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.MOVE_FORWARD,
        );
      },
    },
    {
      tooltip: "Previous",
      icon: assets[systemTheme].previous,
      flags: availability.previousUnavailable ? ["disabled"] : undefined,
      click() {
        taskBarExtensionLogger.log("Previous");
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.MOVE_BACKWARD,
        );
      },
    },
    {
      tooltip: playerState?.isPlaying ? "Pause" : "Play",
      icon: playerState?.isPlaying ? assets[systemTheme].pause : assets[systemTheme].play,
      click() {
        taskBarExtensionLogger.log("Play Toggled");
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.TOGGLE_PLAY,
        );
      },
    },
    {
      tooltip: "Next",
      icon: assets[systemTheme].next,
      flags: availability.nextUnavailable ? ["disabled"] : undefined,
      click() {
        taskBarExtensionLogger.log("Next");
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.MOVE_FORWARD,
        );
      },
    },
    {
      tooltip: "Like",
      icon: store.liked ? assets[systemTheme].liked : assets[systemTheme].like,
      //flags: availability.nextUnavailable ? ["disabled"] : undefined,
      click() {
        taskBarExtensionLogger.log("Like toggled");
        events_js_1.sendPlayerAction(
          window,
          playerActions_js_1.PlayerActions.TOGGLE_LIKE,
        );
      },
    },
    {
      tooltip: "Repeat",
      icon: repeatAsset,
      //flags: availability.nextUnavailable ? ["disabled"] : undefined,
      click() {
        taskBarExtensionLogger.log("Like toggled");
        events_js_1.sendPlayerAction(window, nextRepeatAction);
      },
    },
  ];

  if (availability.shuffleUnavailable) {
    buttons.shift();
  }
  if (availability.repeatUnavailable) {
    buttons.pop();
  }

  const taskButtonStatus = window.setThumbarButtons(buttons);
  window.setThumbnailToolTip(getTooltipString());

  taskBarExtensionLogger.log(
    "ThumbarButtons set:",
    taskButtonStatus ? "success" : "failed",
  );
};
