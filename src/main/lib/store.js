"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeviceId =
  exports.getUuid =
  exports.isRevisionChanged =
  exports.isFirstLaunch =
  exports.needToShowReleaseNotes =
  exports.getWindowDimensions =
  exports.setWindowDimensions =
  exports.getDevtoolsEnabled =
  exports.getModFeatures =
  exports.init =
    void 0;
const uuid_1 = require("uuid");
const semver_1 = require("semver");
const electron_1 = require("electron");
const electron_store_1 = __importDefault(require("electron-store"));
const generateDeviceId_js_1 = require("./generateDeviceId.js");
const store_js_1 = require("../types/store.js");
const config_js_1 = require("../config.js");
const store = new electron_store_1.default();

const ignoreValuesIn = [`${store_js_1.StoreKeys.MOD_FEATURES}.globalShortcuts`];

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
      afkTimeout: 15,
    },
    taskBarExtensions: {
      enable: true,
    },
    vibeAnimationEnhancement: {
      maxFPS: 25,
      intensityCoefficient: 1,
      linearDeBoost: 2,
      playOnAnyEntity: false,
      disableRendering: false,
    },
    playerBarEnhancement: {
      showDislikeButton: true,
      showCodecInsteadOfQualityMark: false,
    },
    globalShortcuts: {
      TOGGLE_PLAY: "Ctrl+K",
      MOVE_FORWARD: "Ctrl+L",
      MOVE_BACKWARD: "Ctrl+J",
      //TOGGLE_REPEAT: 'Ctrl+R',
      TOGGLE_SHUFFLE: 'Ctrl+S',
    },
  });
  initField(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED, false);
  // initField(store_js_1.StoreKeys.EXPERIMENT_OVERRIDES, {
  //   WebNextEqualizer: "on",
  //   WebNextTrackAboutModal: "on",
  //   WebNextLanguageSwitcher: "on",
  //   WebNextUGC: "on",
  // });
};
exports.init = init;

const initField = (fieldKey, defaultValue) => {
  if (
    typeof defaultValue === "object" &&
    defaultValue !== null &&
    !ignoreValuesIn.includes(fieldKey)
  ) {
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
    store.get(store_js_1.StoreKeys.HAS_RECENTLY_LAUNCHED),
  );
  if (storeVersion) {
    store.set(store_js_1.StoreKeys.HAS_RECENTLY_LAUNCHED, true);
    return false;
  }
  if (!hasRecentlyLaunched) {
    store.set(store_js_1.StoreKeys.HAS_RECENTLY_LAUNCHED, true);
  }
  return !hasRecentlyLaunched;
};
exports.isFirstLaunch = isFirstLaunch;
const isRevisionChanged = (type, revision) => {
    const storeRevision = store.get(type);
    store.set(type, revision);
    return storeRevision !== revision;
};
exports.isRevisionChanged = isRevisionChanged;
exports.getDeviceId = (() => {
  let cachedDeviceId;
  return () => {
    let deviceId;
    if (cachedDeviceId) {
      deviceId = cachedDeviceId;
    } else {
      deviceId = store.get(store_js_1.StoreKeys.DEVICE_ID);
      cachedDeviceId = deviceId;
    }
    if (!deviceId) {
      deviceId = (0, generateDeviceId_js_1.generateDeviceId)();
      cachedDeviceId = deviceId;
      store.set(store_js_1.StoreKeys.DEVICE_ID, deviceId);
    }
    return String(deviceId);
  };
})();

const getUuid = () => {
    let uuid = store.get(store_js_1.StoreKeys.UUID);
    if (!uuid) {
        uuid = (0, uuid_1.v4)();
        store.set(store_js_1.StoreKeys.UUID, uuid);
    }
    return uuid;
};
exports.getUuid = getUuid;

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
const getExperimentOverrides = () => {
  return store.get(store_js_1.StoreKeys.EXPERIMENT_OVERRIDES);
};
exports.getExperimentOverrides = getExperimentOverrides;
