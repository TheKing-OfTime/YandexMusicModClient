"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRetryPolicy = void 0;
const defaultTotalRequestsLimit_js_1 = require("./defaultTotalRequestsLimit.js");
exports.defaultRetryPolicy = {
    statusCodes: {
        408: {
            attempts: [2000, 5000]
        },
        429: {
            attempts: [2000, 5000]
        },
        500: {
            attempts: [1000, 3000]
        },
        502: {
            attempts: [1000, 3000]
        },
        503: {
            attempts: [1000, 3000]
        },
        504: {
            attempts: [2000, 5000]
        },
        NON_HTTP_ERROR: {
            attempts: [1000, 1000]
        },
        TIMEOUT: {
            attempts: [500]
        }
    },
    totalRequestsLimit: defaultTotalRequestsLimit_js_1.defaultTotalRequestsLimit
};
