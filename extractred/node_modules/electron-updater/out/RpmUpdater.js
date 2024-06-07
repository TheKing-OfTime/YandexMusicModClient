"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpmUpdater = void 0;
const BaseUpdater_1 = require("./BaseUpdater");
const main_1 = require("./main");
const Provider_1 = require("./providers/Provider");
class RpmUpdater extends BaseUpdater_1.BaseUpdater {
    constructor(options, app) {
        super(options, app);
    }
    /*** @private */
    doDownloadUpdate(downloadUpdateOptions) {
        const provider = downloadUpdateOptions.updateInfoAndProvider.provider;
        const fileInfo = (0, Provider_1.findFile)(provider.resolveFiles(downloadUpdateOptions.updateInfoAndProvider.info), "rpm", ["AppImage", "deb"]);
        return this.executeDownload({
            fileExtension: "rpm",
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
        const upgradePath = options.installerPath;
        const sudo = this.wrapSudo();
        // pkexec doesn't want the command to be wrapped in " quotes
        const wrapper = /pkexec/i.test(sudo) ? "" : `"`;
        const packageManager = this.spawnSyncLog("which zypper");
        let cmd;
        if (!packageManager) {
            const packageManager = this.spawnSyncLog("which dnf || which yum");
            cmd = [packageManager, "-y", "remove", `'${this.app.name}'`, ";", packageManager, "-y", "install", upgradePath];
        }
        else {
            cmd = [
                packageManager,
                "remove",
                "-y",
                `'${this.app.name}'`,
                ";",
                packageManager,
                "clean",
                "--all",
                ";",
                packageManager,
                "--no-refresh",
                "install",
                "--allow-unsigned-rpm",
                "-y",
                "-f",
                upgradePath,
            ];
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