"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastFmScrobbler = void 0;
const electron_1 = require("electron");
const Logger_1 = require("../../../../packages/logger/Logger");
const store_js_1 = require("../../../store");
const events_js_1 = require("../../../../events");
const electron_store_1 = require("electron-store");
const trackInfo_1 = require("./utils/trackInfo");
const LastFmApi_1 = require("./api/LastFmApi");
const scrobblerTypeEnum_1 = require("../../constants/scrobblerTypeEnum");
class LastFmScrobbler {
    /* #endregion */
    constructor(apiKey, sharedSecret, baseUrl) {
        this.type = scrobblerTypeEnum_1.ScrobblerTypeEnum.LastFm;
        this.logger = new Logger_1.Logger("LastFmScrobbler");
        this.store = new electron_store_1.default({
            name: "lastfm",
            encryptionKey: "lastfm-session-key",
        });
        this.SESSION_STORE_KEY = "session";
        /* #region Current track state */
        this.currentTrack = null;
        this.currentTrackStartTime = null;
        this.currentTrackPlayedTime = 0;
        this.API_KEY = apiKey;
        this.api = new LastFmApi_1.LastFmApi(this.API_KEY, sharedSecret, baseUrl, () => this.getStoredSession());
    }
    isEnabled() {
        let isLastFmEnabled = store_js_1.getModFeatures()?.scrobblers?.lastfm;
        return this.isLoggedIn() && isLastFmEnabled;
    }
    isLoggedIn() {
        const session = this.store.get(this.SESSION_STORE_KEY);
        return !!session && !!session.key;
    }
    async login() {
        const token = await this.api.getToken();
        const childWindow = new electron_1.BrowserWindow({
            width: 400,
            height: 400,
            titleBarStyle: 'hidden',
            ...(process.platform !== 'darwin' ? {
                titleBarOverlay: {
                    color: '#000',
                    symbolColor: '#fff',
                    height: 48,
                }
            } : {}),
            resizable: false,
            maximizable: false,
            minimizable: false,
        });
        childWindow.loadURL(`http://www.last.fm/api/auth/?api_key=${this.API_KEY}&token=${token}`);
        childWindow.webContents.on("dom-ready", () => {
            childWindow.webContents.insertCSS('.masthead { -webkit-app-region: drag } html, body { overflow-y: scroll; scrollbar-width: none; } body::-webkit-scrollbar { width: 0; height: 0; }')
            childWindow.webContents.executeJavaScript(`
            console.log("dom-ready triggered");
            if ( document.querySelector(".alert-success"))
                {
                    setTimeout(() => {
                        window.close();
                    }, 1000)
                };
            `);
        });
        childWindow.on("closed", async () => {
            await this.fetchAndStoreSession(token);
            events_js_1.sendLastFmUserInfoUpdated(undefined, await this.api.getUserInfo());
        });
    }
    async logout() {
        this.store.delete(this.SESSION_STORE_KEY);
        this.logger.info("Logged out");
        events_js_1.sendLastFmUserInfoUpdated(undefined, undefined);
    }
    handleEvent(playingState) {
        if (this.isTrackChanged(playingState.track)) {
            this.handleTrackChange(playingState);
        }
        else if (this.isPlaybackStateChanged(playingState)) {
            this.handlePlaybackStateChange(playingState);
        }
    }
    isTrackChanged(newTrack) {
        return this.currentTrack?.id !== newTrack.id;
    }
    handleTrackChange(playingState) {
        this.maybeScrobbleCurrentTrack();
        this.currentTrack = playingState.track;
        this.currentTrackStartTime = null;
        this.currentTrackPlayedTime = 0;
        if (playingState.isPlaying) {
            this.startTrackPlayback();
            void this.updateNowPlaying(playingState.track);
        }
    }
    isPlaybackStateChanged(playingState) {
        return (this.currentTrack?.id === playingState.track?.id &&
            (playingState.isPlaying
                ? this.currentTrackStartTime === null
                : this.currentTrackStartTime !== null));
    }
    handlePlaybackStateChange(playingState) {
        if (playingState.isPlaying) {
            this.startTrackPlayback();
        }
        else {
            this.pauseTrackPlayback();

            const isScrobbled = this.maybeScrobbleCurrentTrack();
            if (isScrobbled) {
                this.currentTrackPlayedTime = 0;
            }
        }
    }
    startTrackPlayback() {
        if (!this.currentTrack)
            return;
        this.currentTrackStartTime = Date.now();
    }
    pauseTrackPlayback() {
        if (!this.currentTrack || !this.currentTrackStartTime)
            return;
        this.currentTrackPlayedTime += Date.now() - this.currentTrackStartTime;
        this.currentTrackStartTime = null;
    }
    maybeScrobbleCurrentTrack() {
        if (!this.currentTrack)
            return false;

        const totalPlayedTime = this.calculateTotalPlayedTime();
        if (!this.isTrackEligibleForScrobble(this.currentTrack, totalPlayedTime))
            return false;
        
        void this.sendScrobble(this.currentTrack);
        return true;
    }
    calculateTotalPlayedTime() {
        let totalTime = this.currentTrackPlayedTime;
        if (this.currentTrackStartTime) {
            totalTime += Date.now() - this.currentTrackStartTime;
        }
        return totalTime;
    }
    /**
     * Checks if a track is eligible for scrobbling
     *
     * @see https://www.last.fm/api/scrobbling#when-is-a-scrobble-a-scrobble
     *
     * @param track The track to check
     * @param {number} playedTimeMs The total played time of the track
     * @returns {boolean} result of the eligibility check
     */
    isTrackEligibleForScrobble(track, playedTimeMs) {
        if (track.durationMs < LastFmScrobbler.MIN_TRACK_DURATION_MS) {
            this.logger.info("Track is too short to scrobble");
            return false;
        }
        const minPlayTimeMs = Math.min(track.durationMs / 2, LastFmScrobbler.MAX_SCROBBLE_TIME_MS);
        if (playedTimeMs < minPlayTimeMs) {
            this.logger.info("Track is not played long enough to scrobble");
            return false;
        }
        return true;
    }
    async updateNowPlaying(track) {
        this.logger.info("Updating now playing: ", track.title);
        try {
            await this.api.updateNowPlaying((0, trackInfo_1.getTrackInfo)(track));
        }
        catch (error) {
            this.logger.error(`Failed to update now playing for track: "${track.title}":`, error);
        }
    }
    async sendScrobble(track) {
        this.logger.info("Scrobbling track:", track.title);
        try {
            await this.api.scrobble((0, trackInfo_1.getTrackInfo)(track));
        }
        catch (error) {
            this.logger.error(`Failed to send scrobble for track: "${track.title}":`, error);
        } finally {
            events_js_1.sendLastFmUserInfoUpdated(undefined, await this.api.getUserInfo());
        }
    }
    async fetchAndStoreSession(token) {
        try {
            const session = await this.api.getSession(token);
            this.store.set(this.SESSION_STORE_KEY, session);
            this.logger.info("Session fetched and stored");
        }
        catch (error) {
            this.logger.error("Failed to get and store session", error);
        }
    }
    getStoredSession() {
        const session = this.store.get(this.SESSION_STORE_KEY);
        if (!session)
            throw new Error("No session found");
        return session;
    }
}
exports.LastFmScrobbler = LastFmScrobbler;
LastFmScrobbler.MIN_TRACK_DURATION_MS = 30000; // 30 seconds
LastFmScrobbler.MAX_SCROBBLE_TIME_MS = 240000; // 4 minutes
