"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrobblerManager = void 0;
exports.handlePlayingStateEvent = handlePlayingStateEvent;
const ScrobblerManager_1 = require("./ScrobblerManager");
const LastFmScrobbler_1 = require("./services/lastfm/LastFmScrobbler");
const scrobblerManager = new ScrobblerManager_1.ScrobblerManager();
const config_1 = require("../../config");
config_1.config
exports.scrobblerManager = scrobblerManager;
scrobblerManager.registerScrobbler(
new LastFmScrobbler_1.LastFmScrobbler(config_1.config.modification.lastfm.apikey, config_1.config.modification.lastfm.sharedSecret, config_1.config.modification.lastfm.baseUrl));
/**
 * Handle a playing state event from Yandex Music
 *
 * @param playingState The current playing state
 */
function handlePlayingStateEvent(playingState) {
    scrobblerManager.handlePlayingState(playingState);
}
