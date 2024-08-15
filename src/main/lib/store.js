"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFirstLaunch =
  exports.needToShowReleaseNotes =
  exports.getWindowDimensions =
  exports.setWindowDimensions =
  exports.getDevtoolsEnabled =
  exports.getModFeatures =
  exports.init =
    void 0;
const semver_1 = require("semver");
const electron_1 = require("electron");
const electron_store_1 = __importDefault(require("electron-store"));
const store_js_1 = require("../constants/store.js");
const config_js_1 = require("../config.js");
const store = new electron_store_1.default();

const init = () => {
  initField(store_js_1.StoreKeys.WINDOW_DIMENSIONS, {
    width: 1280,
    height: 800,
  });
  initField(store_js_1.StoreKeys.MOD_FEATURES, {
    discordRPC: {
      enable: true,
      applicationIDForRPC: "1124055337234858005",
      showButtons: true,
      overrideDeepLinksExperiment: false,
      showGitHubButton: true,
    },
    taskBarExtensions: {
        enable: true
    },
    vibeAnimationEnhancement: {
        maxFPS: 25,
        intensityCoefficient: 1,
        linearDeBoost: 2,
        playOnAnyEntity: false,
        disableRendering: false
    }
  });
  initField(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED, false);
};
exports.init = init;

const initField = (fieldKey, defaultValue) => {
  if (typeof defaultValue === "object" && defaultValue !== null) {
    console.log("Object found checking if values inited");
    for (let key in defaultValue) {
      initField(`${fieldKey}.${key}`, defaultValue[key]);
    }
    return;
  }
  if (typeof store.get(fieldKey) === "undefined") {
    store.set(fieldKey, defaultValue);
    console.log("Inited", fieldKey, "to", defaultValue);
    return;
  }
    console.log(fieldKey, "is already inited");
};

const needToShowReleaseNotes = () => {
  const currentVersion = electron_1.app.getVersion();
  const storeVersion = String(store.get(store_js_1.StoreKeys.VERSION));
  store.set(store_js_1.StoreKeys.VERSION, currentVersion);
  if (
    !(0, semver_1.valid)(storeVersion) ||
    (0, semver_1.gt)(currentVersion, storeVersion)
  ) {
    if (config_js_1.config.common.SHOW_RELEASE_NOTES) {
      return true;
    }
  }
  return false;
};
exports.needToShowReleaseNotes = needToShowReleaseNotes;
const isFirstLaunch = () => {
  const storeVersion = store.get(store_js_1.StoreKeys.VERSION);
  const hasRecentlyLaunched = Boolean(
    store.get(store_js_1.StoreKeys.HAS_RECENLTY_LAUNCHED),
  );
  if (storeVersion) {
    store.set(store_js_1.StoreKeys.HAS_RECENLTY_LAUNCHED, true);
    return false;
  }
  if (!hasRecentlyLaunched) {
    store.set(store_js_1.StoreKeys.HAS_RECENLTY_LAUNCHED, true);
  }
  return !hasRecentlyLaunched;
};
exports.isFirstLaunch = isFirstLaunch;

const getWindowDimensions = () => {
  return store.get(store_js_1.StoreKeys.WINDOW_DIMENSIONS);
};
exports.getWindowDimensions = getWindowDimensions;

const setWindowDimensions = (width, height) => {
  return store.set(store_js_1.StoreKeys.WINDOW_DIMENSIONS, {
    width: width,
    height: height,
  });
};
exports.setWindowDimensions = setWindowDimensions;

const getDevtoolsEnabled = () => {
  return Boolean(store.get(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED));
};
exports.getDevtoolsEnabled = getDevtoolsEnabled;

const getModFeatures = () => {
  return store.get(store_js_1.StoreKeys.MOD_FEATURES);
};
exports.getModFeatures = getModFeatures;
