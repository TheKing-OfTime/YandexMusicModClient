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

const handleApplicationEvents = (window) => {
  mainWindow = window;
  const updater = (0, updater_js_1.getUpdater)();
    const trackDownloader = new trackDownloader_js_1.TrackDownloader(window);
  if (store_js_1.getModFeatures()?.globalShortcuts) {
    const shortcuts = Object.entries(
      store_js_1.getModFeatures().globalShortcuts,
    );
    shortcuts.forEach((shortcut) => {
      if (shortcut[1] && isAccelerator(shortcut[1]))
        electron_1.globalShortcut.register(shortcut[1], () => {
          const actions = shortcut[0].split(" ");
          actions.forEach((action) => {
            sendPlayerAction(window, playerActions_js_1.PlayerActions[action]);
          });
        });
    });
  }

  electron_1.ipcMain.on(
    events_js_1.Events.DOWNLOAD_TRACK,
    async (event, data) => {

      let callback = async (progressRenderer, progressWindow) => {
        sendProgressBarChange(window, "trackDownloadCurrent", progressRenderer * 100);
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
      store_js_1.getModFeatures()?.windowBehavior
        ?.minimizeToTrayOnWindowClose ??
      state_js_1.state.player.isPlaying
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
          ?.autoLaunchOnAppStartup &&
        !state_js_1.state.player.isPlaying
      ) {
        setTimeout(() => {
          (0, exports.sendPlayerAction)(
            window,
            playerActions_js_1.PlayerActions.TOGGLE_PLAY,
          );
        }, 2500);
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
      (0, appSuspension_js_1.toggleAppSuspension)(data.isPlaying, (store_js_1.getModFeatures()?.windowBehavior?.preventDisplaySleep ?? false) && window.isVisible());
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
  });
  electron_1.ipcMain.on(
    events_js_1.Events.INSTALL_MOD_UPDATE,
    async (event, data) => {
      eventsLogger.info(
        `Event received`,
        events_js_1.Events.INSTALL_MOD_UPDATE,
      );

      let callback = async (progressRenderer, progressWindow) => {
        sendProgressBarChange(window, "modUpdateToast", progressRenderer * 100);
        window.setProgressBar(progressWindow);
      };
      await (0, modUpdater_js_1.getModUpdater)().onUpdateInstall(callback);
    },
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

electron_1.ipcMain.handle('scrobble-login', () => {
  scrobbleManager_js_1.scrobblerManager.getScrobblers().forEach((scrobbler) => {
    scrobbler.login();
  });
});
electron_1.ipcMain.handle('scrobble-logout', () => {
  scrobbleManager_js_1.scrobblerManager.getScrobblers().forEach((scrobbler) => {
    scrobbler.logout();
  });
});
electron_1.ipcMain.handle('scrobble-lastfm-login', () => {
  scrobbleManager_js_1.scrobblerManager.getScrobblerByType("Last.fm").login();
});

electron_1.ipcMain.handle('scrobble-lastfm-logout', () => {
  scrobbleManager_js_1.scrobblerManager.getScrobblerByType("Last.fm").logout();
});

electron_1.ipcMain.handle('scrobble-lastfm-get-user', () => {
  return scrobbleManager_js_1.scrobblerManager.getScrobblerByType("Last.fm").api.getUserInfo();
});

electron_1.ipcMain.handle('scrobble-lastfm-get-current-playing-track', (event, user) => {
  return scrobbleManager_js_1.scrobblerManager.getScrobblerByType("Last.fm").api.getCurrentPlayingTrack(user);
});


exports.handleApplicationEvents = handleApplicationEvents;

const sendLastFmUserInfoUpdated = (window=mainWindow, userinfo) => {
  window.webContents.send(events_js_1.Events.LASTFM_USERINFO_UPDATE, userinfo);
  eventsLogger.info("Event sent", events_js_1.Events.LASTFM_USERINFO_UPDATE, userinfo);
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
