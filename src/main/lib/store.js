"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCachedValue =
  exports.deviceId =
  exports.repositoryMetaUpdatedAt =
  exports.tracksAvailabilityUpdatedAt =
  exports.getDeviceId =
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
  exports.set =
  exports.get =
    void 0;
const uuid_1 = require("uuid");
const semver_1 = require("semver");
const electron_1 = require("electron");
const electron_store_1 = __importDefault(require("electron-store"));
const Logger_js_1 = require("../packages/logger/Logger.js");
const generateDeviceId_js_1 = require("./generateDeviceId.js");
const store_js_1 = require("../types/store.js");
const config_js_1 = require("../config.js");

const store = new electron_store_1.default();
const logger = new Logger_js_1.Logger("Store");

class CachedStore {
  constructor(data = {}) {
    this._data = structuredClone(data);
  }

  get(path, defaultValue) {
    return structuredClone(
      path.split(".").reduce((acc, key) => {
        return acc && acc[key] !== undefined ? acc[key] : undefined;
      }, this._data) ?? defaultValue
    );
  }

  set(path, value) {
    const keys = path.split(".");
    const lastKey = keys.pop();

    let current = this._data;
    for (const key of keys) {
      if (current[key] === undefined || typeof current[key] !== "object") {
        current[key] = {};
      }
      current = current[key];
    }
    current[lastKey] = structuredClone(value);
    return this;
  }

  setData(data) {
    this._data = structuredClone(data);
    return this;
  }

  all() {
    return structuredClone(this._data);
  }

  clear() {
    this._data = {};
  }
}

const cachedStore = new CachedStore();

let defaultExperimentOverrides = {
  WebNextPromoVeryBestRecommendations: 'off',
  WebNextYnisonActivityInterception: 'on',
  WebNextCrossMediaPlayer: 'on',
  WebNextTracksPreload: 'on',
  WebNextGetFileInfoPreload: 'on',
};

const useCachedValue = (key) => {
  let cachedValue = null;
  const get = () => {
    if (cachedValue) {
      return cachedValue;
    }
    cachedValue = getStore(key);
    return cachedValue;
  };
  const set = (value) => {
    cachedValue = value;
    setStore(key, value);
  };
  return [get, set];
};
exports.useCachedValue = useCachedValue;

const ignoreList = [
    {
        path:`${store_js_1.StoreKeys.MOD_FEATURES}.globalShortcuts`,
        keyList:['enable'],
        keyListMode: 'whitelist', // 'whitelist' | 'blacklist' Режим работы keyList. Whitelist - только ключи из keyList будут инициализированы. Blacklist - все ключи кроме указанных в keyList будут инициализированы.
    }
];

const init = () => {
  initField(store_js_1.StoreKeys.WINDOW_DIMENSIONS, {
    width: 1280,
    height: 800,
    maximized: false,
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
      statusDisplayType: 0,
      showButtons: true,
      showSmallIcon: false,
      showAlbum: true,
      showVersion: true,
      overrideDeepLinksExperiment: false,
      showGitHubButton: true,
      afkTimeout: 15,
      reconnectInterval: 30,
    },
    taskBarExtensions: {
      enable: true,
      coverAsThumbnail: true,
    },
    vibeAnimationEnhancement: {
      maxFPS: 25,
      intensityCoefficient: 1.5,
      useDynamicEnergy: true,
      smoothDynamicEnergy: false,
      smoothDynamicEnergyCoefficient: 0.2,
      playOnAnyEntity: false,
      disableRendering: false,
      autoLaunchOnAppStartup: false,
      enableEndlessMusic: true,
    },
    playerBarEnhancement: {
      showDislikeButton: true,
      showRepeatButtonOnVibe: true,
      showCodecInsteadOfQualityMark: false,
      alwaysShowPlayerTimestamps: false,
      invertSliderOnScrollDelta: true,
      disablePerTrackColors: false,
      alwaysWideBar: false,
    },
    windowBehavior: {
      saveWindowDimensionsOnRestart: true,
      saveWindowPositionOnRestart: false,
      autoLaunchOnSystemStartup: false,
      minimizeToTrayOnWindowClose: true,
      startMinimized: false,
      preventDisplaySleep: false,
	  startupPage: "/",
    },
    globalShortcuts: {
      enable: true,
      TOGGLE_PLAY: "Ctrl+/",
      MOVE_FORWARD: "Ctrl+,",
      MOVE_BACKWARD: "Ctrl+.",
      //TOGGLE_REPEAT: 'Ctrl+R',
      TOGGLE_SHUFFLE: "Ctrl+'",
    },
    appAutoUpdates: {
      enableAppAutoUpdate: store.get(store_js_1.StoreKeys.ENABLE_AUTO_UPDATES) ?? true,
      enableAppAutoUpdateByProbability: false,
      enableModAutoUpdate: true,
    },
    scrobblers: {
      lastfm: {
        enable: true,
        fromYnison: false,
        autoLike: false,
      },
    },
    downloader: {
      useDefaultPath: false,
      defaultPath: "",
      useMP3: false,
      useSyncLyrics: true,
      useCustomPathForSessionStorage: false,
      customPathForSessionStorage: "",
    },
    tryEnableSurroundAudio: false,
    showNonMusicPage: true,
    enableHardwareAcceleration: true,
  });
  initField(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED, false);
  initField(store_js_1.StoreKeys.ENABLE_YNISON_REMOTE_CONTROL, true);
  initField(store_js_1.StoreKeys.DISPLAY_MAX_FPS, 60);
  initField(
    store_js_1.StoreKeys.DEFAULT_EXPERIMENT_OVERRIDES,
    defaultExperimentOverrides,
    true,
  );

  if (getModFeatures()?.scrobblers?.lastfm?.enable === undefined)
    initField(
      `${store_js_1.StoreKeys.MOD_FEATURES}.scrobblers`,
      {
        lastfm: {
          enable: true,
          fromYnison: false,
          autoLike: false,
        },
      },
      true,
    );

  cachedStore.setData(store.store);

  fetchDefaultExperimentOverrides().then((data) => {
    if (data)
      initField(store_js_1.StoreKeys.DEFAULT_EXPERIMENT_OVERRIDES, data, true);
  });



};
exports.init = init;

const initField = (fieldKey, defaultValue, force = false) => {
  if (
    typeof defaultValue === "object" &&
    defaultValue !== null
  ) {
    logger.log("Object found checking if values inited");
    const ignoreRule = ignoreList.find((item) => item.path === fieldKey);
    for (let key in defaultValue) {
      if (ignoreRule) {
        if (ignoreRule.keyList && ignoreRule.keyList.length === 0) {
            logger.log(`Ignoring all keys in ${fieldKey} due to empty keyList rule`);
            continue;
        }
        if (ignoreRule.keyListMode === 'blacklist' && ignoreRule.keyList.includes(key)) {
            logger.log(`Ignoring key ${fieldKey}.${key} due to blacklist rule`);
            continue;
        }
        if (ignoreRule.keyListMode === 'whitelist' && !ignoreRule.keyList.includes(key)) {
            logger.log(`Ignoring key ${fieldKey}.${key} due to whitelist rule`);
            continue;
        }
      }
      initField(`${fieldKey}.${key}`, defaultValue[key], force);
    }
    return;
  }
  if (force || typeof store.get(fieldKey) === "undefined") {
    store.set(fieldKey, defaultValue);
    logger.log("Inited", fieldKey, "to", defaultValue);
    return;
  }
  logger.log(fieldKey, "is already inited");
};

const needToShowReleaseNotes = () => {
  const currentVersion = electron_1.app.getVersion();
  const storeVersion = String(getStore(store_js_1.StoreKeys.VERSION));
  setStore(store_js_1.StoreKeys.VERSION, currentVersion);
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
  const storeVersion = getStore(store_js_1.StoreKeys.VERSION);
  const hasRecentlyLaunched = Boolean(
    getStore(store_js_1.StoreKeys.HAS_RECENTLY_LAUNCHED),
  );
  if (storeVersion) {
    setStore(store_js_1.StoreKeys.HAS_RECENTLY_LAUNCHED, true);
    return false;
  }
  if (!hasRecentlyLaunched) {
    setStore(store_js_1.StoreKeys.HAS_RECENTLY_LAUNCHED, true);
  }
  return !hasRecentlyLaunched;
};
exports.isFirstLaunch = isFirstLaunch;
const isRevisionChanged = (type, revision) => {
  const storeRevision = getStore(type);
  setStore(type, revision);
  return storeRevision !== revision;
};
exports.isRevisionChanged = isRevisionChanged;
const getUuid = () => {
  let uuid = getStore(store_js_1.StoreKeys.UUID);
  if (!uuid) {
    uuid = (0, uuid_1.v4)();
    setStore(store_js_1.StoreKeys.UUID, uuid);
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
exports.tracksAvailabilityUpdatedAt = (0, exports.useCachedValue)(
  store_js_1.StoreKeys.TRACKS_AVAILABILITY_UPDATED_AT,
);
exports.repositoryMetaUpdatedAt = (0, exports.useCachedValue)(
  store_js_1.StoreKeys.REPOSITORY_META_UPDATED_AT,
);

const getWindowDimensions = () => {
  return getStore(store_js_1.StoreKeys.WINDOW_DIMENSIONS);
};
exports.getWindowDimensions = getWindowDimensions;

const setWindowDimensions = (width, height, maximized = false) => {
  return setStore(store_js_1.StoreKeys.WINDOW_DIMENSIONS, {
    width: width,
    height: height,
    maximized: maximized,
  });
};
exports.setWindowDimensions = setWindowDimensions;

const getWindowPosition = () => {
  return getStore(store_js_1.StoreKeys.WINDOW_POSITION);
};
exports.getWindowPosition = getWindowPosition;

const setWindowPosition = (x, y) => {
  return setStore(store_js_1.StoreKeys.WINDOW_POSITION, {
    x: x,
    y: y,
  });
};
exports.setWindowPosition = setWindowPosition;

const getDevtoolsEnabled = () => {
  return Boolean(getStore(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED));
};
exports.getDevtoolsEnabled = getDevtoolsEnabled;

const getEnableYnisonRemoteControl = () => {
  return Boolean(getStore(store_js_1.StoreKeys.ENABLE_YNISON_REMOTE_CONTROL));
};
exports.getEnableYnisonRemoteControl = getEnableYnisonRemoteControl;

const getAutoUpdatesEnabled = () => {
  return Boolean(getStore(store_js_1.StoreKeys.ENABLE_AUTO_UPDATES));
};
exports.getAutoUpdatesEnabled = getAutoUpdatesEnabled;

const getModFeatures = () => {
  return getStore(store_js_1.StoreKeys.MOD_FEATURES);
};
exports.getModFeatures = getModFeatures;
const fetchDefaultExperimentOverrides = async () => {
  try {
    const remoteDefaultExperimentOverrides = await fetch(
      "https://ymmc-api.artem-matvienko0.workers.dev/experiments/overrides/default",
    );
    if (remoteDefaultExperimentOverrides.status === 200)
      return await remoteDefaultExperimentOverrides.json();
    return undefined;
  } catch (e) {
    logger.log(
      "Failed to fetch remote default experiment overrides. Using local one",
      e,
    );
    return undefined;
  }
};
exports.fetchDefaultExperimentOverrides = fetchDefaultExperimentOverrides;

const getDefaultExperimentOverrides = () => {
  return (
    getStore(store_js_1.StoreKeys.DEFAULT_EXPERIMENT_OVERRIDES) ??
    defaultExperimentOverrides
  ).WebNextYnisonActivityInterception = (getStore(store_js_1.StoreKeys.ENABLE_YNISON_REMOTE_CONTROL) ? 'on' : 'off');
};
exports.getDefaultExperimentOverrides = getDefaultExperimentOverrides;

const getDisplayMaxFps = () => {
  return getStore(store_js_1.StoreKeys.DISPLAY_MAX_FPS) ?? 60;
};
exports.getDisplayMaxFps = getDisplayMaxFps;

const setDisplayMaxFps = (value) => {
  return setStore(
    store_js_1.StoreKeys.DISPLAY_MAX_FPS,
    Math.min(Math.max(value ?? 60, 30), 1024),
  );
};
exports.setDisplayMaxFps = setDisplayMaxFps;

const getStore = (key) => {
  return cachedStore.get(key, undefined) ?? store.get(key);
};
exports.get = getStore;

const setStore = (key, value) => {
  const result = store.set(key, value);
  cachedStore.set(key, value);
  const { sendNativeStoreUpdate } = require('../events.js');               // Import here to avoid circular dependency. Cons of using CommonJS.
  sendNativeStoreUpdate(key, value);
  return result;
};
exports.set = setStore;
