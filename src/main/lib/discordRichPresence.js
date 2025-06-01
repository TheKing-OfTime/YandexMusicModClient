"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_js_1 = require("../packages/logger/Logger.js");
const store_js_1 = require("./store.js");
const DiscordRPC = require("discord-rpc");
const discordRichPresenceLogger = new Logger_js_1.Logger("DiscordRichPresence");

const settings = () => store_js_1.getModFeatures()?.discordRPC;

const clientId = settings()?.applicationIDForRPC ?? "1124055337234858005";
const GITHUB_LINK = "https://github.com/TheKing-OfTime/YandexMusicModClient";
const SET_ACTIVITY_TIMEOUT_MS = 1500;
const RECONNECT_INTERVAL_MS = 5000;

let rpc = undefined;
let isReady = false;
let isReconnecting = false;
let isListeningType = true;

let updateTimeoutId = undefined;
let afkTimeoutId = undefined;
let reconnectTimeoutId = undefined;

let lastPlayingState = undefined;
let lastActivity = undefined;

const tryConnect = async () => {
    try {
        discordRichPresenceLogger.info("Connecting to Discord...");
        await rpc.connect(clientId);
        return true;
    } catch (e) {
        discordRichPresenceLogger.error("Connect error:", e);
        return false;
    }
};

function startReconnectLoop() {
    if (isReconnecting) {
        return;
    }
    isReconnecting = true;

    let n = 0;
    discordRichPresenceLogger.info("Reconnecting");
    const reconnectAttempt = async () => {
        rpc && rpc.destroy().catch(() => { });
        rpc = null;
        initRPC();

        let connected = false;
        try {
            connected = await tryConnect();
        } catch (e) {
            discordRichPresenceLogger.error("Reconnect error:", e);
            connected = false;
        }
        if (!connected) {
            discordRichPresenceLogger.info(`Reconnect failed (#${++n})`);
            reconnectTimeoutId = setTimeout(reconnectAttempt, RECONNECT_INTERVAL_MS);
        } else {
            discordRichPresenceLogger.info("Reconnect succeeded");
            clearTimeout(reconnectTimeoutId);
            reconnectTimeoutId = undefined;
            isReconnecting = false;
        }
    };

    reconnectAttempt();
}

const initRPC = () => {
    rpc = new DiscordRPC.Client({ transport: "ipc" });
    isReady = false;
    isListeningType = false;

    rpc.on("ready", () => {
        discordRichPresenceLogger.info("Ready");
    });

    rpc.on("connected", () => {
        isReady = true;
        discordRichPresenceLogger.info("Connected");
    });

    rpc.on("disconnected", () => {
        isReady = false;
        discordRichPresenceLogger.info("Disconnected");;
        startReconnectLoop();
    });

    rpc.on("error", (e) => {
        if (e.name === "Could not connect") {
            isReady = false;
        }
        discordRichPresenceLogger.error("Error", e);
    });
};

const states = {
    playing: { icon: "playing", name: "Playing" },
    paused: { icon: "paused", name: "Paused" },
    stopped: { icon: "paused", name: "Stopped" },
    unknown: { icon: "logo", name: "Unknown" },
    default: { icon: "logo", name: "Yandex Music" },
};

function silentTypeCheck(activity) {
    isListeningType = activity.type === 2;
}

function string2Discord(string) {
    if (!string) return string;
    if (string.length <= 1) {
        string += "ㅤ";
    }
    if (string.length > 128) {
        string = string.substring(0, 127);
        string += "…";
    }
    return string;
}

function removeTimestampsFromActivity(activity) {
    let copyActivity = JSON.parse(JSON.stringify(activity));
    copyActivity = copyActivity.startTimestamp
        ? (copyActivity.startTimestamp = 0)
        : copyActivity;
    copyActivity = copyActivity.endTimestamp
        ? (copyActivity.endTimestamp = 0)
        : copyActivity;
    return copyActivity;
}

function serializeActivity(activity) {
    return JSON.stringify(activity);
}

// Проверка значительно ли отличаются временные метки. Нужно для оценки целесообразности отправки нового SET_ACTIVITY
function isTimestampsDifferent(activityA, activityB) {
    const diff =
        Math.abs(
            (activityA.startTimestamp ?? 0) - (activityB.startTimestamp ?? 0),
        ) + Math.abs((activityA.endTimestamp ?? 0) - (activityB.endTimestamp ?? 0));
    discordRichPresenceLogger.info(
        diff,
        (activityA.startTimestamp ?? 0) - (activityB.startTimestamp ?? 0),
        (activityA.endTimestamp ?? 0) - (activityB.endTimestamp ?? 0),
    );
    return diff > 2000;
}

function compareActivities(newActivity) {
    if (!lastActivity) return false;
    return (
        serializeActivity(removeTimestampsFromActivity(newActivity)) ===
        serializeActivity(removeTimestampsFromActivity(lastActivity)) &&
        !isTimestampsDifferent(newActivity, lastActivity)
    );
}

const getArtist = (artistsArray) => {
    if (!artistsArray?.[0]?.name) return undefined;
    let artistsLabel = "by " + artistsArray[0].name;
    artistsArray.shift();
    artistsArray.forEach((artist) => {
        artistsLabel += ", " + artist.name;
    });
    return artistsLabel;
};

const fromYnisonState = (ynisonState) => {
    if (!settings().fromYnison) return;
    let partialPlayerState = {};
    let currentTrackData =
        ynisonState?.rawData?.player_state?.player_queue?.playable_list[
        ynisonState?.rawData?.player_state?.player_queue?.current_playable_index
        ];
    if (!currentTrackData) return;
    partialPlayerState.track = {
        title: currentTrackData?.title,
        coverUri: currentTrackData?.cover_url_optional,
        id: currentTrackData?.playable_id,
        ...(currentTrackData.album_id_optional
            ? { albums: [{ id: currentTrackData.album_id_optional }] }
            : undefined),
        durationMs: parseInt(
            ynisonState?.rawData?.player_state?.status?.duration_ms,
        ),
    };
    partialPlayerState.progress = parseInt(
        ynisonState?.rawData?.player_state?.status?.progress_ms,
    );
    partialPlayerState.status = ynisonState?.rawData?.player_state?.status?.paused
        ? "paused"
        : "playing";

    partialPlayerState.devices = ynisonState?.rawData?.devices;

    let currentDevice = undefined;

    ynisonState?.rawData?.devices.forEach((device) => {
        if (
            device?.info?.device_id &&
            device?.info?.device_id ===
            ynisonState?.rawData?.active_device_id_optional
        )
            currentDevice = device;
    });

    partialPlayerState.currentDevice = currentDevice;

    if (partialPlayerState.progress && partialPlayerState.progress !== 0)
        partialPlayerState.progress = Math.round(
            partialPlayerState.progress / 1000,
        );

    discordRichPresence(partialPlayerState);
};

function updateActivity(activityObject) {
    rpc.setActivity(activityObject).then((activity) => {
        silentTypeCheck(activity);
    }).catch((e) => {
        discordRichPresenceLogger.error("sendCurrentActivity setActivity error:", e);
    });
}

function sendCurrentActivity() {
    if (!(settings()?.enable ?? true)) {
        if (lastActivity) {
            rpc.clearActivity();
            lastActivity = undefined;
            rpc.destroy();
        }
        return;
    }
    if (!isReady || !rpc || !lastPlayingState) return;
    const activityObject = buildActivityObject(lastPlayingState);

    if (afkTimeoutId) {
        clearTimeout(afkTimeoutId);
        afkTimeoutId = undefined;
    }

    afkTimeoutId = setTimeout(() => {
        rpc.clearActivity();
        afkTimeoutId = undefined;
    }, (settings()?.afkTimeout ?? 15) * 60 * 1000);

    if (activityObject && !compareActivities(activityObject)) {
        lastActivity = activityObject;

        if (updateTimeoutId) {
            clearTimeout(updateTimeoutId);
            updateTimeoutId = undefined;
        }

        updateTimeoutId = setTimeout(() => {
            updateActivity(activityObject);
        }, SET_ACTIVITY_TIMEOUT_MS);
    }
}

function buildActivityObject(playingState) {
    if (!playingState.track) return undefined;
    if (playingState.status.startsWith("loading")) return undefined;

    let title = playingState.track?.title;
    if (playingState.track?.version) {
        title = playingState.track.title + ` (${playingState.track.version})`;
    }

    const artist = getArtist(playingState.track?.artists?.slice());

    let album = playingState.track?.albums?.[0]?.title;
    if (title === album || album === undefined) {
        album = undefined;
    } else if (isListeningType) {
        album = "on " + album;
    }

    let albumArt = undefined;
    if (playingState.track?.coverUri)
        albumArt = `https://${playingState.track.coverUri}`.replace(
            "%%",
            "400x400",
        );

    const shareTrackPath = `album/${playingState.track.albums?.[0]?.id}/track/${playingState.track.id}`;
    const deepShareTrackUrl = "yandexmusic://" + shareTrackPath;
    const webShareTrackUrl =
        "https://music.yandex.ru/" +
        shareTrackPath +
        "?utm_source=discord&utm_medium=rich_presence_click";

    let startTimestamp = Math.round(Date.now() - (playingState.progress ?? 0) * 1000);
    let endTimestamp = startTimestamp + (playingState.track.durationMs ?? 0);

    let stateKey = states[playingState.status]?.icon;
    let stateText = states[playingState.status]?.name;
    stateText += " on " + (playingState.currentDevice?.info?.type ?? "DESKTOP");

    if (!states[playingState.status]) {
        stateKey = states.unknown?.icon;
        stateText = states.unknown?.name;
    }

    if (playingState.status !== "playing") {
        startTimestamp = undefined;
    }

    if (!isListeningType || playingState.status !== "playing") {
        endTimestamp = undefined;
    }

    let activityObject = {
        type: 2,
        details: string2Discord(title),
        state: string2Discord(artist),
        largeImageKey: albumArt,
        startTimestamp,
        endTimestamp,
        instance: false,
    };

    if (settings()?.showSmallIcon ?? true) {
        activityObject.smallImageKey = stateKey;
        activityObject.smallImageText = stateText;
    }

    if (settings()?.showAlbum ?? true) {
        activityObject.largeImageText = string2Discord(album);
    }

    if (
        (deepShareTrackUrl || webShareTrackUrl) &&
        (settings()?.showButtons ?? true)
    ) {
        if (!(settings()?.overrideDeepLinksExperiment ?? false)) {
            activityObject.buttons = [
                {
                    label: "Listen in Yandex Music App",
                    url: deepShareTrackUrl,
                },
                {
                    label: "Listen in Yandex Music Web",
                    url: webShareTrackUrl,
                },
            ];
        } else if (settings()?.showGitHubButton ?? true) {
            activityObject.buttons = [
                {
                    label: "Listen on Yandex Music",
                    url: webShareTrackUrl,
                },
                {
                    label: "Install from GitHub",
                    url: GITHUB_LINK,
                },
            ];
        } else {
            activityObject.buttons = [
                {
                    label: "Listen on Yandex Music",
                    url: webShareTrackUrl,
                },
            ];
        }
    }

    return activityObject;
}

const discordRichPresence = (playingState) => {
    lastPlayingState = playingState;

    if (!rpc) {
        initRPC();
        tryConnect();
    } else {
        discordRichPresenceLogger.info("Sending current activity:", playingState);
        sendCurrentActivity();
    }
};

exports.discordRichPresence = discordRichPresence;
exports.fromYnisonState = fromYnisonState;
