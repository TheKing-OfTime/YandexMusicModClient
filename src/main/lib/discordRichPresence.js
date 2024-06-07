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
  unknown: { icon: "paused", name: "Unknown" },
};

async function setActivity(
  state,
  trackName = "unknown",
  trackArtist = "unknown",
  trackAlbumAvatar = "logo",
  trackDuration = undefined,
) {
  if (!rpc || !isReady) {
    return;
  }

  let startTimestamp = new Date();
  let stateKey = states[state]?.icon;
  let stateText = states[state]?.name;

  if (!states[state]) {
    stateKey = states.unknown?.icon;
    stateText = states.unknown?.name;
  }

  if (state !== "playing") {
    startTimestamp = undefined;
  }

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
      instance: false,
    })
    .catch((e) => discordRichPresenceLogger.error(e));
}

rpc.on("ready", () => {
  isReady = true;
  discordRichPresenceLogger.info("Ready");
});

rpc.login({ clientId }).catch((e) => {
  discordRichPresenceLogger.error(e);
});

const getArtist = (artistsArray) => {
  let artistsLabel = artistsArray[0].name;
  artistsArray.shift();
  artistsArray.forEach((artist) => {
    artistsLabel += ", " + artist.name;
  });
  return artistsLabel;
};

const discordRichPresence = (playingState) => {
  let title = playingState.track.title;
  if (playingState.track.version) {
    title = playingState.track.title + ` (${playingState.track.version})`;
  }
  const artist = getArtist(playingState.track.artists);

  const albumArt = `https://${playingState.track.coverUri}`.replace(
    "%%",
    "400x400",
  );

  setActivity(playingState.status, title, artist, albumArt);
  discordRichPresenceLogger.info(
    "Rich Presence set to: " + playingState.status,
  );
};
exports.discordRichPresence = discordRichPresence;
