"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSuspensionController = void 0;
const Logger_js_1 = require("../packages/logger/Logger.js");
const DiscordRPC = require("discord-rpc");
const discordRichPresenceLogger = new Logger_js_1.Logger("DiscordRichPresence");

// Set this to your Client ID.
const clientId = "1124055337234858005";

const rpc = new DiscordRPC.Client({ transport: "ipc" });
let isReady = false;

const states = {
  playing: { icon: "playing", name: "Playing" },
  paused: { icon: "paused", name: "Paused" },
  stopped: { icon: "paused", name: "Stopped" },
  unknown: { icon: "logo", name: "Unknown" },
  default: { icon: "logo", name: "Yandex Music" },
};

async function setActivity(
  state,
  trackName = "unknown",
  trackArtist = "unknown",
  trackAlbumAvatar = "logo",
  trackProgress = undefined,
  trackDurationMs = undefined,
) {
  if (!rpc || !isReady) {
    return;
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

  endTimestamp = undefined;

  rpc
    .setActivity({
      type: 2,
      details: trackName,
      state: trackArtist,
      largeImageKey: trackAlbumAvatar,
      largeImageText: "Yandex Music",
      smallImageKey: stateKey,
      smallImageText: stateText,
      startTimestamp,
      endTimestamp,
      instance: false,
    })
    .catch((e) => discordRichPresenceLogger.error(e));
}

rpc.on("ready", () => {
  isReady = true;
  discordRichPresenceLogger.info("Ready");
});

//rpc.on("close");

rpc.login({ clientId }).catch((e) => {
  discordRichPresenceLogger.error(e);
});

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

  const albumArt = `https://${playingState.track.coverUri}`.replace(
    "%%",
    "400x400",
  );

  setActivity(
    playingState.status,
    title,
    artist,
    albumArt,
    playingState.progress,
    playingState.track.durationMs,
  );
  discordRichPresenceLogger.info(
    "Rich Presence set to: " + playingState.status,
  );
};
exports.discordRichPresence = discordRichPresence;
