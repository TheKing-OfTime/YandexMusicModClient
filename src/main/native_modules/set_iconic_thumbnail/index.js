const path = require('path');
const os = require('os');

// Load the compiled native addon
const native = require('./set_iconic_thumbnail.node');

/**
 * Convert Electron's native window handle buffer into a HWND (number).
 * Works on Windows x64 and x86.
 * @param {Buffer} hwndBuffer - from `win.getNativeWindowHandle()`
 * @returns {number} - HWND as unsigned 64-bit or 32-bit integer
 */
function parseHWND(hwndBuffer) {
    if (os.endianness() !== 'LE') {
        throw new Error('Non-little-endian system not supported');
    }

    // 64-bit Windows (8 bytes)
    if (hwndBuffer.length === 8) {
        return Number(hwndBuffer.readBigUInt64LE(0));
    }

    // 32-bit Windows (4 bytes)
    if (hwndBuffer.length === 4) {
        return hwndBuffer.readUInt32LE(0);
    }

    throw new Error('Unknown HWND buffer format');
}

/**
 * Set the iconic thumbnail for a given window using an image buffer.
 * @param {Buffer|Uint8Array} imageBuffer - PNG or JPEG image buffer
 * @param {Buffer} hwndBuffer - From `BrowserWindow.getNativeWindowHandle()`
 * @returns {number} HRESULT (0 = S_OK)
 */
function setIconicThumbnail(hwndBuffer, imageBuffer) {
    if (!Buffer.isBuffer(imageBuffer)) {
        throw new Error('imageBuffer must be a Buffer');
    }

    const hwnd = parseHWND(hwndBuffer);
    return native.setIconicThumbnail(hwnd, imageBuffer);
}

/**
 * Clears the custom iconic thumbnail and resets DWM attributes to display the live preview.
 * @param {Buffer} hwndBuffer - From `BrowserWindow.getNativeWindowHandle()`
 * @returns {number} HRESULT (0 = S_OK)
 */
function clearIconicThumbnail(hwndBuffer) {
    const hwnd = parseHWND(hwndBuffer);
    return native.clearIconicThumbnail(hwnd);
}

module.exports = {
    setIconicThumbnail,
    clearIconicThumbnail
};