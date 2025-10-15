"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;

function throttle(callee, delay) {
    let lastCall = 0;
    let timeout = null;
    let lastArgs;
    let lastContext;

    return function (...args) {
        const now = Date.now();
        const remaining = delay - (now - lastCall);
        lastContext = this;
        lastArgs = args;

        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            lastCall = now;
            callee.apply(lastContext, lastArgs);
        } else if (!timeout) {

            timeout = setTimeout(() => {
                timeout = null;
                lastCall = Date.now();
                callee.apply(lastContext, lastArgs);
            }, remaining);
        }
    };
}

exports.throttle = throttle;
