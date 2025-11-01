"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWindowSessionEvents = void 0;
const handleWindowSessionEvents = (window) => {
    window.webContents.session.on('will-download', (event) => {
    event.preventDefault();
  });
};
exports.handleWindowSessionEvents = handleWindowSessionEvents;
