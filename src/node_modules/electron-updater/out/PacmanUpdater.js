"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacmanUpdater = void 0;
const BaseUpdater_1 = require("./BaseUpdater");
const types_1 = require("./types");
const Provider_1 = require("./providers/Provider");
class PacmanUpdater extends BaseUpdater_1.BaseUpdater {
    constructor(options, app) {
        super(options, app);
    }
    /*** @private */
    doDownloadUpdate(downloadUpdateOptions) {
        const provider = downloadUpdateOptions.updateInfoAndProvider.provider;
        const fileInfo = (0, Provider_1.findFile)(provider.resolveFiles(downloadUpdateOptions.updateInfoAndProvider.info), "pacman", ["AppImage", "deb", "rpm"]);
        return this.executeDownload({
            fileExtension: "pacman",
            fileInfo,
            downloadUpdateOptions,
            task: async (updateFile, downloadOptions) => {
                if (this.listenerCount(types_1.DOWNLOAD_PROGRESS) > 0) {
                    downloadOptions.onProgress = it => this.emit(types_1.DOWNLOAD_PROGRESS, it);
                }
                await this.httpExecutor.download(fileInfo.url, updateFile, downloadOptions);
            },
        });
    }
    get installerPath() {
        var _a, _b;
        return (_b = (_a = super.installerPath) === null || _a === void 0 ? void 0 : _a.replace(/ /g, "\\ ")) !== null && _b !== void 0 ? _b : null;
    }
    doInstall(options) {
        const sudo = this.wrapSudo();
        // pkexec doesn't want the command to be wrapped in " quotes
        const wrapper = /pkexec/i.test(sudo) ? "" : `"`;
        const installerPath = this.installerPath;
        if (installerPath == null) {
            this.dispatchError(new Error("No valid update available, can't quit and install"));
            return false;
        }
        const cmd = ["pacman", "-U", "--noconfirm", installerPath];
        this.spawnSyncLog(sudo, [`${wrapper}/bin/bash`, "-c", `'${cmd.join(" ")}'${wrapper}`]);
        if (options.isForceRunAfter) {
            this.app.relaunch();
        }
        return true;
    }
}
exports.PacmanUpdater = PacmanUpdater;
//# sourceMappingURL=PacmanUpdater.js.map