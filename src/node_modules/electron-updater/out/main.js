"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdaterSignal = exports.UPDATE_DOWNLOADED = exports.DOWNLOAD_PROGRESS = exports.NsisUpdater = exports.MacUpdater = exports.RpmUpdater = exports.DebUpdater = exports.AppImageUpdater = exports.Provider = exports.CancellationToken = exports.NoOpLogger = exports.AppUpdater = exports.BaseUpdater = void 0;
const builder_util_runtime_1 = require("builder-util-runtime");
Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function () { return builder_util_runtime_1.CancellationToken; } });
const fs_extra_1 = require("fs-extra");
const path = require("path");
var BaseUpdater_1 = require("./BaseUpdater");
Object.defineProperty(exports, "BaseUpdater", { enumerable: true, get: function () { return BaseUpdater_1.BaseUpdater; } });
var AppUpdater_1 = require("./AppUpdater");
Object.defineProperty(exports, "AppUpdater", { enumerable: true, get: function () { return AppUpdater_1.AppUpdater; } });
Object.defineProperty(exports, "NoOpLogger", { enumerable: true, get: function () { return AppUpdater_1.NoOpLogger; } });
var Provider_1 = require("./providers/Provider");
Object.defineProperty(exports, "Provider", { enumerable: true, get: function () { return Provider_1.Provider; } });
var AppImageUpdater_1 = require("./AppImageUpdater");
Object.defineProperty(exports, "AppImageUpdater", { enumerable: true, get: function () { return AppImageUpdater_1.AppImageUpdater; } });
var DebUpdater_1 = require("./DebUpdater");
Object.defineProperty(exports, "DebUpdater", { enumerable: true, get: function () { return DebUpdater_1.DebUpdater; } });
var RpmUpdater_1 = require("./RpmUpdater");
Object.defineProperty(exports, "RpmUpdater", { enumerable: true, get: function () { return RpmUpdater_1.RpmUpdater; } });
var MacUpdater_1 = require("./MacUpdater");
Object.defineProperty(exports, "MacUpdater", { enumerable: true, get: function () { return MacUpdater_1.MacUpdater; } });
var NsisUpdater_1 = require("./NsisUpdater");
Object.defineProperty(exports, "NsisUpdater", { enumerable: true, get: function () { return NsisUpdater_1.NsisUpdater; } });
// autoUpdater to mimic electron bundled autoUpdater
let _autoUpdater;
function doLoadAutoUpdater() {
    // tslint:disable:prefer-conditional-expression
    if (process.platform === "win32") {
        _autoUpdater = new (require("./NsisUpdater").NsisUpdater)();
    }
    else if (process.platform === "darwin") {
        _autoUpdater = new (require("./MacUpdater").MacUpdater)();
    }
    else {
        _autoUpdater = new (require("./AppImageUpdater").AppImageUpdater)();
        try {
            const identity = path.join(process.resourcesPath, "package-type");
            if (!(0, fs_extra_1.existsSync)(identity)) {
                return _autoUpdater;
            }
            console.info("Checking for beta autoupdate feature for deb/rpm distributions");
            const fileType = (0, fs_extra_1.readFileSync)(identity).toString().trim();
            console.info("Found package-type:", fileType);
            switch (fileType) {
                case "deb":
                    _autoUpdater = new (require("./DebUpdater").DebUpdater)();
                    break;
                case "rpm":
                    _autoUpdater = new (require("./RpmUpdater").RpmUpdater)();
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.warn("Unable to detect 'package-type' for autoUpdater (beta rpm/deb support). If you'd like to expand support, please consider contributing to electron-builder", error.message);
        }
    }
    return _autoUpdater;
}
Object.defineProperty(exports, "autoUpdater", {
    enumerable: true,
    get: () => {
        return _autoUpdater || doLoadAutoUpdater();
    },
});
exports.DOWNLOAD_PROGRESS = "download-progress";
exports.UPDATE_DOWNLOADED = "update-downloaded";
class UpdaterSignal {
    constructor(emitter) {
        this.emitter = emitter;
    }
    /**
     * Emitted when an authenticating proxy is [asking for user credentials](https://github.com/electron/electron/blob/master/docs/api/client-request.md#event-login).
     */
    login(handler) {
        addHandler(this.emitter, "login", handler);
    }
    progress(handler) {
        addHandler(this.emitter, exports.DOWNLOAD_PROGRESS, handler);
    }
    updateDownloaded(handler) {
        addHandler(this.emitter, exports.UPDATE_DOWNLOADED, handler);
    }
    updateCancelled(handler) {
        addHandler(this.emitter, "update-cancelled", handler);
    }
}
exports.UpdaterSignal = UpdaterSignal;
const isLogEvent = false;
function addHandler(emitter, event, handler) {
    if (isLogEvent) {
        emitter.on(event, (...args) => {
            console.log("%s %s", event, args);
            handler(...args);
        });
    }
    else {
        emitter.on(event, handler);
    }
}
//# sourceMappingURL=main.js.map