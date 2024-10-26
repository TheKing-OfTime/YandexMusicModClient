"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newBaseUrl = newBaseUrl;
exports.newUrlFromBase = newUrlFromBase;
exports.getChannelFilename = getChannelFilename;
exports.blockmapFiles = blockmapFiles;
// if baseUrl path doesn't ends with /, this path will be not prepended to passed pathname for new URL(input, base)
const url_1 = require("url");
// @ts-ignore
const escapeRegExp = require("lodash.escaperegexp");
/** @internal */
function newBaseUrl(url) {
    const result = new url_1.URL(url);
    if (!result.pathname.endsWith("/")) {
        result.pathname += "/";
    }
    return result;
}
// addRandomQueryToAvoidCaching is false by default because in most cases URL already contains version number,
// so, it makes sense only for Generic Provider for channel files
function newUrlFromBase(pathname, baseUrl, addRandomQueryToAvoidCaching = false) {
    const result = new url_1.URL(pathname, baseUrl);
    // search is not propagated (search is an empty string if not specified)
    const search = baseUrl.search;
    if (search != null && search.length !== 0) {
        result.search = search;
    }
    else if (addRandomQueryToAvoidCaching) {
        result.search = `noCache=${Date.now().toString(32)}`;
    }
    return result;
}
function getChannelFilename(channel) {
    return `${channel}.yml`;
}
function blockmapFiles(baseUrl, oldVersion, newVersion) {
    const newBlockMapUrl = newUrlFromBase(`${baseUrl.pathname}.blockmap`, baseUrl);
    const oldBlockMapUrl = newUrlFromBase(`${baseUrl.pathname.replace(new RegExp(escapeRegExp(newVersion), "g"), oldVersion)}.blockmap`, baseUrl);
    return [oldBlockMapUrl, newBlockMapUrl];
}
//# sourceMappingURL=util.js.map