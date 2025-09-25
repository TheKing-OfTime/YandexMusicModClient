const os = require('os');
const electron = require('electron');

// Load the compiled native addon
const native = process.platform === 'win32' ? require('./set_iconic_thumbnail.node') : null;

const NATIVE_EVENTS = {
    WM_DWMSENDICONICTHUMBNAIL: 0x323,
    WM_DWMSENDICONICLIVEPREVIEWBITMAP: 0x326,
};

/**
 * Convert Electron's native window handle buffer into a HWND (number).
 * Works on Windows x64 and x86.
 * @param {Buffer} hwndBuffer - from `win.getNativeWindowHandle()`
 * @returns {number} - HWND as unsigned 64-bit or 32-bit integer
 */
function parseHWND(hwndBuffer) {
    if (os.endianness() !== 'LE') {
        throw new DWMIconicThumbnailError('Non-little-endian system not supported');
    }

    // 64-bit Windows (8 bytes)
    if (hwndBuffer.length === 8) {
        return Number(hwndBuffer.readBigUInt64LE(0));
    }

    // 32-bit Windows (4 bytes)
    if (hwndBuffer.length === 4) {
        return hwndBuffer.readUInt32LE(0);
    }

    throw new DWMIconicThumbnailError('Unknown HWND buffer format');
}


class DWMIconicThumbnailError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DWMIconicThumbnailError';
    }
}

class DWMIconicThumbnail {
    /**
     * Create a DWMIconicThumbnail instance for a given BrowserWindow.
     * @param {electron.BrowserWindow} window
     */
    constructor(window) {
        if (process.platform !== 'win32') throw new DWMIconicThumbnailError('DWMIconicThumbnail is only supported on Windows');
        if (!native) throw new DWMIconicThumbnailError('Native module IconicThumbnail not available');
        this.lastIconicThumbnailImageBuffer = null;
        this.maxWidth = 0;
        this.maxHeight = 0;
        this.lastIcomicThumbnailFlags = 0;
        this.updateWindow(window);
    }

    /**
     * Update the BrowserWindow instance and HWND.
     * @param {electron.BrowserWindow} window
     */
    updateWindow(window) {
        if (!(window instanceof electron.BrowserWindow)) throw new DWMIconicThumbnailError('window must be a electron.BrowserWindow');
        this.window = window;
        this.hwnd = parseHWND(window.getNativeWindowHandle());

        window.hookWindowMessage(NATIVE_EVENTS.WM_DWMSENDICONICTHUMBNAIL, (wParam, lParam) => {
            this.maxHeight = lParam.readUInt16LE(0);
            this.maxWidth = lParam.readUInt16LE(2);
            if (this.lastIconicThumbnailImageBuffer) {
                this.setIconicThumbnail(this.lastIconicThumbnailImageBuffer, this.maxWidth, this.maxHeight, this.lastIcomicThumbnailFlags);
            }
        });

        window.hookWindowMessage(NATIVE_EVENTS.WM_DWMSENDICONICLIVEPREVIEWBITMAP, () => {

        });
    }

    /**
     * Set the iconic thumbnail for a given window using an image buffer.
     * @param {Buffer|Uint8Array} imageBuffer - PNG or JPEG image buffer
     * @param {0|1} [flags=0] - Currently only one flag defined: 1 = DWM_SIT_DISPLAYFRAME (0x00000001)
     * @returns {number} HRESULT (0 = S_OK)
     */
    setIconicThumbnail(imageBuffer, flags = 0) {
        if (!Buffer.isBuffer(imageBuffer)) {
            throw new DWMIconicThumbnailError('imageBuffer must be a Buffer');
        }

        if (!this.lastIconicThumbnailImageBuffer) {
            this.lastIconicThumbnailImageBuffer = imageBuffer;
            return this.probe();
        }

        this.lastIconicThumbnailImageBuffer = imageBuffer;
        this.lastIcomicThumbnailFlags = flags;
        return native.setIconicThumbnail(this.hwnd, this.lastIconicThumbnailImageBuffer, this.maxWidth, this.maxHeight, this.lastIcomicThumbnailFlags);
    }

    /**
     * Clears the custom iconic thumbnail and resets DWM attributes to display the live preview.
     * @param {Buffer} hwndBuffer - From `BrowserWindow.getNativeWindowHandle()`
     * @returns {number} HRESULT (0 = S_OK)
     */
    clearIconicThumbnail() {
        this.lastIconicThumbnailImageBuffer = null;
        this.lastIcomicThumbnailFlags = 0;
        return native.clearIconicThumbnail(this.hwnd);
    }

    /**
     * Probes the window to enable iconic thumbnail support. Forces WM_DWMSENDICONICTHUMBNAIL to be sent. It used for maxWidth and maxHeight determination.
     * Must be called at least once before setting thumbnails.
     * @returns {number} HRESULT (0 = S_OK)
     */
    probe() {
        return native.forceIconicFlags(this.hwnd);
    }

}

const getDWMIconicThumbnailInstance = (() => {
    let instance;
    return (window) => {
        if (!instance) {
            instance = new DWMIconicThumbnail(window);
        }
        return instance;
    }
})();

module.exports = {
    getDWMIconicThumbnailInstance,
    DWMIconicThumbnail,
    DWMIconicThumbnailError,
};
