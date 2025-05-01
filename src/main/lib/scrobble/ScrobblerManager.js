"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrobblerManager = void 0;
const Logger_1 = require("../../packages/logger/Logger");
const store_js_1 = require("../store");
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

        this.logger.debug("nonYnison", playingState)

        this.currentTrackId = playingState.track.id;
        this.currentTrackPlaying = playingState.isPlaying;
        this.logger.info(`Processing playing state: ${playingState.isPlaying ? "Playing" : "Paused"} with status "${playingState.status}" - ${playingState.track.title}`);
        this.scrobblers
            .filter((scrobbler) => scrobbler.isEnabled())
            .forEach((scrobbler) => scrobbler.handleEvent(playingState));
    }

    async handlePlayingStateFromYnison(ynisonState) {
        if (!ynisonState || store_js_1.getModFeatures()?.scrobblers?.lastfm?.fromYnison === false) return;
        let partialPlayerState = {};
        let currentTrackData =
          ynisonState?.rawData?.player_state?.player_queue?.playable_list[
            ynisonState?.rawData?.player_state?.player_queue
              ?.current_playable_index
          ];
        if (!currentTrackData) return;

        const res = await fetch(`https://api.music.yandex.net/tracks/${currentTrackData.playable_id}:${currentTrackData.album_id_optional ?? ""}`)

        if (!res.ok) return this.logger.warn(`Failed to fetch track data: ${res.statusText}`);

        const fetchedTrack = (await res.json())?.result?.[0];

        if (!fetchedTrack) return this.logger.warn(`Failed to decode track data: ${await res.json()}`);

        partialPlayerState.track = fetchedTrack;
        partialPlayerState.progress = parseInt(
            ynisonState?.rawData?.player_state?.status?.progress_ms,
        );
        partialPlayerState.status = ynisonState?.rawData?.player_state?.status?.paused
            ? "paused"
            : "playing";

        partialPlayerState.isPlaying = partialPlayerState.status === "playing";

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

        this.logger.debug("ynison", partialPlayerState)

        this.processPlayingState(partialPlayerState);
    }
}
exports.ScrobblerManager = ScrobblerManager;
ScrobblerManager.DEBOUNCE_DELAY_MS = 1500;
