"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerActions = void 0;
var PlayerActions;
(function (PlayerActions) {
    PlayerActions["PLAY"] = "PLAY";
    PlayerActions["PAUSE"] = "PAUSE";
    PlayerActions["TOGGLE_PLAY"] = "TOGGLE_PLAY";

    PlayerActions["MOVE_FORWARD"] = "MOVE_FORWARD";
    PlayerActions["MOVE_BACKWARD"] = "MOVE_BACKWARD";

    PlayerActions["TOGGLE_LIKE"] = "TOGGLE_LIKE";
    PlayerActions["LIKE"] = "LIKE";
    PlayerActions["LIKE_NONE"] = "LIKE_NONE";
    PlayerActions["TOGGLE_DISLIKE"] = "TOGGLE_DISLIKE";
    PlayerActions["DISLIKE"] = "DISLIKE";
    PlayerActions["DISLIKE_NONE"] = "DISLIKE_NONE";

    PlayerActions["TOGGLE_REPEAT"] = "TOGGLE_REPEAT";   // UNSUPPORTED
    PlayerActions["REPEAT_NONE"] = "REPEAT_NONE";
    PlayerActions["REPEAT_CONTEXT"] = "REPEAT_CONTEXT";
    PlayerActions["REPEAT_ONE"] = "REPEAT_ONE";

    PlayerActions["TOGGLE_SHUFFLE"] = "TOGGLE_SHUFFLE";
    PlayerActions["SHUFFLE"] = "SHUFFLE";               // UNSUPPORTED
    PlayerActions["SHUFFLE_NONE"] = "SHUFFLE_NONE";     // UNSUPPORTED
})(PlayerActions || (exports.PlayerActions = PlayerActions = {}));
