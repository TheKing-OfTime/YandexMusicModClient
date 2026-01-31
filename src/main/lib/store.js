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
  exports.getModSettings =
  exports.init =
  exports.initNew =
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
  WebNextPlayerBarYellowButton: 'off',
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

/**
 * Миграция данных из старого формата (MOD_FEATURES) в новый (MOD_SETTINGS)
 * Обеспечивает обратную совместимость при обновлении приложения
 */
const migrateStoreFormat = () => {
  const oldModFeatures = store.get(store_js_1.StoreKeys.MOD_FEATURES);

  if (!oldModFeatures) {
    logger.log("No old MOD_FEATURES found, migration not needed");
    return {};
  }

  const newModSettings = {};

  // Миграция taskBarExtensions
  if (oldModFeatures.taskBarExtensions) {
    newModSettings.taskBarExtensions = {
      enable: oldModFeatures.taskBarExtensions.enable ?? true,
      coverAsThumbnail: oldModFeatures.taskBarExtensions.coverAsThumbnail ?? false,
    };
  }

  // Миграция windowBehavior → window
  if (oldModFeatures.windowBehavior) {
    newModSettings.window = {
      toTray: oldModFeatures.windowBehavior.minimizeToTrayOnWindowClose ?? false,
      autoStartup: oldModFeatures.windowBehavior.autoLaunchOnSystemStartup ?? false,
      minimizedStart: oldModFeatures.windowBehavior.startMinimized ?? false,
      preventDisplaySleep: oldModFeatures.windowBehavior.preventDisplaySleep ?? false,
      startupPage: oldModFeatures.windowBehavior.startupPage ?? '/',
      saveWindowDimensionsOnRestart: oldModFeatures.windowBehavior.saveWindowDimensionsOnRestart ?? true,
      saveWindowPositionOnRestart: oldModFeatures.windowBehavior.saveWindowPositionOnRestart ?? false,
    };
  }

  // Миграция globalShortcuts
  if (oldModFeatures.globalShortcuts) {
    newModSettings.globalShortcuts = {
      enable: oldModFeatures.globalShortcuts.enable ?? true,
      TOGGLE_PLAY: oldModFeatures.globalShortcuts.TOGGLE_PLAY ?? 'Ctrl+/',
      MOVE_FORWARD: oldModFeatures.globalShortcuts.MOVE_FORWARD ?? 'Ctrl+,',
      MOVE_BACKWARD: oldModFeatures.globalShortcuts.MOVE_BACKWARD ?? 'Ctrl+.',
      TOGGLE_REPEAT: oldModFeatures.globalShortcuts.TOGGLE_REPEAT ?? 'Ctrl+?',
      TOGGLE_SHUFFLE: oldModFeatures.globalShortcuts.TOGGLE_SHUFFLE ?? "Ctrl+'",
    };
  }

  // Миграция playerBarEnhancement
  if (oldModFeatures.playerBarEnhancement) {
    const playButtonType = oldModFeatures.playerBarEnhancement.whitePlayButton ? 'white' : 'yellow';
    newModSettings.playerBarEnhancement = {
      showCodecInsteadOfQualityMark: oldModFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark ?? false,
      alwaysShowTimestamps: oldModFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps ?? false,
      showRepeatButtonOnVibe: oldModFeatures.playerBarEnhancement.showRepeatButtonOnVibe ?? true,
      changeDislikeButtonPos: oldModFeatures.playerBarEnhancement.showDislikeButton ?? true,
      disablePerTrackColors: oldModFeatures.playerBarEnhancement.disablePerTrackColors ?? false,
      alwaysWideBar: oldModFeatures.playerBarEnhancement.alwaysWideBar ?? false,
      playButtonType: playButtonType,
    };
  }

  // Миграция vibeAnimationEnhancement
  if (oldModFeatures.vibeAnimationEnhancement) {
    newModSettings.vibeAnimationEnhancement = {
      maxFPS: oldModFeatures.vibeAnimationEnhancement.maxFPS ?? 25,
      vibeIntensityCoefficient: oldModFeatures.vibeAnimationEnhancement.intensityCoefficient ?? 1.3,
      useDynamicEnergy: oldModFeatures.vibeAnimationEnhancement.useDynamicEnergy ?? true,
      smoothDynamicEnergy: oldModFeatures.vibeAnimationEnhancement.smoothDynamicEnergy ?? false,
      smoothDynamicEnergyCoefficient: oldModFeatures.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient ?? 0.2,
      playVibeOnAnyEntity: oldModFeatures.vibeAnimationEnhancement.playOnAnyEntity ?? true,
      disableRendering: oldModFeatures.vibeAnimationEnhancement.disableRendering ?? false,
      autoLaunchOnAppStartup: oldModFeatures.vibeAnimationEnhancement.autoLaunchOnAppStartup ?? false,
      enableEndlessMusic: oldModFeatures.vibeAnimationEnhancement.enableEndlessMusic ?? true,
    };
  }

  // Миграция appAutoUpdates
  if (oldModFeatures.appAutoUpdates) {
    newModSettings.appAutoUpdates = {
      enableAppAutoUpdate: oldModFeatures.appAutoUpdates.enableAppAutoUpdate ?? true,
      enableAppAutoUpdateByProbability: oldModFeatures.appAutoUpdates.enableAppAutoUpdateByProbability ?? false,
    };
  }

  // Миграция scrobblers
  if (oldModFeatures.scrobblers) {
    newModSettings.scrobblers = {
      lastfm: {
        enable: oldModFeatures.scrobblers.lastfm?.enable ?? true,
        fromYnison: oldModFeatures.scrobblers.lastfm?.fromYnison ?? false,
        autoLike: oldModFeatures.scrobblers.lastfm?.autoLike ?? false,
        separatorType: oldModFeatures.scrobblers.lastfm?.separatorType ?? 1,
      },
    };
  }

  // Миграция downloader
  if (oldModFeatures.downloader) {
    newModSettings.downloader = {
      useDefaultPath: oldModFeatures.downloader.useDefaultPath ?? false,
      defaultPath: oldModFeatures.downloader.defaultPath ?? '',
      useMP3: oldModFeatures.downloader.useMP3 ?? false,
      useCustomPathForSessionStorage: oldModFeatures.downloader.useCustomPathForSessionStorage ?? false,
      customPathForSessionStorage: oldModFeatures.downloader.customPathForSessionStorage ?? '',
      useSyncLyrics: oldModFeatures.downloader.useSyncLyrics ?? true,
    };
  }

  // Добавление новой секции lrclib (по умолчанию)
  newModSettings.lrclib = {
    useText: false,
    syncLyricsTextFallback: false,
    useTitleOnlyFallback: false,
  };

  // Миграция miniplayer
  if (oldModFeatures.miniplayer) {
    newModSettings.miniplayer = {
      skipTaskbar: oldModFeatures.miniplayer.skipTaskbar ?? false,
      savePosition: oldModFeatures.miniplayer.savePosition ?? false,
      saveDimensions: oldModFeatures.miniplayer.saveDimensions ?? false,
      alwaysShowPlayerTimestamps: oldModFeatures.miniplayer.alwaysShowPlayerTimestamps ?? false,
      window: {
        alwaysOnTop: oldModFeatures.miniplayer.window?.alwaysOnTop ?? false,
        width: oldModFeatures.miniplayer.window?.width ?? 380,
        height: oldModFeatures.miniplayer.window?.height ?? 590,
        x: oldModFeatures.miniplayer.window?.x ?? 0,
        y: oldModFeatures.miniplayer.window?.y ?? 0,
      },
    };
  }

  // Миграция простых булевых полей
  newModSettings.r128Normalization = oldModFeatures.r128Normalization ?? true;
  newModSettings.tryEnableSurroundAudio = oldModFeatures.tryEnableSurroundAudio ?? true;
  newModSettings.showNonMusicPage = oldModFeatures.showNonMusicPage ?? true;
  newModSettings.showConcertsTab = true; // Новое поле, устанавливаем по умолчанию
  newModSettings.enableHardwareAcceleration = oldModFeatures.enableHardwareAcceleration ?? true;

  logger.log("Store migration completed from MOD_FEATURES to MOD_SETTINGS");

  return newModSettings;
};

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
      whitePlayButton: true,
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
        separatorType: 1,
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
    miniplayer: {
      skipTaskbar: false,
      savePosition: false,
      saveDimensions: false,
      alwaysShowPlayerTimestamps: store.get(store_js_1.StoreKeys.MOD_FEATURES)?.playerBarEnhancement?.alwaysShowPlayerTimestamps ?? false,
      window: {
        alwaysOnTop: false,
        width: 380,
        height: 590,
        x: 0,
        y: 0,
      }
    },
    r128Normalization: false,
    tryEnableSurroundAudio: false,
    showNonMusicPage: true,
    enableHardwareAcceleration: true,
  });
  initField(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED, false);
  initField(store_js_1.StoreKeys.ENABLE_YNISON_REMOTE_CONTROL, true);
  initField(store_js_1.StoreKeys.SEND_ANONYMIZED_METRICS, true);
  initField(store_js_1.StoreKeys.YNISON_INTERCEPT_PLAYBACK, false);
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

  initNew();

};
exports.init = init;

const initNew = () => {
  initField(store_js_1.StoreKeys.WINDOW_DIMENSIONS, {
    width: 1280,
    height: 800,
    maximized: false,
  });
  initField(store_js_1.StoreKeys.WINDOW_MONITOR_ID, null);

  // Получаем мигрированные данные из старого формата
  const migratedSettings = migrateStoreFormat();

  initField(store_js_1.StoreKeys.MOD_SETTINGS, {
    taskBarExtensions: migratedSettings?.taskBarExtensions ?? {
      enable: true,
      coverAsThumbnail: false,
    },
    window: migratedSettings?.window ?? {
      toTray: false,
      autoStartup: false,
      minimizedStart: false,
      preventDisplaySleep: false,
      startupPage: '/',
      saveWindowDimensionsOnRestart: false,
      saveWindowPositionOnRestart: false,
    },
    globalShortcuts: migratedSettings?.globalShortcuts ?? {
      enable: true,
      TOGGLE_PLAY: 'Ctrl+/',
      MOVE_FORWARD: 'Ctrl+,',
      MOVE_BACKWARD: 'Ctrl+.',
      TOGGLE_REPEAT: 'Ctrl+?',
      TOGGLE_SHUFFLE: "Ctrl+'",
    },
    playerBarEnhancement: migratedSettings?.playerBarEnhancement ?? {
      showCodecInsteadOfQualityMark: true,
      alwaysShowTimestamps: false,
      showRepeatButtonOnVibe: true,
      changeDislikeButtonPos: true,
      disablePerTrackColors: false,
      alwaysWideBar: false,
      playButtonType: 'yellow',
    },
    vibeAnimationEnhancement: migratedSettings?.vibeAnimationEnhancement ?? {
      maxFPS: 25,
      vibeIntensityCoefficient: 1.3,
      useDynamicEnergy: true,
      smoothDynamicEnergy: false,
      smoothDynamicEnergyCoefficient: 0.2,
      playVibeOnAnyEntity: true,
      disableRendering: false,
      autoLaunchOnAppStartup: false,
      enableEndlessMusic: true,
    },
    appAutoUpdates: migratedSettings?.appAutoUpdates ?? {
      enableAppAutoUpdate: store.get(store_js_1.StoreKeys.AUTO_UPDATES) ?? true,
      enableAppAutoUpdateByProbability: false,
    },
    scrobblers: migratedSettings?.scrobblers ?? {
      lastfm: {
        enable: true,
        fromYnison: false,
        autoLike: false,
        separatorType: 1,
      },
    },
    downloader: migratedSettings?.downloader ?? {
      useDefaultPath: false,
      defaultPath: '',
      useMP3: false,
      useCustomPathForSessionStorage: false,
      customPathForSessionStorage: '',
      useSyncLyrics: true,
    },
    lrclib: migratedSettings?.lrclib ?? {
      useText: false,
      syncLyricsTextFallback: false,
      useTitleOnlyFallback: false,
    },
    miniplayer: migratedSettings?.miniplayer ?? {
      skipTaskbar: false,
      savePosition: false,
      saveDimensions: false,
      alwaysShowPlayerTimestamps: store.get(store_js_1.StoreKeys.MOD_SETTINGS)?.playerBarEnhancement?.alwaysShowPlayerTimestamps ?? false,
      window: {
        alwaysOnTop: false,
        width: 380,
        height: 590,
        x: 0,
        y: 0,
      },
    },
    r128Normalization: migratedSettings?.r128Normalization ?? true,
    tryEnableSurroundAudio: migratedSettings?.tryEnableSurroundAudio ?? true,
    showNonMusicPage: migratedSettings?.showNonMusicPage ?? true,
    showConcertsTab: migratedSettings?.showConcertsTab ?? true,
    enableHardwareAcceleration: migratedSettings?.enableHardwareAcceleration ?? true,
  });

  initField(store_js_1.StoreKeys.IS_DEVTOOLS_ENABLED, false);
  initField(store_js_1.StoreKeys.SEND_ANONYMIZED_METRICS, true);
  initField(store_js_1.StoreKeys.ENABLE_YNISON_REMOTE_CONTROL, true);
  initField(store_js_1.StoreKeys.YNISON_INTERCEPT_PLAYBACK, false);
  initField(store_js_1.StoreKeys.ENABLE_YNISON_FOR_RPC, false);
  initField(store_js_1.StoreKeys.DISPLAY_MAX_FPS, 60);

  fetchDefaultExperimentOverrides().then((data) => {
    if (data) initField(store_js_1.StoreKeys.DEFAULT_MUSIC_EXPERIMENT_OVERRIDES, data, true);
  });

  if (getModSettings()?.scrobblers?.lastfm?.enable === undefined)
    initField(
      `${store_js_1.StoreKeys.MOD_SETTINGS}.scrobblers`,
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
    if (data) initField(store_js_1.StoreKeys.DEFAULT_MUSIC_EXPERIMENT_OVERRIDES, data, true);
  });
};
exports.initNew = initNew;

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

const getYnisonInterceptPlayback = () => {
  return Boolean(getStore(store_js_1.StoreKeys.YNISON_INTERCEPT_PLAYBACK));
};
exports.getYnisonInterceptPlayback = getYnisonInterceptPlayback;

const getAutoUpdatesEnabled = () => {
  return Boolean(getStore(store_js_1.StoreKeys.ENABLE_AUTO_UPDATES));
};
exports.getAutoUpdatesEnabled = getAutoUpdatesEnabled;

const getModFeatures = () => {
  return getStore(store_js_1.StoreKeys.MOD_FEATURES);
};
exports.getModFeatures = getModFeatures;

const getModSettings = () => {
  return getStore(store_js_1.StoreKeys.MOD_SETTINGS);
};
exports.getModSettings = getModSettings;

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

  const data = getStore(store_js_1.StoreKeys.DEFAULT_EXPERIMENT_OVERRIDES) ?? defaultExperimentOverrides

  data.WebNextYnisonActivityInterception = (getStore(store_js_1.StoreKeys.ENABLE_YNISON_REMOTE_CONTROL) ? 'on' : 'off');
  data.WebNextPlayerBarYellowButton = (getStore(store_js_1.StoreKeys.MOD_FEATURES).playerBarEnhancement.whitePlayButton ? 'off' : 'on');
  data.WebNextDisableNonMusic = (getStore(store_js_1.StoreKeys.MOD_FEATURES).showNonMusicPage ? 'off' : 'on');

  return data
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
