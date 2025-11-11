"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
const cookies_js_1 = require("./constants/cookies.js");
const Logger_js_1 = require("./packages/logger/Logger.js");
const updater_js_1 = require("./lib/updater.js");
const tray_js_1 = require("./lib/tray.js");
const appSuspension_js_1 = require("./lib/appSuspension.js");
const store_js_1 = require("./lib/store.js");
const state_js_1 = require("./lib/state.js");
const toggleWindowVisibility_js_1 = require("./lib/window/toggleWindowVisibility.js");
const toggleMaximize_js_1 = require("./lib/window/toggleMaximize.js");
const minimize_js_1 = require("./lib/window/minimize.js");
const handleDeeplink_js_1 = require("./lib/handlers/handleDeeplink.js");
const loadReleaseNotes_js_1 = require("./lib/loadReleaseNotes.js");
const deviceInfo_js_1 = require("./lib/deviceInfo.js");
const platform_js_1 = require("./types/platform.js");
const config_js_1 = require("./config.js");
const getSortedDescReleaseNotesKeys_js_1 = require("./lib/releaseNotes/getSortedDescReleaseNotesKeys.js");
const removeNewerReleaseNotes_js_1 = require("./lib/releaseNotes/removeNewerReleaseNotes.js");
const formatters_js_1 = require("./lib/i18n/formatters.js");
const stringToAST_js_1 = require("./lib/i18n/stringToAST.js");
const gt_js_1 = __importDefault(require("semver/functions/gt.js"));
const valid_js_1 = __importDefault(require("semver/functions/valid.js"));
const i18nKeys_js_1 = require("./constants/i18nKeys.js");
const dateToDDMonthYYYYProps_js_1 = require("./lib/date/dateToDDMonthYYYYProps.js");

const discordRichPresence_js_1 = require("./lib/discordRichPresence.js");
const trackDownloader_js_1 = require("./lib/trackDownloader/trackDownloader.js");
const taskBarExtension_js_1 = require("./lib/taskBarExtension/taskBarExtension.js");
const isAccelerator = require("electron-is-accelerator");
const modUpdater_js_1 = require("./lib/modUpdater.js");
const scrobbleManager_js_1 = require("./lib/scrobble/index.js");
const playerActions_js_1 = require("./types/playerActions.js");
const { throttle } = require("./lib/utils.js");
const crypto = require("crypto");

const eventsLogger = new Logger_js_1.Logger("Events");
const isBoolean = (value) => {
    return typeof value === "boolean";
};

const PROGRESS_BAR_THROTTLE_MS = 200;

let mainWindow = undefined;

const updateGlobalShortcuts = () => {
    eventsLogger.info("(GlobalShortcuts) Update triggered.");
    electron_1.globalShortcut.unregisterAll();

    const modFeatures = store_js_1.getModFeatures();

    eventsLogger.info(
        "(GlobalShortcuts) modFeatures.globalShortcuts:",
        modFeatures?.globalShortcuts,
    );

    if (modFeatures?.globalShortcuts?.enable) {
        const shortcuts = Object.entries(modFeatures.globalShortcuts);
        shortcuts.forEach((shortcut) => {
            if (shortcut[0] === "enable") return;

            if (shortcut[1] && isAccelerator(shortcut[1])) {
                electron_1.globalShortcut.register(shortcut[1], () => {
                    const actions = shortcut[0].split(" ");
                    actions.forEach((action) => {
                        sendPlayerAction(
                            mainWindow,
                            playerActions_js_1.PlayerActions[action],
                        );
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

    electron_1.ipcMain.on(
        events_js_1.Events.DOWNLOAD_CURRENT_TRACK,
        async (event, trackId) => {
            let callback = (progressRenderer, progressWindow) => {
                sendProgressBarChange(
                    window,
                    "trackDownloadCurrent",
                    progressRenderer * 100,
                );
                window.setProgressBar(progressWindow);
            };

            eventsLogger.info(
                "Event received",
                events_js_1.Events.DOWNLOAD_CURRENT_TRACK,
            );
            await trackDownloader.downloadSingleTrack(trackId, throttle(callback, PROGRESS_BAR_THROTTLE_MS));
        },
    );

    electron_1.ipcMain.on(
        events_js_1.Events.DOWNLOAD_TRACK,
        async (event, trackId, trackName='') => {

            sendBasicToastCreate(window, `trackDownload|${trackId}`, trackName ? 'Загрузка трека: ' + trackName : 'Загрузка трека...', false);

            let callback = (progressRenderer, progressWindow) => {
                sendProgressBarChange(window, `trackDownload|${trackId}`, progressRenderer * 100);
                window.setProgressBar(progressWindow);
            };

            eventsLogger.info("Event received", events_js_1.Events.DOWNLOAD_TRACK);
            await trackDownloader.downloadSingleTrack(trackId, throttle(callback, PROGRESS_BAR_THROTTLE_MS));
            setTimeout(()=> sendBasicToastDismiss(window, `trackDownload|${trackId}`), 2000);
        },
    );

    electron_1.ipcMain.on(
        events_js_1.Events.DOWNLOAD_TRACKS,
        async (event, trackIds, dirType=undefined, dirName=undefined) => {

            const hash = crypto.createHash('md5').update([dirType, ...trackIds].join('|')).digest('hex');

            let message = 'Загрузка треков...';
            if (dirName) {
                switch (dirType) {
                    case 'album':
                        message = dirName ? `Загрузка альбома: ${dirName}` : 'Загрузка альбома...';
                        break;
                    case 'playlist':
                        message = dirName ? `Загрузка плейлиста: ${dirName}` : 'Загрузка плейлиста...';
                        break;
                    case 'single':
                        message = dirName ? `Загрузка сингла: ${dirName}` : 'Загрузка сингла...';
                        break;
                    case 'podcast':
                        message = dirName ? `Загрузка подкаста: ${dirName}` : 'Загрузка подкаста...';
                        break;
                    case 'audiobook':
                        message = dirName ? `Загрузка аудиокниги: ${dirName}` : 'Загрузка аудиокниги...';
                        break;
                    default:
                        message = dirName ? `Загрузка треков: ${dirName}` : 'Загрузка треков...';
                }
            }

            sendBasicToastCreate(window, `trackDownload|${hash}`, message, false);

            let callback = (progressRenderer, progressWindow) => {
                sendProgressBarChange(window, `trackDownload|${hash}`, progressRenderer * 100);
                window.setProgressBar(progressWindow);
            };

            eventsLogger.info("Event received", events_js_1.Events.DOWNLOAD_TRACKS);
            try {
                await trackDownloader.downloadMultipleTracks(trackIds, dirName, throttle(callback, PROGRESS_BAR_THROTTLE_MS));
            } catch (e) {
                eventsLogger.error("Error downloading multiple tracks:", e, e.stack);
                setTimeout(()=> sendBasicToastDismiss(window, `trackDownload|${hash}`), 2000);
            }
            setTimeout(()=> sendBasicToastDismiss(window, `trackDownload|${hash}`), 2000);
        },
    );

    electron_1.app.on("will-quit", () => {
        electron_1.globalShortcut.unregisterAll();
    });

    electron_1.app.on("child-process-gone", (event, { type, reason }) => {
        if (type === "GPU")
            mainWindow?.webContents.send(events_js_1.Events.GPU_STALL, reason);
    });

    electron_1.ipcMain.on(events_js_1.Events.APPLICATION_RESTART, () => {
        eventsLogger.info(
            "Event received",
            events_js_1.Events.APPLICATION_RESTART,
        );
        electron_1.app.relaunch();
        electron_1.app.exit();
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_MINIMIZE, () => {
        eventsLogger.info("Event received", events_js_1.Events.WINDOW_MINIMIZE);
        (0, minimize_js_1.minimize)(window);
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_MAXIMIZE, () => {
        eventsLogger.info("Event received", events_js_1.Events.WINDOW_MAXIMIZE);
        (0, toggleMaximize_js_1.toggleMaximize)(window);
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_CLOSE, () => {
        eventsLogger.info("Event received", events_js_1.Events.WINDOW_CLOSE);
        if (
            [
                platform_js_1.Platform.WINDOWS,
                platform_js_1.Platform.LINUX,
            ].includes(deviceInfo_js_1.devicePlatform)
        ) {
            if (store_js_1.getModFeatures()?.windowBehavior?.minimizeToTrayOnWindowClose ?? state_js_1.state.player.isPlaying) {
                (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(
                    window,
                    false,
                );
            } else {
                electron_1.app.quit();
            }
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
            eventsLogger.info(
                "Event received",
                events_js_1.Events.APPLICATION_READY,
            );
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
                        exports.sendPlayerAction(
                            window,
                            playerActions_js_1.PlayerActions.TOGGLE_PLAY,
                        );
                    }
                }, 4000);
            }

            const version = electron_1.app.getVersion();
            const releaseNotes = await (0,
            loadReleaseNotes_js_1.loadReleaseNotes)(language);
            if (!releaseNotes) {
                return;
            }
            const {
                [`${i18nKeys_js_1.KEY_DESKTOP_RELEASE_NOTES_DEFAULT}`]:
                    defaultReleaseNote,
                ...otherNotes
            } = releaseNotes;
            let translationsReleaseNotes = (0,
            removeNewerReleaseNotes_js_1.removeNewerReleaseNotes)(
                otherNotes,
                version,
            );
            const sortedDescReleaseNotesKeys = (0,
            getSortedDescReleaseNotesKeys_js_1.getSortedDescReleaseNotesKeys)(
                translationsReleaseNotes,
            );
            const latestVersion = sortedDescReleaseNotesKeys[0];
            if (!latestVersion) {
                return;
            }
            const extractedVersion = (0,
            getSortedDescReleaseNotesKeys_js_1.extractVersion)(latestVersion);
            if (
                (0, valid_js_1.default)(extractedVersion) &&
                (0, valid_js_1.default)(version) &&
                (0, gt_js_1.default)(version, extractedVersion) &&
                Array.isArray(defaultReleaseNote)
            ) {
                const dateString = `<date>${(0, formatters_js_1.formatDate)({
                    date: config_js_1.config.buildInfo.BUILD_TIME,
                    options: (0,
                    dateToDDMonthYYYYProps_js_1.dateToDDMonthYYYYProps)(),
                    language,
                })}</date>\n`;
                const dateAST = (0, stringToAST_js_1.stringToAST)(dateString);
                translationsReleaseNotes = {
                    ...translationsReleaseNotes,
                    [`${i18nKeys_js_1.RELEASE_NOTES_KEY_PREFIX}${version}`]: [
                        ...dateAST,
                        ...defaultReleaseNote,
                    ],
                };
                sortedDescReleaseNotesKeys.unshift(
                    `${i18nKeys_js_1.RELEASE_NOTES_KEY_PREFIX}${version}`,
                );
            }
            (0, exports.sendLoadReleaseNotes)({
                    window,
                needToShowReleaseNotes: (0,
                store_js_1.needToShowReleaseNotes)(),
                sortedDescReleaseNotesKeys,
                translationsReleaseNotes,
            });
        },
    );
    electron_1.ipcMain.on(
        events_js_1.Events.APPLICATION_THEME,
        (event, backgroundColor) => {
            eventsLogger.info(
                "Event received",
                events_js_1.Events.APPLICATION_THEME,
            );
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
    electron_1.ipcMain.on(
        events_js_1.Events.REPOSITORY_META_UPDATED,
        (event) => {
            const [, setRepositoryMetaUpdatedAtStoreValue] =
                store_js_1.repositoryMetaUpdatedAt;
            eventsLogger.info(
                "Event received",
                events_js_1.Events.REPOSITORY_META_UPDATED,
            );
            setRepositoryMetaUpdatedAtStoreValue(Date.now());
        },
    );
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
                (store_js_1.getModFeatures()?.windowBehavior
                    ?.preventDisplaySleep ??
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

            let callback = (progressRenderer, progressWindow) => {
                sendProgressBarChange(
                    window,
                    "modUpdateToast",
                    progressRenderer * 100,
                );
                window.setProgressBar(progressWindow);
            };
            await (0, modUpdater_js_1.getModUpdater)().onUpdateDownload(
                throttle(callback, PROGRESS_BAR_THROTTLE_MS),
            );
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

    electron_1.ipcMain.on(
        events_js_1.Events.NATIVE_STORE_SET,
        (event, key, value) => {
            eventsLogger.info(
                `Event received`,
                events_js_1.Events.NATIVE_STORE_SET,
                key,
                value,
            );
            store_js_1.set(key, value);
            if (key === "modFeatures.globalShortcuts.enable") {
                updateGlobalShortcuts();
            }
        },
    );

    electron_1.ipcMain.handle(
        events_js_1.Events.GET_PASSPORT_LOGIN,
        async () => {
            eventsLogger.info(
                "Event handle",
                events_js_1.Events.GET_PASSPORT_LOGIN,
            );
            try {
                const cookie =
                    await electron_1.session.defaultSession.cookies.get({
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
        },
    );
    electron_1.ipcMain.handle(events_js_1.Events.GET_YANDEX_UID, async () => {
        eventsLogger.info("Event handle", events_js_1.Events.GET_YANDEX_UID);
        try {
            const cookie = await electron_1.session.defaultSession.cookies.get({
                name: cookies_js_1.YANDEX_ID,
                domain: cookies_js_1.PASSPORT_LOGIN_DOMAIN,
            });
            return cookie?.[0]?.value;
        } catch (error) {
            eventsLogger.error(
                `${events_js_1.Events.GET_YANDEX_UID} event failed.`,
                error,
            );
            return;
        }
    });
};
exports.handleApplicationEvents = handleApplicationEvents;
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
    scrobbleManager_js_1.scrobblerManager
        .getScrobblers()
        .forEach((scrobbler) => {
            scrobbler.login();
        });
});
electron_1.ipcMain.handle("scrobble-logout", () => {
    scrobbleManager_js_1.scrobblerManager
        .getScrobblers()
        .forEach((scrobbler) => {
            scrobbler.logout();
        });
});
electron_1.ipcMain.handle("scrobble-lastfm-login", () => {
    scrobbleManager_js_1.scrobblerManager.getScrobblerByType("Last.fm").login();
});

electron_1.ipcMain.handle("scrobble-lastfm-logout", () => {
    scrobbleManager_js_1.scrobblerManager
        .getScrobblerByType("Last.fm")
        .logout();
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

const sendNativeStoreUpdate = (key, value, window = undefined) => {
    (window ?? mainWindow)?.webContents.send(
        events_js_1.Events.NATIVE_STORE_UPDATE,
        key,
        value,
    );
    if (window ?? mainWindow) {
        eventsLogger.info(
            "Event send",
            events_js_1.Events.NATIVE_STORE_UPDATE,
            key,
            value,
        );
    } else {
        eventsLogger.warn(
            "Event not send, window is undefined",
            events_js_1.Events.NATIVE_STORE_UPDATE,
            key,
            value,
        );
    }
};
exports.sendNativeStoreUpdate = sendNativeStoreUpdate;

const sendLastFmUserInfoUpdated = (window = mainWindow, userinfo) => {
    window.webContents.send(
        events_js_1.Events.LASTFM_USERINFO_UPDATE,
        userinfo,
    );
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
const sendLoadReleaseNotes = ({
    window,
    needToShowReleaseNotes,
    sortedDescReleaseNotesKeys,
    translationsReleaseNotes,
}) => {
    window.webContents.send(events_js_1.Events.LOAD_RELEASE_NOTES, {
        needToShowReleaseNotes,
        sortedDescReleaseNotesKeys,
        translationsReleaseNotes,
    });
    eventsLogger.info("Event sent", events_js_1.Events.LOAD_RELEASE_NOTES);
};
exports.sendLoadReleaseNotes = sendLoadReleaseNotes;
const sendUpdateAvailable = (window, version) => {
    window.webContents.send(events_js_1.Events.UPDATE_AVAILABLE, version);
    eventsLogger.info(
        "Event sent",
        events_js_1.Events.UPDATE_AVAILABLE,
        version,
    );
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
const sendBasicToastCreate = (window, toastID, message, dismissable) => {
    window.webContents.send(
        events_js_1.Events.BASIC_TOAST_CREATE,
        toastID,
        message,
        dismissable,
        Date.now(),
    );
    eventsLogger.info(
        "Event sent",
        events_js_1.Events.BASIC_TOAST_CREATE,
        toastID,
        message,
    );
};
const sendBasicToastDismiss = (window, toastID) => {
    window.webContents.send(
        events_js_1.Events.BASIC_TOAST_DISMISS,
        toastID,
        Date.now(),
    );
    eventsLogger.info(
        "Event sent",
        events_js_1.Events.BASIC_TOAST_DISMISS,
        toastID,
    );
};
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
    eventsLogger.info(
        "Event sent",
        events_js_1.Events.REFRESH_APPLICATION_DATA,
    );
};
exports.sendRefreshApplicationData = sendRefreshApplicationData;
const sendPlayerAction = (window, action) => {
    window.webContents.send(
        events_js_1.Events.PLAYER_ACTION,
        action,
        Date.now(),
    );
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
