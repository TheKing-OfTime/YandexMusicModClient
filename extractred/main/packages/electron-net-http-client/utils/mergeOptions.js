"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeOptions = void 0;
const mergeOptions = (original, mergable) => {
    const result = {
        ...original,
        ...mergable
    };
    if (original.headers || mergable.headers) {
        result.headers = {
            ...original.headers,
            ...mergable.headers
        };
    }
    if (original.retryPolicy || mergable.retryPolicy) {
        result.retryPolicy = {
            ...original.retryPolicy,
            ...mergable.retryPolicy,
            statusCodes: {
                ...original.retryPolicy?.statusCodes,
                ...mergable.retryPolicy?.statusCodes
            }
        };
    }
    return result;
};
exports.mergeOptions = mergeOptions;
