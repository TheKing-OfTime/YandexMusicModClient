"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAnalyticsOnFirstLaunch = exports.sendOpenDeeplink = exports.sendUpdateApplicationData = exports.sendShowReleaseNotes = exports.sendUpdateAvailable = exports.handleApplicationEvents = void 0;
const electron_1 = require("electron");
const events_js_1 = require("./constants/events.js");
const Logger_js_1 = require("./packages/logger/Logger.js");
const updater_js_1 = require("./lib/updater.js");
const appSuspensionController_js_1 = require("./lib/appSuspensionController.js");
const cookies_js_1 = require("./constants/cookies.js");
const store_js_1 = require("./lib/store.js");
const state_js_1 = require("./lib/state.js");
const handleDeeplink_js_1 = require("./lib/handlers/handleDeeplink.js");
const eventsLogger = new Logger_js_1.Logger('Events');
const handleApplicationEvents = (window) => {
    const updater = (0, updater_js_1.getUpdater)();
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_MINIMIZE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_MINIMIZE);
        window.minimize();
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_MAXIMIZE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_MAXIMIZE);
        if (window.isMaximized()) {
            window.unmaximize();
        }
        else {
            window.maximize();
        }
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_CLOSE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_CLOSE);
        electron_1.app.quit();
    });
    electron_1.ipcMain.on(events_js_1.Events.ON_UPDATE_INSTALL, () => {
        eventsLogger.info('Event received', events_js_1.Events.ON_UPDATE_INSTALL);
        updater.install();
    });
    electron_1.ipcMain.on(events_js_1.Events.ON_APPLICATION_READY, () => {
        eventsLogger.info('Event received', events_js_1.Events.ON_APPLICATION_READY);
        if (state_js_1.state.deeplink) {
            (0, handleDeeplink_js_1.navigateToDeeplink)(window, state_js_1.state.deeplink);
        }
        if (updater.latestAvailableVersion) {
            (0, exports.sendUpdateAvailable)(window, updater.latestAvailableVersion);
        }
        if ((0, store_js_1.isFirstLaunch)()) {
            (0, exports.sendAnalyticsOnFirstLaunch)(window);
        }
    });
    electron_1.ipcMain.on(events_js_1.Events.APPLICATION_THEME, (event, backgroundColor) => {
        eventsLogger.info('Event received', events_js_1.Events.APPLICATION_THEME);
        window.setBackgroundColor(backgroundColor);
    });
    electron_1.ipcMain.on(events_js_1.Events.NEED_SHOW_RELEASE_NOTES, () => {
        eventsLogger.info('Event received', events_js_1.Events.NEED_SHOW_RELEASE_NOTES);
        if ((0, store_js_1.needToShowReleaseNotes)()) {
            (0, exports.sendShowReleaseNotes)(window);
        }
    });
    electron_1.ipcMain.handle(events_js_1.Events.GET_PASSPORT_LOGIN, async () => {
        eventsLogger.info('Event handle', events_js_1.Events.GET_PASSPORT_LOGIN);
        try {
            const cookie = await electron_1.session.defaultSession.cookies.get({
                name: cookies_js_1.PASSPORT_LOGIN,
                domain: cookies_js_1.PASSPORT_LOGIN_DOMAIN
            });
            return cookie?.[0]?.value;
        }
        catch (error) {
            eventsLogger.error(`${events_js_1.Events.GET_PASSPORT_LOGIN} event failed.`, error);
            return;
        }
    });
    electron_1.ipcMain.on(events_js_1.Events.ON_PLAYER_STATE, (event, args) => {
        eventsLogger.info(`Event received ${events_js_1.Events.ON_PLAYER_STATE}`);
        (0, appSuspensionController_js_1.appSuspensionController)(args.isPlaying);
    });
};
exports.handleApplicationEvents = handleApplicationEvents;
const sendUpdateAvailable = (window, version) => {
    window.webContents.send(events_js_1.Events.ON_UPDATE_AVAILABLE, version);
    eventsLogger.info('Event sent', events_js_1.Events.ON_UPDATE_AVAILABLE, version);
};
exports.sendUpdateAvailable = sendUpdateAvailable;
const sendShowReleaseNotes = (window) => {
    window.webContents.send(events_js_1.Events.SHOW_RELEASE_NOTES);
    eventsLogger.info('Event sent', events_js_1.Events.SHOW_RELEASE_NOTES);
};
exports.sendShowReleaseNotes = sendShowReleaseNotes;
const sendUpdateApplicationData = (window) => {
    window.webContents.send(events_js_1.Events.UPDATE_APPLICATION_DATA);
    eventsLogger.info('Event sent', events_js_1.Events.UPDATE_APPLICATION_DATA);
};
exports.sendUpdateApplicationData = sendUpdateApplicationData;
const sendOpenDeeplink = (window, pathname) => {
    window.webContents.send(events_js_1.Events.ON_HANDLE_DEEPLINK, pathname);
    eventsLogger.info('Event sent', events_js_1.Events.ON_HANDLE_DEEPLINK);
};
exports.sendOpenDeeplink = sendOpenDeeplink;
const sendAnalyticsOnFirstLaunch = (window) => {
    window.webContents.send(events_js_1.Events.FIRST_LAUNCH);
    eventsLogger.info('Event send', events_js_1.Events.FIRST_LAUNCH);
};
exports.sendAnalyticsOnFirstLaunch = sendAnalyticsOnFirstLaunch;
