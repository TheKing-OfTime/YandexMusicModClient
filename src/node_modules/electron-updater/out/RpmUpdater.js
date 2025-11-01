"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpmUpdater = void 0;
const BaseUpdater_1 = require("./BaseUpdater");
const types_1 = require("./types");
const Provider_1 = require("./providers/Provider");
class RpmUpdater extends BaseUpdater_1.BaseUpdater {
    constructor(options, app) {
        super(options, app);
    }
    /*** @private */
    doDownloadUpdate(downloadUpdateOptions) {
        const provider = downloadUpdateOptions.updateInfoAndProvider.provider;
        const fileInfo = (0, Provider_1.findFile)(provider.resolveFiles(downloadUpdateOptions.updateInfoAndProvider.info), "rpm", ["AppImage", "deb", "pacman"]);
        return this.executeDownload({
            fileExtension: "rpm",
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
        const packageManager = this.spawnSyncLog("which zypper");
        const installerPath = this.installerPath;
        if (installerPath == null) {
            this.dispatchError(new Error("No valid update available, can't quit and install"));
            return false;
        }
        let cmd;
        if (!packageManager) {
            const packageManager = this.spawnSyncLog("which dnf || which yum");
            cmd = [packageManager, "-y", "install", installerPath];
        }
        else {
            cmd = [packageManager, "--no-refresh", "install", "--allow-unsigned-rpm", "-y", "-f", installerPath];
        }
        this.spawnSyncLog(sudo, [`${wrapper}/bin/bash`, "-c", `'${cmd.join(" ")}'${wrapper}`]);
        if (options.isForceRunAfter) {
            this.app.relaunch();
        }
        return true;
    }
}
exports.RpmUpdater = RpmUpdater;
//# sourceMappingURL=RpmUpdater.js.map