"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCachedValue = exports.deviceId = exports.repositoryMetaUpdatedAt = exports.tracksAvailabilityUpdatedAt = exports.getDeviceId =
  exports.getUuid =
  exports.isRevisionChanged =
  exports.isFirstLaunch =
  exports.needToShowReleaseNotes =
  exports.getWindowDimensions =
  exports.setWindowDimensions =
  exports.getWindowPosition =
  exports.setWindowPosition =
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

const useCachedValue = (key) => {
    let cachedValue = null;
    const get = () => {
        if (cachedValue) {
            return cachedValue;
        }
        cachedValue = store.get(key);
        return cachedValue;
    };
    const set = (value) => {
        cachedValue = value;
        store.set(key, value);
    };
    return [get, set];
};
exports.useCachedValue = useCachedValue;

const ignoreValuesIn = [`${store_js_1.StoreKeys.MOD_FEATURES}.globalShortcuts`];

const init = () => {
  initField(store_js_1.StoreKeys.WINDOW_DIMENSIONS, {
    width: 1280,
    height: 800,
  });
  initField(store_js_1.StoreKeys.WINDOW_POSITION, {
    x: 0,
    y: 0,
  });
  initField(store_js_1.StoreKeys.MOD_FEATURES, {
    discordRPC: {
      enable: true,
      fromYnison: false,
      applicationIDForRPC: "1124055337234858005",
      showButtons: true,
      showSmallIcon: false,
      showAlbum: true,
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
      alwaysShowPlayerTimestamps: false,
    },
    windowBehavior: {
      saveWindowDimensionsOnRestart: true,
      saveWindowPositionOnRestart: false,
      autoLaunchOnSystemStartup: false,
      minimizeToTrayOnWindowClose: true,
      startMinimized: false,
    },
    globalShortcuts: {
      TOGGLE_PLAY: "Ctrl+/",
      MOVE_FORWARD: "Ctrl+,",
      MOVE_BACKWARD: "Ctrl+.",
      //TOGGLE_REPEAT: 'Ctrl+R',
      TOGGLE_SHUFFLE: "Ctrl+'",
    },
  });
  initField(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED, false);
  initField(store_js_1.StoreKeys.ENABLE_AUTO_UPDATES, true);
  initField(store_js_1.StoreKeys.DEFAULT_EXPERIMENT_OVERRIDES, {
      WebNextTrackLyrics: 'on',
      WebNextEnableNewQuality: 'prod',
      WebNextEntityTrailer: 'on',
      WebNextWizard: 'on',
      WebNextTrailerAlbumFullQueueStart: 'on',
      WebNextEnableYnison: 'default',
  });
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
    const hasRecentlyLaunched = Boolean(store.get(store_js_1.StoreKeys.HAS_RECENTLY_LAUNCHED));
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
const getUuid = () => {
    let uuid = store.get(store_js_1.StoreKeys.UUID);
    if (!uuid) {
        uuid = (0, uuid_1.v4)();
        store.set(store_js_1.StoreKeys.UUID, uuid);
    }
    return uuid;
};
exports.getUuid = getUuid;

exports.deviceId = (0, exports.useCachedValue)(store_js_1.StoreKeys.DEVICE_ID);
const getDeviceId = () => {
    const [get, set] = exports.deviceId;
    let deviceIdValue = get();
    if (deviceIdValue) {
        return String(deviceIdValue);
    }
    deviceIdValue = (0, generateDeviceId_js_1.generateDeviceId)();
    set(deviceIdValue);
    return String(deviceIdValue);
};
exports.getDeviceId = getDeviceId;
exports.tracksAvailabilityUpdatedAt = (0, exports.useCachedValue)(store_js_1.StoreKeys.TRACKS_AVAILABILITY_UPDATED_AT);
exports.repositoryMetaUpdatedAt = (0, exports.useCachedValue)(store_js_1.StoreKeys.REPOSITORY_META_UPDATED_AT);

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

const getWindowPosition = () => {
    return store.get(store_js_1.StoreKeys.WINDOW_POSITION);
};
exports.getWindowPosition = getWindowPosition;

const setWindowPosition = (x, y) => {
    return store.set(store_js_1.StoreKeys.WINDOW_POSITION, {
        x: x,
        y: y,
    });
};
exports.setWindowPosition = setWindowPosition;

const getDevtoolsEnabled = () => {
  return Boolean(store.get(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED));
};
exports.getDevtoolsEnabled = getDevtoolsEnabled;

const getAutoUpdatesEnabled = () => {
  return Boolean(store.get(store_js_1.StoreKeys.ENABLE_AUTO_UPDATES));
};
exports.getAutoUpdatesEnabled = getAutoUpdatesEnabled;

const getModFeatures = () => {
  const [get] = exports.useCachedValue(store_js_1.StoreKeys.MOD_FEATURES);
    return get();
};
exports.getModFeatures = getModFeatures;
const getDefaultExperimentOverrides = async () => {
  try {
      const remoteDefaultExperimentOverrides = await fetch('https://ymmc-api.artem-matvienko0.workers.dev/experiments/overrides/default');
      if(remoteDefaultExperimentOverrides.status === 200) return await remoteDefaultExperimentOverrides.json();
      return store.get(store_js_1.StoreKeys.DEFAULT_EXPERIMENT_OVERRIDES);
  } catch (e) {
      console.log('Failed to fetch remote default experiment overrides. Using local one', e);
      return store.get(store_js_1.StoreKeys.DEFAULT_EXPERIMENT_OVERRIDES);
  }
};
exports.getDefaultExperimentOverrides = getDefaultExperimentOverrides;

const get = (key) => {
    return store.get(key);
}
exports.get = get;

const set = (key, value) => {
    return store.set(key, value);
}
exports.set = set;
