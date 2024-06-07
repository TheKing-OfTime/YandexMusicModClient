"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebUpdater = void 0;
const BaseUpdater_1 = require("./BaseUpdater");
const main_1 = require("./main");
const Provider_1 = require("./providers/Provider");
class DebUpdater extends BaseUpdater_1.BaseUpdater {
    constructor(options, app) {
        super(options, app);
    }
    /*** @private */
    doDownloadUpdate(downloadUpdateOptions) {
        const provider = downloadUpdateOptions.updateInfoAndProvider.provider;
        const fileInfo = (0, Provider_1.findFile)(provider.resolveFiles(downloadUpdateOptions.updateInfoAndProvider.info), "deb", ["AppImage", "rpm"]);
        return this.executeDownload({
            fileExtension: "deb",
            fileInfo,
            downloadUpdateOptions,
            task: async (updateFile, downloadOptions) => {
                if (this.listenerCount(main_1.DOWNLOAD_PROGRESS) > 0) {
                    downloadOptions.onProgress = it => this.emit(main_1.DOWNLOAD_PROGRESS, it);
                }
                await this.httpExecutor.download(fileInfo.url, updateFile, downloadOptions);
            },
        });
    }
    doInstall(options) {
        const sudo = this.wrapSudo();
        // pkexec doesn't want the command to be wrapped in " quotes
        const wrapper = /pkexec/i.test(sudo) ? "" : `"`;
        const cmd = ["dpkg", "-i", options.installerPath, "||", "apt-get", "install", "-f", "-y"];
        this.spawnSyncLog(sudo, [`${wrapper}/bin/bash`, "-c", `'${cmd.join(" ")}'${wrapper}`]);
        if (options.isForceRunAfter) {
            this.app.relaunch();
        }
        return true;
    }
}
exports.DebUpdater = DebUpdater;
//# sourceMappingURL=DebUpdater.js.map