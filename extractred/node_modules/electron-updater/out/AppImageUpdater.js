"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppImageUpdater = void 0;
const builder_util_runtime_1 = require("builder-util-runtime");
const child_process_1 = require("child_process");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const path = require("path");
const BaseUpdater_1 = require("./BaseUpdater");
const FileWithEmbeddedBlockMapDifferentialDownloader_1 = require("./differentialDownloader/FileWithEmbeddedBlockMapDifferentialDownloader");
const main_1 = require("./main");
const Provider_1 = require("./providers/Provider");
class AppImageUpdater extends BaseUpdater_1.BaseUpdater {
    constructor(options, app) {
        super(options, app);
    }
    isUpdaterActive() {
        if (process.env["APPIMAGE"] == null) {
            if (process.env["SNAP"] == null) {
                this._logger.warn("APPIMAGE env is not defined, current application is not an AppImage");
            }
            else {
                this._logger.info("SNAP env is defined, updater is disabled");
            }
            return false;
        }
        return super.isUpdaterActive();
    }
    /*** @private */
    doDownloadUpdate(downloadUpdateOptions) {
        const provider = downloadUpdateOptions.updateInfoAndProvider.provider;
        const fileInfo = (0, Provider_1.findFile)(provider.resolveFiles(downloadUpdateOptions.updateInfoAndProvider.info), "AppImage", ["rpm", "deb"]);
        return this.executeDownload({
            fileExtension: "AppImage",
            fileInfo,
            downloadUpdateOptions,
            task: async (updateFile, downloadOptions) => {
                const oldFile = process.env["APPIMAGE"];
                if (oldFile == null) {
                    throw (0, builder_util_runtime_1.newError)("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
                }
                let isDownloadFull = false;
                try {
                    const downloadOptions = {
                        newUrl: fileInfo.url,
                        oldFile,
                        logger: this._logger,
                        newFile: updateFile,
                        isUseMultipleRangeRequest: provider.isUseMultipleRangeRequest,
                        requestHeaders: downloadUpdateOptions.requestHeaders,
                        cancellationToken: downloadUpdateOptions.cancellationToken,
                    };
                    if (this.listenerCount(main_1.DOWNLOAD_PROGRESS) > 0) {
                        downloadOptions.onProgress = it => this.emit(main_1.DOWNLOAD_PROGRESS, it);
                    }
                    await new FileWithEmbeddedBlockMapDifferentialDownloader_1.FileWithEmbeddedBlockMapDifferentialDownloader(fileInfo.info, this.httpExecutor, downloadOptions).download();
                }
                catch (e) {
                    this._logger.error(`Cannot download differentially, fallback to full download: ${e.stack || e}`);
                    // during test (developer machine mac) we must throw error
                    isDownloadFull = process.platform === "linux";
                }
                if (isDownloadFull) {
                    await this.httpExecutor.download(fileInfo.url, updateFile, downloadOptions);
                }
                await (0, fs_extra_1.chmod)(updateFile, 0o755);
            },
        });
    }
    doInstall(options) {
        const appImageFile = process.env["APPIMAGE"];
        if (appImageFile == null) {
            throw (0, builder_util_runtime_1.newError)("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
        }
        // https://stackoverflow.com/a/1712051/1910191
        (0, fs_1.unlinkSync)(appImageFile);
        let destination;
        const existingBaseName = path.basename(appImageFile);
        // https://github.com/electron-userland/electron-builder/issues/2964
        // if no version in existing file name, it means that user wants to preserve current custom name
        if (path.basename(options.installerPath) === existingBaseName || !/\d+\.\d+\.\d+/.test(existingBaseName)) {
            // no version in the file name, overwrite existing
            destination = appImageFile;
        }
        else {
            destination = path.join(path.dirname(appImageFile), path.basename(options.installerPath));
        }
        (0, child_process_1.execFileSync)("mv", ["-f", options.installerPath, destination]);
        if (destination !== appImageFile) {
            this.emit("appimage-filename-updated", destination);
        }
        const env = {
            ...process.env,
            APPIMAGE_SILENT_INSTALL: "true",
        };
        if (options.isForceRunAfter) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.spawnLog(destination, [], env);
        }
        else {
            env.APPIMAGE_EXIT_AFTER_INSTALL = "true";
            (0, child_process_1.execFileSync)(destination, [], { env });
        }
        return true;
    }
}
exports.AppImageUpdater = AppImageUpdater;
//# sourceMappingURL=AppImageUpdater.js.map