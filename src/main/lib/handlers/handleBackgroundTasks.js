"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBackgroundTasks = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const state_js_1 = require("../state.js");
const events_js_1 = require("../../events.js");
const store_js_1 = require("../store.js");
const TRACKS_AVAILABILITY_UPDATE_INTERVAL = 15 * 60 * 1000;
const REPOSITORY_META_UPDATE_INTERVAL = 24 * 60 * 60 * 1000;
const handleBackgroundTasks = (window) => {
    node_cron_1.default.schedule('*/5 * * * *', () => {
        if (!state_js_1.state.isWindowHidden) {
            const [getTracksAvailabilityUpdatedAtValue] = store_js_1.tracksAvailabilityUpdatedAt;
            const tracksAvailabilityUpdatedAtValue = getTracksAvailabilityUpdatedAtValue();
            if (typeof tracksAvailabilityUpdatedAtValue === 'number') {
                if (Date.now() - tracksAvailabilityUpdatedAtValue > TRACKS_AVAILABILITY_UPDATE_INTERVAL) {
                    (0, events_js_1.sendRefreshTracksAvailability)(window);
                }
            }
            else {
                (0, events_js_1.sendRefreshTracksAvailability)(window);
            }
        }
    });
    node_cron_1.default.schedule('*/30 * * * *', () => {
        if (!state_js_1.state.isWindowHidden) {
            const [getRepositoryMetaUpdatedAtValue] = store_js_1.repositoryMetaUpdatedAt;
            const repositoryMetaUpdatedAtValue = getRepositoryMetaUpdatedAtValue();
            if (typeof repositoryMetaUpdatedAtValue === 'number') {
                if (Date.now() - repositoryMetaUpdatedAtValue > REPOSITORY_META_UPDATE_INTERVAL) {
                    (0, events_js_1.sendRefreshRepositoryMeta)(window);
                }
            }
            else {
                (0, events_js_1.sendRefreshRepositoryMeta)(window);
            }
        }
    });
};
exports.handleBackgroundTasks = handleBackgroundTasks;
