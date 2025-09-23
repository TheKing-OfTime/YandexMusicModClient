"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshRepositoryMeta =
  exports.sendRefreshTracksAvailability =
  exports.sendAnalyticsOnFirstLaunch =
  exports.sendOpenDeeplink =
  exports.sendPlayerAction =
  exports.sendRefreshApplicationData =
  exports.sendUpdateAvailable =
  exports.sendLoadReleaseNotes =
  exports.sendProbabilityBucket =
  exports.handleApplicationEvents =
  exports.sendNativeStoreUpdate =
    void 0;
const electron_1 = require("electron");
const events_js_1 = require("./types/events.js");
const playerActions_js_1 = require("./types/playerActions.js");
const Logger_js_1 = require("./packages/logger/Logger.js");
const updater_js_1 = require("./lib/updater.js");
const tray_js_1 = require("./lib/tray.js");
const appSuspension_js_1 = require("./lib/appSuspension.js");
const discordRichPresence_js_1 = require("./lib/discordRichPresence.js");
const trackDownloader_js_1 = require("./lib/trackDownloader.js");
const taskBarExtension_js_1 = require("./lib/taskBarExtension/taskBarExtension.js");
const cookies_js_1 = require("./constants/cookies.js");
const store_js_1 = require("./lib/store.js");
const state_js_1 = require("./lib/state.js");
const createWindow_js_1 = require("./lib/createWindow.js");
const handleDeeplink_js_1 = require("./lib/handlers/handleDeeplink.js");
const loadReleaseNotes_js_1 = require("./lib/loadReleaseNotes.js");
const deviceInfo_js_1 = require("./lib/deviceInfo.js");
const platform_js_1 = require("./types/platform.js");
const isAccelerator = require("electron-is-accelerator");
const modUpdater_js_1 = require("./lib/modUpdater.js");
const scrobbleManager_js_1 = require("./lib/scrobble/index.js");
const eventsLogger = new Logger_js_1.Logger("Events");
const isBoolean = (value) => {
  return typeof value === "boolean";
};

let mainWindow = undefined;

const updateGlobalShortcuts = () => {
  eventsLogger.info("(GlobalShortcuts) Update triggered.");
  electron_1.globalShortcut.unregisterAll();

  const modFeatures = store_js_1.getModFeatures();

  eventsLogger.info("(GlobalShortcuts) modFeatures.globalShortcuts:", modFeatures?.globalShortcuts);

  if (modFeatures?.globalShortcuts?.enable) {
    const shortcuts = Object.entries(modFeatures.globalShortcuts);
    shortcuts.forEach((shortcut) => {
      if (shortcut[0] === "enable") return;

      if (shortcut[1] && isAccelerator(shortcut[1])) {
        electron_1.globalShortcut.register(shortcut[1], () => {
          const actions = shortcut[0].split(" ");
          actions.forEach((action) => {
            sendPlayerAction(mainWindow, playerActions_js_1.PlayerActions[action]);
          });
        });
      } else {
        eventsLogger.warn(
          `(GlobalShortcuts) ${shortcut[0]} is not registered. Invalid accelerator: ${shortcut[1]}`,
        );
      }
    });
    eventsLogger.info("(GlobalShortcuts) Registered.");
  } else {
    eventsLogger.info("(GlobalShortcuts) Unregistered all.");
  }
};

const handleApplicationEvents = (window) => {
  mainWindow = window;
  const updater = (0, updater_js_1.getUpdater)();
  const trackDownloader = new trackDownloader_js_1.TrackDownloader(window);

  updateGlobalShortcuts();

  // TODO Создать лайфсайкл для нативных ивентов. Лучше прямо в нативном модуле. Кроме того. Вычленить из SetIconicThumbnail функцию установки флагов. Использовать её для PROBE. Чтобы определять максимальные размеры превьюшек.
  // TODO Ещё можно реализовать через WM_DWMSENDICONICLIVEPREVIEWBITMAP установку картинки для peek preview. Чтобы обойти тупость WinAPI, которая не позволяет юзать iconic thumbnail без iconic peek preview.
  // WM_DWMSENDICONICTHUMBNAIL = 0x323
  // mainWindow.hookWindowMessage(0x323, (wParam, lParam) => {
  //   const height = lParam.readUInt16LE(0);
  //   const width = lParam.readUInt16LE(2);
  //   eventsLogger.log(`Windows просит иконку превью: ${width}x${height}`);
  //   // Тут нужно вызвать DwmSetIconicThumbnail — но его нет в Electron
  // });
  //
  // // WM_DWMSENDICONICLIVEPREVIEWBITMAP = 0x326
  // mainWindow.hookWindowMessage(0x326, () => {
  //   eventsLogger.log("Windows просит Live Preview");
  //   // Здесь тоже нужна DwmSetIconicLivePreviewBitmap
  // });
  //

  electron_1.ipcMain.on(
    events_js_1.Events.DOWNLOAD_TRACK,
    async (event, data) => {
      let callback = async (progressRenderer, progressWindow) => {
        sendProgressBarChange(
          window,
          "trackDownloadCurrent",
          progressRenderer * 100,
        );
        window.setProgressBar(progressWindow);
      };

      eventsLogger.info("Event received", events_js_1.Events.DOWNLOAD_TRACK);
      await trackDownloader.downloadTrack(data, callback);
    },
  );

  electron_1.app.on("will-quit", () => {
    electron_1.globalShortcut.unregisterAll();
  });

  electron_1.ipcMain.on(events_js_1.Events.APPLICATION_RESTART, () => {
    eventsLogger.info("Event received", events_js_1.Events.APPLICATION_RESTART);
    electron_1.app.relaunch();
    electron_1.app.exit();
  });
  electron_1.ipcMain.on(events_js_1.Events.WINDOW_MINIMIZE, () => {
    eventsLogger.info("Event received", events_js_1.Events.WINDOW_MINIMIZE);
    window.minimize();
    (0, tray_js_1.updateTrayMenu)(window);
  });
  electron_1.ipcMain.on(events_js_1.Events.WINDOW_MAXIMIZE, () => {
    eventsLogger.info("Event received", events_js_1.Events.WINDOW_MAXIMIZE);
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
    (0, tray_js_1.updateTrayMenu)(window);
  });
  electron_1.ipcMain.on(events_js_1.Events.WINDOW_CLOSE, () => {
    eventsLogger.info("Event received", events_js_1.Events.WINDOW_CLOSE);
    if (
      (store_js_1.getModFeatures()?.windowBehavior
        ?.minimizeToTrayOnWindowClose ??
        state_js_1.state.player.isPlaying) &&
      platform_js_1.Platform.WINDOWS === deviceInfo_js_1.devicePlatform
    ) {
      (0, createWindow_js_1.toggleWindowVisibility)(window, false);
    } else {
      electron_1.app.quit();
    }
  });
  electron_1.ipcMain.on(events_js_1.Events.INSTALL_UPDATE, () => {
    eventsLogger.info("Event received", events_js_1.Events.INSTALL_UPDATE);
    updater.install();
  });
  electron_1.ipcMain.on(
    events_js_1.Events.APPLICATION_READY,
    async (event, language) => {
      eventsLogger.info("Event received", events_js_1.Events.APPLICATION_READY);
      (0, deviceInfo_js_1.logHardwareInfo)();
      if (state_js_1.state.deeplink) {
        (0, handleDeeplink_js_1.navigateToDeeplink)(
          window,
          state_js_1.state.deeplink,
        );
      }
      if (updater.latestAvailableVersion) {
        (0, exports.sendUpdateAvailable)(
          window,
          updater.latestAvailableVersion,
        );
      }
      if ((0, store_js_1.isFirstLaunch)()) {
        (0, exports.sendAnalyticsOnFirstLaunch)(window);
      }
      (0, exports.sendProbabilityBucket)(
        window,
        updater.getProbabilityBucket(),
      );

      if (
        store_js_1.getModFeatures()?.vibeAnimationEnhancement
          ?.autoLaunchOnAppStartup
      ) {
        setTimeout(() => {
          if (!state_js_1.state.player.isPlaying) {
            exports.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_PLAY);
          }
        }, 4000);
      }

      const releaseNotes = await (0, loadReleaseNotes_js_1.loadReleaseNotes)(
        language,
      );
      if (releaseNotes) {
        (0, exports.sendLoadReleaseNotes)(
          window,
          (0, store_js_1.needToShowReleaseNotes)(),
          releaseNotes,
        );
      }
    },
  );
  electron_1.ipcMain.on(
    events_js_1.Events.APPLICATION_THEME,
    (event, backgroundColor) => {
      eventsLogger.info("Event received", events_js_1.Events.APPLICATION_THEME);
      window.setBackgroundColor(backgroundColor);
    },
  );
  electron_1.ipcMain.on(
    events_js_1.Events.TRACKS_AVAILABILITY_UPDATED,
    (event) => {
      const [, setTracksAvailabilityUpdatedAt] =
        store_js_1.tracksAvailabilityUpdatedAt;
      eventsLogger.info(
        "Event received",
        events_js_1.Events.TRACKS_AVAILABILITY_UPDATED,
      );
      setTracksAvailabilityUpdatedAt(Date.now());
    },
  );
  electron_1.ipcMain.on(events_js_1.Events.REPOSITORY_META_UPDATED, (event) => {
    const [, setRepositoryMetaUpdatedAtStoreValue] =
      store_js_1.repositoryMetaUpdatedAt;
    eventsLogger.info(
      "Event received",
      events_js_1.Events.REPOSITORY_META_UPDATED,
    );
    setRepositoryMetaUpdatedAtStoreValue(Date.now());
  });
  electron_1.ipcMain.on(events_js_1.Events.PLAYER_STATE, (event, data) => {
    eventsLogger.info(
      `Event received`,
      events_js_1.Events.PLAYER_STATE,
      data.isPlaying,
      data.canMoveBackward,
      data.canMoveForward,
    );
    if (isBoolean(data.isPlaying)) {
      state_js_1.state.player.isPlaying = data.isPlaying;
      (0, appSuspension_js_1.toggleAppSuspension)(
        data.isPlaying,
        (store_js_1.getModFeatures()?.windowBehavior?.preventDisplaySleep ??
          false) &&
          window.isVisible(),
      );
    }
    if (isBoolean(data.canMoveBackward)) {
      state_js_1.state.player.canMoveBackward = data.canMoveBackward;
    }
    if (isBoolean(data.canMoveForward)) {
      state_js_1.state.player.canMoveForward = data.canMoveForward;
    }
    (0, tray_js_1.updateTrayMenu)(window);
    (0, taskBarExtension_js_1.onPlayerStateChange)(window, data);
    (0, scrobbleManager_js_1.handlePlayingStateEvent)(data);
    (0, discordRichPresence_js_1.discordRichPresence)(data);
  });
  electron_1.ipcMain.on(events_js_1.Events.YNISON_STATE, (event, data) => {
    eventsLogger.info(`Event received`, events_js_1.Events.YNISON_STATE);
    (0, discordRichPresence_js_1.fromYnisonState)(data);
    (0, scrobbleManager_js_1.handlePlayingStateEventFromYnison)(data);
  });
  electron_1.ipcMain.on(
    events_js_1.Events.DOWNLOAD_MOD_UPDATE,
    async (event, data) => {
      eventsLogger.info(
        `Event received`,
        events_js_1.Events.DOWNLOAD_MOD_UPDATE,
      );

      let callback = async (progressRenderer, progressWindow) => {
        sendProgressBarChange(window, "modUpdateToast", progressRenderer * 100);
        window.setProgressBar(progressWindow);
      };
      await (0, modUpdater_js_1.getModUpdater)().onUpdateDownload(callback);
    },
  );

  electron_1.ipcMain.on(
    events_js_1.Events.INSTALL_MOD_UPDATE,
    async (event, data) => {
      eventsLogger.info(
        `Event received`,
        events_js_1.Events.INSTALL_MOD_UPDATE,
      );
      await (0, modUpdater_js_1.getModUpdater)().onInstallUpdate();
    },
  );

  electron_1.ipcMain.on(events_js_1.Events.NATIVE_STORE_SET,(event, key, value) => {
      eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_STORE_SET, key, value);
        store_js_1.set(key, value);
        if (key === "modFeatures.globalShortcuts.enable") {
          updateGlobalShortcuts();
        }
    }
  );

  electron_1.ipcMain.handle(events_js_1.Events.GET_PASSPORT_LOGIN, async () => {
    eventsLogger.info("Event handle", events_js_1.Events.GET_PASSPORT_LOGIN);
    try {
      const cookie = await electron_1.session.defaultSession.cookies.get({
        name: cookies_js_1.PASSPORT_LOGIN,
        domain: cookies_js_1.PASSPORT_LOGIN_DOMAIN,
      });
      return cookie?.[0]?.value;
    } catch (error) {
      eventsLogger.error(
        `${events_js_1.Events.GET_PASSPORT_LOGIN} event failed.`,
        error,
      );
      return;
    }
  });
};
electron_1.ipcMain.handle("openConfigFile", async () => {
  return await electron_1.shell.openPath(
    electron_1.app.getPath("userData") + "/config.json",
  );
});

electron_1.ipcMain.handle(
  "setPathWithNativeDialog",
  async (event, key, defaultPath = undefined, properties = undefined) => {
    const { canceled, filePaths } = await electron_1.dialog.showOpenDialog({
      defaultPath: defaultPath,
      properties: properties,
    });
    if (canceled || !filePaths) return;

    store_js_1.set(key, filePaths[0]);
  },
);

electron_1.ipcMain.handle("scrobble-login", () => {
  scrobbleManager_js_1.scrobblerManager.getScrobblers().forEach((scrobbler) => {
    scrobbler.login();
  });
});
electron_1.ipcMain.handle("scrobble-logout", () => {
  scrobbleManager_js_1.scrobblerManager.getScrobblers().forEach((scrobbler) => {
    scrobbler.logout();
  });
});
electron_1.ipcMain.handle("scrobble-lastfm-login", () => {
  scrobbleManager_js_1.scrobblerManager.getScrobblerByType("Last.fm").login();
});

electron_1.ipcMain.handle("scrobble-lastfm-logout", () => {
  scrobbleManager_js_1.scrobblerManager.getScrobblerByType("Last.fm").logout();
});

electron_1.ipcMain.handle("scrobble-lastfm-get-user", () => {
  return scrobbleManager_js_1.scrobblerManager
    .getScrobblerByType("Last.fm")
    .api.getUserInfo();
});

electron_1.ipcMain.handle(
  "scrobble-lastfm-get-current-playing-track",
  (event, user) => {
    return scrobbleManager_js_1.scrobblerManager
      .getScrobblerByType("Last.fm")
      .api.getCurrentPlayingTrack(user);
  },
);

exports.handleApplicationEvents = handleApplicationEvents;

const sendNativeStoreUpdate = (key, value, window=undefined) => {
    (window ?? mainWindow)?.webContents.send(events_js_1.Events.NATIVE_STORE_UPDATE, key, value);
    if(window ?? mainWindow) {
        eventsLogger.info("Event send", events_js_1.Events.NATIVE_STORE_UPDATE, key, value)
    } else {
        eventsLogger.warn("Event not send, window is undefined", events_js_1.Events.NATIVE_STORE_UPDATE, key, value)
    }
};
exports.sendNativeStoreUpdate = sendNativeStoreUpdate;

const sendLastFmUserInfoUpdated = (window = mainWindow, userinfo) => {
  window.webContents.send(events_js_1.Events.LASTFM_USERINFO_UPDATE, userinfo);
  eventsLogger.info(
    "Event sent",
    events_js_1.Events.LASTFM_USERINFO_UPDATE,
    userinfo,
  );
};

exports.sendLastFmUserInfoUpdated = sendLastFmUserInfoUpdated;
const sendProbabilityBucket = (window, bucket) => {
  window.webContents.send(events_js_1.Events.PROBABILITY_BUCKET, bucket);
  eventsLogger.info(
    "Event sent",
    events_js_1.Events.PROBABILITY_BUCKET,
    bucket,
  );
};
exports.sendProbabilityBucket = sendProbabilityBucket;
const sendLoadReleaseNotes = (window, needToShowReleaseNotes, releaseNotes) => {
  window.webContents.send(
    events_js_1.Events.LOAD_RELEASE_NOTES,
    needToShowReleaseNotes,
    releaseNotes,
  );
  eventsLogger.info("Event sent", events_js_1.Events.LOAD_RELEASE_NOTES);
};
exports.sendLoadReleaseNotes = sendLoadReleaseNotes;
const sendUpdateAvailable = (window, version) => {
  window.webContents.send(events_js_1.Events.UPDATE_AVAILABLE, version);
  eventsLogger.info("Event sent", events_js_1.Events.UPDATE_AVAILABLE, version);
};
exports.sendUpdateAvailable = sendUpdateAvailable;
const sendModUpdateAvailable = (window, currVersion, newVersion) => {
  window.webContents.send(
    events_js_1.Events.MOD_UPDATE_AVAILABLE,
    currVersion,
    newVersion,
    Date.now(),
  );
  eventsLogger.info(
    "Event sent",
    events_js_1.Events.MOD_UPDATE_AVAILABLE,
    currVersion,
    newVersion,
  );
};
exports.sendModUpdateAvailable = sendModUpdateAvailable;
const sendProgressBarChange = (window, elementType, progress) => {
  window.webContents.send(
    events_js_1.Events.PROGRESS_BAR_CHANGE,
    elementType,
    progress,
    Date.now(),
  );
  eventsLogger.info(
    "Event sent",
    events_js_1.Events.PROGRESS_BAR_CHANGE,
    elementType,
    progress,
  );
};
exports.sendProgressBarChange = sendProgressBarChange;
const sendShowReleaseNotes = (window) => {
  window.webContents.send(events_js_1.Events.SHOW_RELEASE_NOTES);
  eventsLogger.info("Event sent", events_js_1.Events.SHOW_RELEASE_NOTES);
};
exports.sendShowReleaseNotes = sendShowReleaseNotes;
const sendRefreshApplicationData = (window) => {
  window.webContents.send(events_js_1.Events.REFRESH_APPLICATION_DATA);
  eventsLogger.info("Event sent", events_js_1.Events.REFRESH_APPLICATION_DATA);
};
exports.sendRefreshApplicationData = sendRefreshApplicationData;
const sendPlayerAction = (window, action) => {
  window.webContents.send(events_js_1.Events.PLAYER_ACTION, action, Date.now());
  eventsLogger.info(
    "Event sent",
    events_js_1.Events.PLAYER_ACTION,
    action,
    Date.now(),
  );
};
exports.sendPlayerAction = sendPlayerAction;
const sendOpenDeeplink = (window, pathname) => {
  window.webContents.send(events_js_1.Events.OPEN_DEEPLINK, pathname);
  eventsLogger.info("Event sent", events_js_1.Events.OPEN_DEEPLINK);
};
exports.sendOpenDeeplink = sendOpenDeeplink;
const sendAnalyticsOnFirstLaunch = (window) => {
  window.webContents.send(events_js_1.Events.FIRST_LAUNCH);
  eventsLogger.info("Event send", events_js_1.Events.FIRST_LAUNCH);
};
exports.sendAnalyticsOnFirstLaunch = sendAnalyticsOnFirstLaunch;
const sendRefreshTracksAvailability = (window) => {
  window.webContents.send(events_js_1.Events.REFRESH_TRACKS_AVAILABILITY);
  eventsLogger.info(
    "Event sent",
    events_js_1.Events.REFRESH_TRACKS_AVAILABILITY,
  );
};
exports.sendRefreshTracksAvailability = sendRefreshTracksAvailability;
const sendRefreshRepositoryMeta = (window) => {
  window.webContents.send(events_js_1.Events.REFRESH_REPOSITORY_META);
  eventsLogger.info("Event send", events_js_1.Events.REFRESH_REPOSITORY_META);
};
exports.sendRefreshRepositoryMeta = sendRefreshRepositoryMeta;

const zoomIn = () => {
  eventsLogger.info("Event handle", "zoom-in");
  return (mainWindow.webContents.zoomFactor = Math.min(
    mainWindow.webContents.zoomFactor + 0.05,
    2.0,
  ));
};

exports.zoomIn = zoomIn;

const zoomOut = () => {
  eventsLogger.info("Event handle", "zoom-out");
  return (mainWindow.webContents.zoomFactor = Math.max(
    mainWindow.webContents.zoomFactor - 0.05,
    0.75,
  ));
};
exports.zoomOut = zoomOut;

const resetZoom = () => {
  eventsLogger.info("Event handle", "reset-zoom");
  return (mainWindow.webContents.zoomFactor = 1.0);
};

exports.resetZoom = resetZoom;

const getZoomLevel = () => {
  eventsLogger.info("Event handle", "get-zoom-level");
  return mainWindow.webContents.zoomFactor;
};

exports.getZoomLevel = getZoomLevel;

const setZoomLevel = (event, level) => {
  eventsLogger.info("Event handle", "set-zoom-level", level);
  return (mainWindow.webContents.zoomFactor = Math.min(
    Math.max(level ?? 1.0, 0.75),
    2.0,
  ));
};

exports.setZoomLevel = setZoomLevel;

electron_1.ipcMain.handle("zoom-in", zoomIn);
electron_1.ipcMain.handle("zoom-out", zoomOut);
electron_1.ipcMain.handle("reset-zoom", resetZoom);
electron_1.ipcMain.handle("get-zoom-level", getZoomLevel);
electron_1.ipcMain.handle("set-zoom-level", setZoomLevel);
