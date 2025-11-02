import { AllPublishOptions } from "builder-util-runtime";
import { AppAdapter } from "./AppAdapter";
import { AppUpdater, DownloadUpdateOptions } from "./AppUpdater";
export declare class MacUpdater extends AppUpdater {
    private readonly nativeUpdater;
    private squirrelDownloadedUpdate;
    private server?;
    constructor(options?: AllPublishOptions, app?: AppAdapter);
    private debug;
    private closeServerIfExists;
    protected doDownloadUpdate(downloadUpdateOptions: DownloadUpdateOptions): Promise<Array<string>>;
    private updateDownloaded;
    private handleUpdateDownloaded;
    quitAndInstall(): void;
}
