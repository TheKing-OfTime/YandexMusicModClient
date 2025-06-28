"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const defaultRetryPolicy_js_1 = require("../constants/defaultRetryPolicy.js");
const defaultTimeout_js_1 = require("../constants/defaultTimeout.js");
const defaultTotalRequestsLimit_js_1 = require("../constants/defaultTotalRequestsLimit.js");
const ErrorStatusCode_js_1 = require("../types/ErrorStatusCode.js");
const FetchRequestError_js_1 = require("./FetchRequestError.js");
const requestWithTimeout = (url, fetch, options, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      request(url, fetch, options)
        .then(resolve)
        .catch((error) => {
          reject(error);
        });
    }, delay ?? 0);
  });
};
function request(url, fetch, options) {
  const timeout = options.timeout || defaultTimeout_js_1.defaultTimeout;
  const retryPolicy =
    options.retryPolicy || defaultRetryPolicy_js_1.defaultRetryPolicy;
  const totalRequestsLimit =
    retryPolicy.totalRequestsLimit ||
    defaultTotalRequestsLimit_js_1.defaultTotalRequestsLimit;
  const retryCount =
    typeof options.retryCount === "number" ? options.retryCount : 0;
  const controller = new AbortController();
  const signal = controller.signal;
  return new Promise(async (resolve, reject) => {
    const abortTimeout = setTimeout(() => {
      reject(
        new FetchRequestError_js_1.FetchRequestError({
          message: "HTTP_CLIENT_ERROR",
          status: ErrorStatusCode_js_1.ErrorStatusCode.TIMEOUT,
          url,
        }),
      );
      controller.abort();
    }, timeout);
    try {
      const response = await fetch(url, { ...options, signal });
      clearTimeout(abortTimeout);
      if (response?.ok) {
        return resolve(response);
      }
      throw new FetchRequestError_js_1.FetchRequestError({
        url,
        message: response.statusText,
        status:
          response.status ??
          ErrorStatusCode_js_1.ErrorStatusCode.NON_HTTP_ERROR,
        headers: response.headers,
      });
    } catch (err) {
      clearTimeout(abortTimeout);
      const error = err;
      const status =
        error?.status ?? ErrorStatusCode_js_1.ErrorStatusCode.NON_HTTP_ERROR;
      const retryAttempts = retryPolicy?.statusCodes[status]?.attempts ?? [];
      if (
        retryCount < retryAttempts.length &&
        retryCount < totalRequestsLimit - 1
      ) {
        const delay = retryAttempts[retryCount];
        requestWithTimeout(
          url,
          fetch,
          { ...options, retryCount: retryCount + 1 },
          delay,
        )
          .then(resolve)
          .catch(reject);
      } else {
        reject(
          new FetchRequestError_js_1.FetchRequestError({
            url,
            message: error?.message,
            status:
              error?.status ??
              ErrorStatusCode_js_1.ErrorStatusCode.NON_HTTP_ERROR,
            headers: error?.headers,
          }),
        );
      }
    }
  }).catch((error) => {
    if (error?.status === ErrorStatusCode_js_1.ErrorStatusCode.TIMEOUT) {
      const retryAttempts = retryPolicy?.statusCodes?.TIMEOUT?.attempts ?? [];
      if (
        retryCount < retryAttempts.length &&
        retryCount < totalRequestsLimit - 1
      ) {
        const delay = retryPolicy?.statusCodes.TIMEOUT?.attempts[retryCount];
        return requestWithTimeout(
          url,
          fetch,
          { ...options, retryCount: retryCount + 1 },
          delay,
        );
      }
    }
    throw error;
  });
}
exports.request = request;
