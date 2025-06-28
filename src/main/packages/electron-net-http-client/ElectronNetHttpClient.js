"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronNetHttpClient = void 0;
const electron_1 = require("electron");
const mergeOptions_js_1 = require("./utils/mergeOptions.js");
const request_js_1 = require("./utils/request.js");
class ElectronNetHttpClient {
  options;
  constructor(options = {}) {
    this.options = options;
  }
  isOnline() {
    return electron_1.app.isReady() && electron_1.net.isOnline();
  }
  async get(path, options = {}) {
    return (0, request_js_1.request)(path, electron_1.net.fetch, {
      ...(0, mergeOptions_js_1.mergeOptions)(this.options, options),
      method: "GET",
    });
  }
  async post(path, options = {}) {
    return (0, request_js_1.request)(path, electron_1.net.fetch, {
      ...(0, mergeOptions_js_1.mergeOptions)(this.options, options),
      method: "POST",
    });
  }
  async put(path, options = {}) {
    return (0, request_js_1.request)(path, electron_1.net.fetch, {
      ...(0, mergeOptions_js_1.mergeOptions)(this.options, options),
      method: "PUT",
    });
  }
  async patch(path, options = {}) {
    return (0, request_js_1.request)(path, electron_1.net.fetch, {
      ...(0, mergeOptions_js_1.mergeOptions)(this.options, options),
      method: "PATCH",
    });
  }
  async delete(path, options = {}) {
    return (0, request_js_1.request)(path, electron_1.net.fetch, {
      ...(0, mergeOptions_js_1.mergeOptions)(this.options, options),
      method: "DELETE",
    });
  }
  async head(path, options = {}) {
    return (0, request_js_1.request)(path, electron_1.net.fetch, {
      ...(0, mergeOptions_js_1.mergeOptions)(this.options, options),
      method: "HEAD",
    });
  }
}
exports.ElectronNetHttpClient = ElectronNetHttpClient;
