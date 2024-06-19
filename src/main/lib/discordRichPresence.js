"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSuspensionController = void 0;
const Logger_js_1 = require("../packages/logger/Logger.js");
const DiscordRPC = require("discord-rpc");
const discordRichPresenceLogger = new Logger_js_1.Logger("DiscordRichPresence");

// Set this to your Client ID.
const clientId = "1124055337234858005";
const GITHUB_LINK = "https://github.com/TheKing-OfTime/YandexMusicModClient";
const IS_DEEPLINKS_ROLLEDOUT = false;

let rpc = undefined;
let isReady = false;
let isListeningType = false;
let timeoutId = undefined;

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
    isReady = false;
    discordRichPresenceLogger.info("Error");
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

function silenceTypeCheck(activity) {
  isListeningType = activity.type === 2;
}

async function setActivity(
  state,
  trackName = "unknown",
  trackArtist = "unknown",
  trackAlbum = undefined,
  trackAlbumAvatar = "logo",
  trackProgress = undefined,
  trackDurationMs = undefined,
  deepShareTrackUrl = undefined,
  webShareTrackUrl = undefined,
) {
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
    details: trackName,
    state: trackArtist,
    largeImageKey: trackAlbumAvatar,
    largeImageText: trackAlbum,
    smallImageKey: stateKey,
    smallImageText: stateText,
    startTimestamp,
    endTimestamp,
    instance: false,
  };

  if (deepShareTrackUrl || webShareTrackUrl) {
    if (!IS_DEEPLINKS_ROLLEDOUT) {
      activityObject.buttons = [
        {
          label: "Listen in Yandex Music Desktop",
          url: deepShareTrackUrl,
        },
        {
          label: "Listen in Yandex Music Web",
          url: webShareTrackUrl,
        },
      ];
    } else {
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
    }
  }

  rpc
    .setActivity(activityObject)
    .then((activity) => silenceTypeCheck(activity))
    .catch((e) => discordRichPresenceLogger.error(e));

  return true;
}

const tryConnect = () => {
  return rpc.login({ clientId }).catch((e) => {
    discordRichPresenceLogger.error(e);
  });
};

const tryReconnect = () => {
  initRPC();
  return rpc.login({ clientId }).catch((e) => {
    discordRichPresenceLogger.error(e);
  });
};

tryConnect();

const getArtist = (artistsArray) => {
  let artistsLabel = "by " + artistsArray[0].name;
  artistsArray.shift();
  artistsArray.forEach((artist) => {
    artistsLabel += ", " + artist.name;
  });
  return artistsLabel;
};

const discordRichPresence = (playingState) => {
  let title = playingState.track?.title;
  if (playingState.track.version) {
    title = playingState.track.title + ` (${playingState.track.version})`;
  }
  const artist = getArtist(playingState.track.artists);

  let album = playingState.track.albums?.[0]?.title;

  if (title === album) {
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
