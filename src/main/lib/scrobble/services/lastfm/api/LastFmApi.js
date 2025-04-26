"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastFmApi = void 0;
const signature_1 = require("../utils/signature");
const Logger_1 = require("../../../../../packages/logger/Logger");
/**
 * Handles all Last.fm API communication
 */
class LastFmApi {
    constructor(apiKey, sharedSecret, baseUrl, sessionProvider) {
        this.apiKey = apiKey;
        this.sharedSecret = sharedSecret;
        this.baseUrl = baseUrl;
        this.sessionProvider = sessionProvider;
        this.logger = new Logger_1.Logger("LastFmApi");
    }
    /**
     * Gets an authentication token from Last.fm
     *
     * @see https://www.last.fm/api/show/auth.getToken
     *
     * @returns A token string for the authentication process
     */
    async getToken() {
        const { token } = await this.request("auth.getToken", undefined, {
            noSig: true,
            noSk: true,
            method: "GET",
        });
        return token;
    }
    /**
     * Gets a session from Last.fm using a token
     *
     * @see https://www.last.fm/api/show/auth.getSession
     *
     * @param token Auth token from getToken
     * @returns Session object with key and user information
     */
    async getSession(token) {
        const { session } = await this.request("auth.getSession", { token }, { noSk: true, method: "GET" });
        return session;
    }
    /**
     * Updates the now playing track on Last.fm
     *
     * @see https://www.last.fm/api/show/track.updateNowPlaying
     *
     * @param trackInfo Track information to send
     */
    async updateNowPlaying(trackInfo) {
        const result = await this.request("track.updateNowPlaying", trackInfo);
        this.handleScrobbleResult(result.nowplaying);
    }
    /**
     * Scrobbles a track on Last.fm
     *
     * @see https://www.last.fm/api/show/track.scrobble
     *
     * @param trackInfo Track information to scrobble
     * @param timestamp Unix timestamp when the track was played
     */
    async scrobble(trackInfo) {
        const result = await this.request("track.scrobble", {
            ...trackInfo,
            timestamp: Math.floor(Date.now() / 1000),
        });
        this.handleScrobbleResult(result.scrobbles.scrobble);
    }
    /**
     * Handles possible warnings from a scrobble result
     *
     * @see https://www.last.fm/api/show/track.scrobble#attributes
     *
     * @param result The result to handle
     * @throws Error if track was ignored
     */
    handleScrobbleResult({ ignoredMessage, }) {
        const warningMessages = [];
        if (ignoredMessage?.code !== "0") {
            warningMessages.push(`Track was ignored by Last.fm with code: ${ignoredMessage.code}`);
            if (ignoredMessage["#text"]) {
                warningMessages.push(ignoredMessage["#text"]);
            }
        }
        if (warningMessages.length > 0) {
            throw new Error(warningMessages.join("; "));
        }
    }

    /**
     * Get user information from Last.fm
     *
     * @see https://www.last.fm/api/show/user.getInfo
     *
     * @param username Optional username to get info for. If not provided, the session's user will be used.
     */
    getUserInfo(username=undefined) {
        return this.request("user.getInfo", {
            ...(username ? {user: username} : {}),
        });
    }

    /**
     * Makes a request to the Last.fm API
     *
     * @param method The method to call
     * @param params The parameters to pass to the method
     * @param options The options for the request
     * @returns The response from the Last.fm API
     */
    async request(method, params, options = {
        noSig: false,
        noSk: false,
        method: "POST",
    }) {
        const queryParams = new URLSearchParams();
        const isPostMethod = options.method === "POST";
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined)
                    queryParams.append(key, value.toString());
            });
        }
        queryParams.append("method", method);
        queryParams.append("api_key", this.apiKey);
        if (!options.noSk) {
            queryParams.append("sk", this.sessionProvider().key);
        }
        if (!options.noSig) {
            queryParams.append("api_sig", (0, signature_1.generateSignature)(queryParams, this.sharedSecret));
        }
        const url = isPostMethod
            ? `${this.baseUrl}?format=json`
            : `${this.baseUrl}?${queryParams.toString()}&format=json`;
        const body = isPostMethod ? queryParams : undefined;
        const response = await fetch(url, { method: options.method, body });
        return await this.handleResponse(response);
    }
    /**
     * Handles a response from the Last.fm API
     *
     * @param response The response to handle
     * @returns The parsed response
     * @throws Error if the response is not JSON
     * @throws Error if the response is an API error
     */
    async handleResponse(response) {
        const text = await response.text().catch((e) => {
            this.logger.error("Failed to read response", e);
            throw e;
        });
        this.logger.debug(`Response: "${text}"`);
        let result;
        try {
            result = JSON.parse(text);
        }
        catch (e) {
            this.logger.error("Failed to parse response:", text);
            throw e;
        }
        if (this.isApiError(result)) {
            this.logger.error(`Received API error.`, `For more information, see https://www.last.fm/api/errorcodes.`, result);
            throw new Error(result.message);
        }
        return result;
    }
    /**
     * `ILastFmApiError` type guard
     *
     * @param error The error to check
     * @returns {boolean} True if the error is an API error, false otherwise
     */
    isApiError(error) {
        return (typeof error === "object" &&
            error !== null &&
            "error" in error &&
            typeof error.error === "number");
    }
}
exports.LastFmApi = LastFmApi;
