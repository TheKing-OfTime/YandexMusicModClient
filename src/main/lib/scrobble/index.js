"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrobblerManager = void 0;
exports.handlePlayingStateEvent = handlePlayingStateEvent;
const ScrobblerManager_1 = require("./ScrobblerManager");
const LastFmScrobbler_1 = require("./services/lastfm/LastFmScrobbler");
const scrobblerManager = new ScrobblerManager_1.ScrobblerManager();
exports.scrobblerManager = scrobblerManager;
scrobblerManager.registerScrobbler(
// TODO: Move to config, toolset or environment variables?
new LastFmScrobbler_1.LastFmScrobbler("ebd53b66afc398d291226adc17b1c5e1", "cd1c5e25adabf68e3621679a3943bb07", "https://ws.audioscrobbler.com/2.0"));
/**
 * Handle a playing state event from Yandex Music
 *
 * @param playingState The current playing state
 */
function handlePlayingStateEvent(playingState) {
    scrobblerManager.handlePlayingState(playingState);
}
