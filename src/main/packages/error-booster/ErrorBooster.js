"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBooster = void 0;
const config_js_1 = require("../../config.js");
const ElectronNetHttpClient_js_1 = require("../electron-net-http-client/ElectronNetHttpClient.js");
const Logger_js_1 = require("../logger/Logger.js");
const clickRequestHeaders_js_1 = require("./constants/clickRequestHeaders.js");
const getUserYandexId_js_1 = require("./utils/getUserYandexId.js");
const stringifyPayloadData_js_1 = require("./utils/stringifyPayloadData.js");
const BATCH_SIZE = 3;
const OFFLINE_THROTTLE_TIMEOUT = 10000;
const SERVICE_CONFIG = {
    project: config_js_1.config.app.errorBooster.project,
    version: config_js_1.config.buildInfo.VERSION,
    platform: "desktop",
};
class ErrorBooster {
    httpClient;
    payloadsForSending = [];
    scheduledRequestTimeout;
    logger;
    constructor() {
        this.logger = new Logger_js_1.Logger("ErrorBooster");
        this.httpClient = new ElectronNetHttpClient_js_1.ElectronNetHttpClient({
            headers: clickRequestHeaders_js_1.CLICK_REQUEST_HEADERS,
        });
    }
    async sendData(payload) {
        const stringifiedPayload = (0,
        stringifyPayloadData_js_1.stringifyPayloadData)({
            user: {
                yandexId: await (0, getUserYandexId_js_1.getUserYandexId)(),
            },
            service: SERVICE_CONFIG,
            payload,
            dateTime: payload.dateTime || Number(new Date().getTime()),
        });
        if (this.httpClient.isOnline()) {
            try {
                await this.requestToClick(stringifiedPayload);
            } catch (error) {
                this.logSendingError(error);
            }
        } else {
            this.payloadsForSending.push(stringifiedPayload);
            this.scheduleRequest();
        }
    }
    logSendingError(error) {
        this.logger.warn("Error sending data to ErrorBooster", error);
    }
    async requestToClick(body) {
        await this.httpClient.post(
            config_js_1.config.app.errorBooster.clickUrl,
            { body },
        );
    }
    scheduleRequest() {
        clearTimeout(this.scheduledRequestTimeout);
        if (!this.payloadsForSending.length) {
            return;
        }
        this.scheduledRequestTimeout = setTimeout(async () => {
            if (this.httpClient.isOnline()) {
                const batchSize =
                    this.payloadsForSending.length < BATCH_SIZE
                        ? this.payloadsForSending.length
                        : BATCH_SIZE;
                const batch = this.payloadsForSending.splice(-batchSize);
                try {
                    await this.requestToClick(batch.join("\r\n"));
                } catch (error) {
                    this.logSendingError(error);
                    this.payloadsForSending.push(...batch);
                }
            }
            this.scheduleRequest();
        }, OFFLINE_THROTTLE_TIMEOUT);
    }
}
exports.ErrorBooster = ErrorBooster;
