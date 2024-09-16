"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_js_1 = require("../packages/logger/Logger.js");
const store_js_1 = require("./store.js");
const DiscordRPC = require("discord-rpc");
const discordRichPresenceLogger = new Logger_js_1.Logger("DiscordRichPresence");

const settings = store_js_1.getModFeatures()?.discordRPC;

const clientId = settings?.applicationIDForRPC ?? "1124055337234858005";
const GITHUB_LINK = "https://github.com/TheKing-OfTime/YandexMusicModClient";
const IS_DEEPLINKS_ROLLEDOUT = settings?.overrideDeepLinksExperiment ?? false;

let rpc = undefined;
let isReady = false;
let isListeningType = true;
let timeoutId = undefined;

let previousActivity = undefined;

const initRPC = () => {
  rpc = new DiscordRPC.Client({ transport: "ipc" });
  isReady = false;
  isListeningType = false;

  rpc.on("ready", () => {
    isReady = true;
    discordRichPresenceLogger.info("Ready");
  });

  rpc.on("close", (e) => {
    isReady = false;
    discordRichPresenceLogger.info("Closed");
  });

  rpc.on("error", (e) => {
    if(e.name === 'Could not connect') {
      isReady = false;
    }
    discordRichPresenceLogger.info("Error", e.name);
  });
};

initRPC();

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

function serializeActivity(activity) {
  return JSON.stringify(activity);
}

function compareActivities(newActivity) {
  return serializeActivity(newActivity) === serializeActivity(previousActivity);
}

async function setActivity(
  state,
  trackName = "unknown",
  trackArtist = undefined,
  trackAlbum = undefined,
  trackAlbumAvatar = "logo",
  trackProgress = undefined,
  trackDurationMs = undefined,
  deepShareTrackUrl = undefined,
  webShareTrackUrl = undefined,
) {
  if (!(settings?.enable ?? true)) return;
  if (!rpc || !isReady) {
    if (rpc) {
      const connected = await tryReconnect();
      if (!connected) {
        return false;
      }
    } else {
      return false;
    }
  }

  let startTimestamp = Date.now() - trackProgress * 1000;
  let endTimestamp = startTimestamp + trackDurationMs;
  let stateKey = states[state]?.icon;
  let stateText = states[state]?.name;

  if (!states[state]) {
    stateKey = states.unknown?.icon;
    stateText = states.unknown?.name;
  }

  if (state !== "playing") {
    startTimestamp = undefined;
  }
  if (!isListeningType || state !== "playing") {
    endTimestamp = undefined;
  }

  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = undefined;
  }

  if (state === "paused") {
    timeoutId = setTimeout(
      () => {
        rpc.clearActivity();
        timeoutId = undefined;
      },
      15 * 60 * 1000,
    );
  }

  let activityObject = {
    type: 2,
    details: string2Discord(trackName),
    state: string2Discord(trackArtist),
    largeImageKey: trackAlbumAvatar,
    largeImageText: string2Discord(trackAlbum),
    smallImageKey: stateKey,
    smallImageText: stateText,
    startTimestamp,
    endTimestamp,
    instance: false,
  };

  if (
    (deepShareTrackUrl || webShareTrackUrl) &&
    (settings?.showButtons ?? true)
  ) {
    if (!IS_DEEPLINKS_ROLLEDOUT) {
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
    } else if (settings?.showGitHubButton ?? true) {
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

  if (compareActivities(activityObject)) return true;

  previousActivity = activityObject;

  rpc
    .setActivity(activityObject)
    .then((activity) => silentTypeCheck(activity))
    .catch((e) => {
      discordRichPresenceLogger.error(e);
      //console.log(e.name);
      //isReady = false;
    });

  return true;
}

const tryConnect = () => {
  rpc.clearActivity();
  return rpc.login({ clientId }).catch((e) => {
    discordRichPresenceLogger.error(e);
  });
};

const tryReconnect = () => {
  rpc.clearActivity();
  rpc = null;
  initRPC();
  return rpc.login({ clientId }).catch((e) => {
    discordRichPresenceLogger.error(e);
  });
};

tryConnect();

const getArtist = (artistsArray) => {
  if (!artistsArray?.[0]?.name) return undefined;
  let artistsLabel = "by " + artistsArray[0].name;
  artistsArray.shift();
  artistsArray.forEach((artist) => {
    artistsLabel += ", " + artist.name;
  });
  return artistsLabel;
};

const discordRichPresence = (playingState) => {
  if (playingState.status.startsWith("loading")) {
    playingState.status = "playing";
  }
  let title = playingState.track?.title;
  if (playingState.track.version) {
    title = playingState.track.title + ` (${playingState.track.version})`;
  }

  const artist = getArtist(playingState.track?.artists);

  let album = playingState.track.albums?.[0]?.title;

  if (title === album || album === undefined) {
    album = undefined;
  } else if (isListeningType) {
    album = "on " + album;
  }

  let albumArt = undefined;

  if (playingState.track.coverUri)
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

  setActivity(
    playingState.status,
    title,
    artist,
    album,
    albumArt,
    playingState.progress,
    playingState.track.durationMs,
    deepShareTrackUrl,
    webShareTrackUrl,
  )
    .then((activityStatus) => {
      if (activityStatus) {
        discordRichPresenceLogger.info(
          "Rich Presence set to: " + playingState.status,
        );
      } else {
        discordRichPresenceLogger.warn(
          "Rich Presence set failed: RPC connection failed.",
        );
      }
    })
    .catch((e) =>
      discordRichPresenceLogger.error("Rich Presence set failed: " + e),
    );
};
exports.discordRichPresence = discordRichPresence;
