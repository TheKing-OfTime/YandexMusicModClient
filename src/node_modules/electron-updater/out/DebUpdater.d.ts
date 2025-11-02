import { AllPublishOptions } from "builder-util-runtime";
import { AppAdapter } from "./AppAdapter";
import { DownloadUpdateOptions } from "./AppUpdater";
import { BaseUpdater, InstallOptions } from "./BaseUpdater";
export declare class DebUpdater extends BaseUpdater {
    constructor(options?: AllPublishOptions | null, app?: AppAdapter);
    /*** @private */
    protected doDownloadUpdate(downloadUpdateOptions: DownloadUpdateOptions): Promise<Array<string>>;
    protected get installerPath(): string | null;
    protected doInstall(options: InstallOptions): boolean;
}
