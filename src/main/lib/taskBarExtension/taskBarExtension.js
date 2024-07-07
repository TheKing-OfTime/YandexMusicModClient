"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const events_js_1 = require("../../events");
const config_js_1 = require("../../config");
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
  if (typeof newPlayerState !== "undefined") {
    playerState = newPlayerState;
  }
  updateTaskbarExtension(window);
};

exports.onPlayerStateChange = onPlayerStateChange;

const loadAssets = () => {
  taskBarExtensionLogger.log("Loading assets...");
  loadAsset("previous", "Previous");
  loadAsset("next", "Next");
  loadAsset("play", "Playing");
  loadAsset("pause", "Paused");
  loadAsset("like", "Like");
  loadAsset("liked", "Liked");
  loadAsset("dislike", "Dislike");
  loadAsset("disliked", "Disliked");
  loadAsset("shuffle", "Shuffle");
  loadAsset("shuffled", "Shuffled");
  loadAsset("repeat", "Repeat");
  loadAsset("repeated", "Repeated");
  loadAsset("one_repeated", "One repeated");
  taskBarExtensionLogger.log("Assets loaded");
};

const loadAsset = (name, fileName) => {
  assets[name] = electron_1.nativeImage.createFromPath(
    path.join(__dirname, `assets/${fileName}.png`),
  );
};

const getActionsAvailabilityObject = (availableActions) => {
  return {
    previousUnavailable: !availableActions.moveBackward,
    nextUnavailable: !availableActions.moveForward,
    repeatUnavailable: !availableActions.repeat,
    shuffleUnavailable: !availableActions.shuffle,
  };
};

const getActionsStoreObject = (actionsStore) => {
  return {
    repeat: actionsStore.repeat,
    shuffle: actionsStore.shuffle,
    liked: actionsStore.isLiked,
    disliked: actionsStore.isDisliked,
  };
};

const clearTaskbarExtension = (window) => {
  taskBarExtensionLogger.log(window.setThumbarButtons([]));
};

const getTooltipString = () => {
  let title = playerState.track?.title;
  if (playerState.track.version) {
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
  let artistsArray = playerState.track.artists;
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

  let repeatAsset = assets.repeat;
  let nextRepeatAction = playerActions_js_1.PlayerActions.REPEAT_NONE;
  switch (store.repeat) {
    case "none":
      repeatAsset = assets.repeat;
      nextRepeatAction = playerActions_js_1.PlayerActions.REPEAT_CONTEXT;
      break;
    case "context":
      repeatAsset = assets.repeated;
      nextRepeatAction = playerActions_js_1.PlayerActions.REPEAT_ONE;
      break;
    case "one":
      repeatAsset = assets.one_repeated;
      nextRepeatAction = playerActions_js_1.PlayerActions.REPEAT_NONE;
      break;
  }

  let buttons = [
    {
      tooltip: "Shuffle",
      icon: store.shuffle ? assets.shuffled : assets.shuffle,
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
      icon: store.disliked ? assets.disliked : assets.dislike,
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
      icon: assets.previous,
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
      icon: playerState?.isPlaying ? assets.pause : assets.play,
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
      icon: assets.next,
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
      icon: store.liked ? assets.liked : assets.like,
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
