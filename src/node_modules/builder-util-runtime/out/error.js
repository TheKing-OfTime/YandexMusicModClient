"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newError = newError;
function newError(message, code) {
    const error = new Error(message);
    error.code = code;
    return error;
}
//# sourceMappingURL=error.js.map