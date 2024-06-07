"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const FetchRequestError_js_1 = require("../FetchRequestError.js");
const request_js_1 = require("../request.js");
const REQUEST_URL = '/request';
let abortController;
(0, globals_1.describe)('Fetch request', () => {
    (0, globals_1.beforeEach)(() => {
        abortController = new AbortController();
    });
    (0, globals_1.test)('should have been called fetch', async () => {
        const mockFetch = globals_1.jest.fn(() => Promise.resolve({ ok: true }));
        const response = await (0, request_js_1.request)(REQUEST_URL, mockFetch, {});
        (0, globals_1.expect)(response.ok).toBeTruthy();
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledTimes(1);
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledWith(REQUEST_URL, { signal: abortController.signal });
    });
    (0, globals_1.test)('should have been called post method', async () => {
        const mockFetch = globals_1.jest.fn(() => Promise.resolve({ ok: true }));
        const response = await (0, request_js_1.request)(REQUEST_URL, mockFetch, {
            method: 'POST'
        });
        (0, globals_1.expect)(response.ok).toBeTruthy();
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledTimes(1);
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledWith(REQUEST_URL, {
            signal: abortController.signal,
            method: 'POST'
        });
    });
    (0, globals_1.test)('should have been called post method with TIMEOUT error', async () => {
        abortController.abort();
        const timeout = 10;
        const mockFetch = globals_1.jest.fn(() => new Promise((resolve) => setTimeout(() => resolve({ ok: true }), timeout * 2)));
        const mockCall = await (0, globals_1.expect)((0, request_js_1.request)(REQUEST_URL, mockFetch, {
            method: 'POST',
            timeout,
            retryPolicy: {
                statusCodes: {}
            }
        }));
        await mockCall.rejects.toBeInstanceOf(FetchRequestError_js_1.FetchRequestError);
        await mockCall.rejects.toHaveProperty('status', 'TIMEOUT');
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledTimes(1);
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledWith(REQUEST_URL, {
            signal: abortController.signal,
            method: 'POST',
            timeout,
            retryPolicy: {
                statusCodes: {}
            }
        });
    });
    (0, globals_1.test)('should have been called fetch 2 times for status 500 and return ok', async () => {
        const mockFetch = globals_1.jest.fn(() => Promise.resolve({ ok: true }));
        mockFetch.mockImplementationOnce(() => new Promise((_, reject) => setTimeout(() => reject({ status: 500 }))));
        const options = {
            retryPolicy: {
                statusCodes: {
                    500: {
                        attempts: [10, 10]
                    }
                }
            },
            signal: abortController.signal
        };
        const response = await (0, request_js_1.request)(REQUEST_URL, mockFetch, options);
        (0, globals_1.expect)(response.ok).toBeTruthy();
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledTimes(2);
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(1, REQUEST_URL, options);
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(2, REQUEST_URL, {
            ...options,
            retryCount: 1
        });
    });
    (0, globals_1.test)('should have been called post method with status 500', async () => {
        const mockFetch = globals_1.jest.fn(() => new Promise((_, reject) => setTimeout(() => reject({ ok: false, status: 500 }))));
        const mockCall = await (0, globals_1.expect)((0, request_js_1.request)(REQUEST_URL, mockFetch, {
            method: 'POST',
            retryPolicy: {
                statusCodes: {}
            }
        }));
        await mockCall.rejects.toBeInstanceOf(FetchRequestError_js_1.FetchRequestError);
        await mockCall.rejects.toHaveProperty('status', 500);
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledTimes(1);
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledWith(REQUEST_URL, {
            signal: abortController.signal,
            method: 'POST',
            retryPolicy: {
                statusCodes: {}
            }
        });
    });
    (0, globals_1.test)('should have been called fetch 3 times for status 500', async () => {
        const mockFetch = globals_1.jest.fn(() => new Promise((_, reject) => setTimeout(() => reject({ status: 500 }))));
        const options = {
            retryPolicy: {
                statusCodes: {
                    500: {
                        attempts: [10, 10]
                    }
                },
                totalRequestsLimit: 3
            },
            signal: abortController.signal
        };
        const mockCall = await (0, globals_1.expect)((0, request_js_1.request)(REQUEST_URL, mockFetch, options));
        await mockCall.rejects.toBeInstanceOf(FetchRequestError_js_1.FetchRequestError);
        await mockCall.rejects.toHaveProperty('status', 500);
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledTimes(3);
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(1, REQUEST_URL, options);
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(2, REQUEST_URL, {
            ...options,
            retryCount: 1
        });
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(3, REQUEST_URL, {
            ...options,
            retryCount: 2
        });
    });
    (0, globals_1.test)('should have been called fetch 2 times for status 500', async () => {
        const mockFetch = globals_1.jest.fn(() => new Promise((_, reject) => setTimeout(() => reject({ status: 500 }))));
        const options = {
            retryPolicy: {
                statusCodes: {
                    500: {
                        attempts: [100, 200]
                    }
                },
                totalRequestsLimit: 2
            },
            signal: abortController.signal
        };
        const mockCall = await (0, globals_1.expect)((0, request_js_1.request)(REQUEST_URL, mockFetch, options));
        await mockCall.rejects.toBeInstanceOf(FetchRequestError_js_1.FetchRequestError);
        await mockCall.rejects.toHaveProperty('status', 500);
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledTimes(2);
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(1, REQUEST_URL, options);
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(2, REQUEST_URL, {
            ...options,
            retryCount: 1
        });
    });
    (0, globals_1.test)('should have been called fetch 2 times for status TIMEOUT', async () => {
        abortController.abort();
        const requestTimeout = 10;
        const mockFetch = globals_1.jest.fn(() => new Promise((_, reject) => setTimeout(() => reject({ ok: true }), requestTimeout * 2)));
        const options = {
            retryPolicy: {
                statusCodes: {
                    TIMEOUT: {
                        attempts: [requestTimeout]
                    }
                },
                totalRequestsLimit: 2
            },
            timeout: requestTimeout,
            signal: abortController.signal
        };
        const mockCall = await (0, globals_1.expect)((0, request_js_1.request)(REQUEST_URL, mockFetch, options));
        await mockCall.rejects.toBeInstanceOf(FetchRequestError_js_1.FetchRequestError);
        await mockCall.rejects.toHaveProperty('status', 'TIMEOUT');
        (0, globals_1.expect)(mockFetch).toHaveBeenCalledTimes(2);
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(1, REQUEST_URL, options);
        (0, globals_1.expect)(mockFetch).toHaveBeenNthCalledWith(2, REQUEST_URL, {
            ...options,
            retryCount: 1
        });
    });
});
