"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loader = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const electron_1 = require("electron");
const FILE_NOT_FOUND = -6;
const resolvePath = async (filePath) => {
    try {
        const extension = node_path_1.default.extname(filePath);
        const normalizedFilePath = filePath && extension ? filePath : `${filePath}.html`;
        const result = await promises_1.default.stat(normalizedFilePath);
        if (result.isFile()) {
            return normalizedFilePath;
        }
        if (result.isDirectory()) {
            return await resolvePath(node_path_1.default.join(normalizedFilePath, 'index.html'));
        }
    }
    catch (error) { }
    return null;
};
const loader = (options) => {
    const serveOptions = {
        ...options
    };
    serveOptions.buildPath = node_path_1.default.resolve(electron_1.app.getAppPath(), options.buildPath);
    const fileProtocolHandler = async (request, callback) => {
        const pathname = new URL(request.url).pathname;
        const filePath = node_path_1.default.join(serveOptions.buildPath, decodeURIComponent(pathname));
        const resolvedIndexPath = await resolvePath(filePath);
        const fileExtension = node_path_1.default.extname(filePath);
        if (resolvedIndexPath || !fileExtension || ['.html', '.asar'].includes(fileExtension)) {
            const fallbackIndexPath = node_path_1.default.join(serveOptions.buildPath, pathname === '/' ? 'index.html' : 'not-found.html');
            callback({
                path: resolvedIndexPath || fallbackIndexPath
            });
        }
        else {
            callback({ error: FILE_NOT_FOUND });
        }
    };
    electron_1.protocol.registerSchemesAsPrivileged([
        {
            scheme: serveOptions.protocol,
            privileges: {
                standard: true,
                secure: true,
                allowServiceWorkers: true,
                supportFetchAPI: true,
                bypassCSP: serveOptions.bypassCSP,
                corsEnabled: serveOptions.isCorsEnabled
            }
        }
    ]);
    electron_1.app.on('ready', () => {
        electron_1.session.defaultSession.protocol.registerFileProtocol(serveOptions.protocol, fileProtocolHandler);
    });
    return async (window, path) => {
        const pathname = path ? `/${path}` : '';
        await window.loadURL(`${serveOptions.protocol}://${serveOptions.hostname}${pathname}`);
    };
};
exports.loader = loader;
