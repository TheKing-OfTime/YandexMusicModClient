"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
exports.state = {
  player: {
    isPlaying: false,
    canMoveBackward: false,
    canMoveForward: false,
  },
  isWindowHidden: false,
  willQuit: false,
  lastWindowBlurredOrHiddenTime: 0,
  deeplink: null,
};
