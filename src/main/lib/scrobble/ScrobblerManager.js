"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrobblerManager = void 0;
const Logger_1 = require("../../packages/logger/Logger");
/**
 * ScrobblerManager is responsible for managing all scrobbler services
 * and distributing playing state events to them.
 */
class ScrobblerManager {
    constructor() {
        this.logger = new Logger_1.Logger("ScrobblerManager");
        this.scrobblers = [];
        this.currentTrackId = null;
        this.currentTrackPlaying = false;
        this.debounceTimeout = null;
    }
    /**
     * Registers a scrobbler service with the manager
     *
     * @param scrobbler The scrobbler service to register
     */
    registerScrobbler(scrobbler) {
        this.logger.info(`Registering scrobbler: ${scrobbler.type}`);
        this.scrobblers.push(scrobbler);
    }
    /**
     * Gets all registered scrobblers
     */
    getScrobblers() {
        return this.scrobblers;
    }
    /**
     * Gets a scrobbler service by type
     *
     * @param type The type of scrobbler service to get
     * @returns The scrobbler service or undefined if not found
     */
    getScrobblerByType(type) {
        return this.scrobblers.find((scrobbler) => scrobbler.type === type);
    }
    /**
     * Handles a playing state event and distributes it to all enabled scrobblers
     *
     * Has a debounce to prevent spamming the scrobblers with the same event.
     *
     * @param playingState The current playing state
     */
    handlePlayingState(playingState) {
        if (!playingState?.track)
            return;
        if (playingState.status.startsWith("loading"))
            return;
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
        if (playingState.track.id === this.currentTrackId &&
            this.currentTrackPlaying === playingState.isPlaying)
            return;
        this.debounceTimeout = setTimeout(() => {
            this.processPlayingState(playingState);
        }, ScrobblerManager.DEBOUNCE_DELAY_MS);
    }
    /**
     * Processes a playing state event and distributes it to all enabled scrobblers
     *
     * @param playingState The current playing state
     */
    processPlayingState(playingState) {
        if (!playingState)
            return;
        this.currentTrackId = playingState.track.id;
        this.currentTrackPlaying = playingState.isPlaying;
        this.logger.info(`Processing playing state: ${playingState.isPlaying ? "Playing" : "Paused"} with status "${playingState.status}" - ${playingState.track.title}`);
        this.scrobblers
            .filter((scrobbler) => scrobbler.isEnabled())
            .forEach((scrobbler) => scrobbler.handleEvent(playingState));
    }
}
exports.ScrobblerManager = ScrobblerManager;
ScrobblerManager.DEBOUNCE_DELAY_MS = 1500;
