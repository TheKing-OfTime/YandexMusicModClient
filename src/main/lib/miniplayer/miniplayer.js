const electron = require('electron');
const path = require('path');
const fs = require('fs');
const store_js_1 = require('../store.js');

const IS_DEV = false;

class MiniPlayer {
    constructor() {
        this.window = null;
        this.onPlayerActionCallback = null;
        this.lastPlayerState = null;
        this.lastSettingsState = null;
        this.handleMiniPlayerEvents();
    }

    destroy() {
        if (this.window && !this.window.isDestroyed()) {
            this.window.close();
        }
        this.window = null;
    }

    handleMiniPlayerEvents() {
        electron.ipcMain.on('MINIPLAYER_TOGGLE_PIN', () => {
            this.togglePinned();
        });
        electron.ipcMain.on('MINIPLAYER_PLAYER_ACTION', (event, action, value) => {
            this.onPlayerActionCallback?.(action, value);
        });
        electron.ipcMain.on('MINIPLAYER_READY', (event) => {
            this.window.webContents.send('MINIPLAYER_PLAYER_STATE', this.lastPlayerState);
            this.window.webContents.send('MINIPLAYER_SETTINGS_STATE', this.lastSettingsState);
        });
    }

    createMiniPlayer() {
        if (this.window) {
            this.window.focus();
            return this.window;
        }

        const dimensions =
            (this.lastSettingsState?.miniplayer?.saveDimensions ??
                true)
                ? this.lastSettingsState?.miniplayer?.window
                : undefined;
        let position = this.lastSettingsState?.miniplayer?.savePosition
            ? this.lastSettingsState?.miniplayer?.window
            : undefined;

        const isWithinDisplayBounds = (pos, display) => {
            const area = display.workArea;
            return (
                pos.x >= area.x &&
                pos.y >= area.y &&
                pos.x < area.x + area.width &&
                pos.y < area.y + area.height
            );
        };

        let scaleFactor = 1;
        if (position?.x && position?.y) {
            const primaryDisplay = electron.screen.getPrimaryDisplay(),
                nearestDisplay = electron.screen.getDisplayNearestPoint(position);

            scaleFactor =
                1 / (nearestDisplay?.scaleFactor ?? primaryDisplay.scaleFactor);

            if (!isWithinDisplayBounds(position, nearestDisplay)) {
                position = undefined;
            }
        }

        this.window = new electron.BrowserWindow({
            width: (dimensions?.width ?? 380) * scaleFactor,
            height: (dimensions?.height ?? 590) * scaleFactor,
            minWidth: 275,
            minHeight: 380,
            ...((position?.x && position?.y) ? { x: position.x, y: position.y } : { center: true }),
            backgroundColor: '#141414',
            frame: false,
            resizable: true,
            minimizable: false,
            webPreferences: {
                devTools: true,
                webSecurity: true,
                nodeIntegration: false,
                contextIsolation: true,
                preload: path.join(__dirname, 'preload.js'),
            },
        });

        const devUrl = 'http://localhost:5173/';
        const builtIndex = path.join(__dirname, 'renderer', 'index.html');

        if (IS_DEV) {
            this.window.loadURL(devUrl);
        } else {
            if (fs.existsSync(builtIndex)) {
                this.window.loadFile(builtIndex);
            }
        }

        this.window.on("resized", () => {
            const size = this.window.getSize();
            store_js_1.set('modFeatures.miniplayer.window.width', size[0]);
            store_js_1.set('modFeatures.miniplayer.window.height', size[1]);
        });
        this.window.on("moved", () => {
            const position = this.window.getPosition();
            store_js_1.set('modFeatures.miniplayer.window.x', position[0]);
            store_js_1.set('modFeatures.miniplayer.window.y', position[1]);
        });

        this.window.once('ready-to-show', () => {
            this.window.show();
            this.applySettings();
        });

        this.window.on('closed', () => {
            this.window = null;
        });

        return this.window;
    }

    applySettings() {
        if (!this.window || !this.lastSettingsState) return;

        this.window.setAlwaysOnTop(this.lastSettingsState.miniplayer?.window?.alwaysOnTop ?? true, "normal");
        this.window.setSkipTaskbar(
            (this.lastSettingsState.miniplayer?.window?.alwaysOnTop ?? true)
                ? (this.lastSettingsState.miniplayer?.skipTaskbar ?? false)
                : false, "normal"
        );

    }

    updatePlayerState(data) {
        this.lastPlayerState = data;
        this.lastPlayerState.timestamp = Date.now();
        this.window?.webContents.send('MINIPLAYER_PLAYER_STATE', this.lastPlayerState);
    }

    updateSettingsState(data) {
        this.window?.webContents.send('MINIPLAYER_SETTINGS_STATE', data);
        this.lastSettingsState = data;
        this.applySettings();
    }

    onPlayerAction(callback) {
        this.onPlayerActionCallback = callback;
    }

    toggle() {
        if (this.window) {
            this.destroy();
        } else {
            this.createMiniPlayer();
        }
    }

    togglePinned() {
        if (this.lastSettingsState.miniplayer?.window?.alwaysOnTop ?? true) {
            store_js_1.set('modFeatures.miniplayer.window.alwaysOnTop', false);
        } else {
            store_js_1.set('modFeatures.miniplayer.window.alwaysOnTop', true);
        }
    }
}



exports.MiniPlayer = MiniPlayer;
exports.getMiniPlayer = (() => {
    let miniPlayer;
    return () => {
        if (!miniPlayer) {
            miniPlayer = new MiniPlayer();
        }
        return miniPlayer;
    };
})();
