import { URL } from "url";
export declare function newUrlFromBase(pathname: string, baseUrl: URL, addRandomQueryToAvoidCaching?: boolean): URL;
export declare function getChannelFilename(channel: string): string;
export declare function blockmapFiles(baseUrl: URL, oldVersion: string, newVersion: string): URL[];
