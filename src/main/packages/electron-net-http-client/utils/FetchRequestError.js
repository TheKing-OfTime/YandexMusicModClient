"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRequestError = void 0;
class FetchRequestError extends Error {
  message;
  status;
  url;
  headers;
  constructor({ message, status, url, headers }) {
    super(message);
    this.message = message;
    this.headers = headers;
    this.status = status;
    this.url = url;
    Object.setPrototypeOf(this, FetchRequestError.prototype);
  }
}
exports.FetchRequestError = FetchRequestError;
