"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAnalyticsOnFirstLaunch =
  exports.sendOpenDeeplink =
  exports.sendPlayerAction =
  exports.sendRefreshApplicationData =
  exports.sendShowReleaseNotes =
  exports.sendUpdateAvailable =
  exports.handleApplicationEvents =
    void 0;
const electron_1 = require("electron");
const NodeID3 = require('node-id3').Promise;
const fs = require('fs').promises;
const events_js_1 = require("./constants/events.js");
const Logger_js_1 = require("./packages/logger/Logger.js");
const updater_js_1 = require("./lib/updater.js");
const tray_js_1 = require("./lib/tray.js");
const appSuspension_js_1 = require("./lib/appSuspension.js");
const discordRichPresence_js_1 = require("./lib/discordRichPresence.js");
const taskBarExtension_js_1 = require("./lib/taskBarExtension/taskBarExtension.js");
const cookies_js_1 = require("./constants/cookies.js");
const store_js_1 = require("./lib/store.js");
const state_js_1 = require("./lib/state.js");
const createWindow_js_1 = require("./lib/createWindow.js");
const handleDeeplink_js_1 = require("./lib/handlers/handleDeeplink.js");
const eventsLogger = new Logger_js_1.Logger("Events");
const isBoolean = (value) => {
  return typeof value === "boolean";
};

const artists2string = (artists) => {
    if (!artists) return;
    if (artists.length <= 1)
        return artists?.[0].name;
    let string = (artists.shift())?.name;
    artists.forEach((a)=>{string += ' & ' + a.name})
    return string;
}

const handleApplicationEvents = (window) => {
  const updater = (0, updater_js_1.getUpdater)();
    electron_1.ipcMain.on(events_js_1.Events.DOWNLOAD_TRACK, async (event, data) => {
        eventsLogger.info("Event received", events_js_1.Events.DOWNLOAD_TRACK);
        const downloadURL = data.downloadURL;
        const artistCombined = artists2string(data.track?.artists)
        console.log(data.track)
        const tags = {
            title: data.track?.title,
            artist: artistCombined,
            album: data.track?.albums?.[0]?.title,
        }

        const { canceled, filePath } = await electron_1.dialog.showSaveDialog({
          defaultPath: `${artistCombined} — ${data.track?.title}.${data.codec}`,
        });
        if (canceled || !filePath || !downloadURL) return eventsLogger.info("Track download canceled", events_js_1.Events.DOWNLOAD_TRACK);
        const res = await fetch(downloadURL);
        let buffer = Buffer.from(await res.arrayBuffer());
        eventsLogger.info("Got track", events_js_1.Events.DOWNLOAD_TRACK)
        let coverRes, coverBuffer;
        if (data.track?.coverUri) {
          coverRes = await fetch('https://' + data.track?.coverUri.replace('%%', '400x400'));
          coverBuffer = Buffer.from(await coverRes.arrayBuffer());
          eventsLogger.info("Got cover", events_js_1.Events.DOWNLOAD_TRACK)
        }
        if (coverBuffer) {
            tags.APIC = coverBuffer;
        }
        buffer = await NodeID3.write(tags, buffer);
        await fs.writeFile(filePath, buffer);
        eventsLogger.info("Track downloaded", events_js_1.Events.DOWNLOAD_TRACK);
    });
  electron_1.ipcMain.on(events_js_1.Events.APPLICATION_RESTART, () => {
    eventsLogger.info("Event received", events_js_1.Events.APPLICATION_RESTART);
    electron_1.app.relaunch()
    electron_1.app.exit()
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
    if (state_js_1.state.player.isPlaying) {
      (0, createWindow_js_1.toggleWindowVisibility)(window, false);
    } else {
      electron_1.app.quit();
    }
  });
  electron_1.ipcMain.on(events_js_1.Events.INSTALL_UPDATE, () => {
    eventsLogger.info("Event received", events_js_1.Events.INSTALL_UPDATE);
    updater.install();
  });
  electron_1.ipcMain.on(events_js_1.Events.APPLICATION_READY, () => {
        eventsLogger.info('Event received', events_js_1.Events.APPLICATION_READY);
        (0, exports.sendProbabilityBucket)(window, updater.getProbabilityBucket());
    if (state_js_1.state.deeplink) {
      (0, handleDeeplink_js_1.navigateToDeeplink)(
        window,
        state_js_1.state.deeplink,
      );
    }
    if (updater.latestAvailableVersion) {
      (0, exports.sendUpdateAvailable)(window, updater.latestAvailableVersion);
    }
    if ((0, store_js_1.isFirstLaunch)()) {
      (0, exports.sendAnalyticsOnFirstLaunch)(window);
    }
  });
  electron_1.ipcMain.on(
    events_js_1.Events.APPLICATION_THEME,
    (event, backgroundColor) => {
      eventsLogger.info("Event received", events_js_1.Events.APPLICATION_THEME);
      window.setBackgroundColor(backgroundColor);
    },
  );
  electron_1.ipcMain.on(events_js_1.Events.RELEASE_NOTES_READY, () => {
    eventsLogger.info("Event received", events_js_1.Events.RELEASE_NOTES_READY);
    if ((0, store_js_1.needToShowReleaseNotes)()) {
      (0, exports.sendShowReleaseNotes)(window);
    }
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
      (0, appSuspension_js_1.toggleAppSuspension)(data.isPlaying);
    }
    if (isBoolean(data.canMoveBackward)) {
      state_js_1.state.player.canMoveBackward = data.canMoveBackward;
    }
    if (isBoolean(data.canMoveForward)) {
      state_js_1.state.player.canMoveForward = data.canMoveForward;
    }
    (0, tray_js_1.updateTrayMenu)(window);
    (0, taskBarExtension_js_1.onPlayerStateChange)(window, data);
    (0, discordRichPresence_js_1.discordRichPresence)(data);
  });
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
exports.handleApplicationEvents = handleApplicationEvents;
const sendProbabilityBucket = (window, bucket) => {
    window.webContents.send(events_js_1.Events.PROBABILITY_BUCKET, bucket);
    eventsLogger.info('Event sent', events_js_1.Events.PROBABILITY_BUCKET, bucket);
};
exports.sendProbabilityBucket = sendProbabilityBucket;
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
  );
  eventsLogger.info(
    "Event sent",
    events_js_1.Events.MOD_UPDATE_AVAILABLE,
    currVersion,
    newVersion,
  );
};
exports.sendModUpdateAvailable = sendModUpdateAvailable;
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
  window.webContents.send(events_js_1.Events.PLAYER_ACTION, action);
  eventsLogger.info("Event sent", events_js_1.Events.PLAYER_ACTION, action);
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
