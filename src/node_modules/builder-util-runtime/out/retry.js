"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = retry;
const CancellationToken_1 = require("./CancellationToken");
async function retry(task, retryCount, interval, backoff = 0, attempt = 0, shouldRetry) {
    var _a;
    const cancellationToken = new CancellationToken_1.CancellationToken();
    try {
        return await task();
    }
    catch (error) {
        if (((_a = shouldRetry === null || shouldRetry === void 0 ? void 0 : shouldRetry(error)) !== null && _a !== void 0 ? _a : true) && retryCount > 0 && !cancellationToken.cancelled) {
            await new Promise(resolve => setTimeout(resolve, interval + backoff * attempt));
            return await retry(task, retryCount - 1, interval, backoff, attempt + 1, shouldRetry);
        }
        else {
            throw error;
        }
    }
}
//# sourceMappingURL=retry.js.map