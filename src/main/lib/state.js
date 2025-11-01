"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
exports.state = {
  isWindowHidden: false,
  isMinimized: false,
  willQuit: false,
  lastWindowBlurredOrHiddenTime: 0,
  deeplink: null,
  player: {
    isPlaying: false,
    canMoveBackward: false,
    canMoveForward: false,
  },
};
