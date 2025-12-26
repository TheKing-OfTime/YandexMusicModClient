const electron = require('electron');
const path = require('path');
const fs = require('fs');

const IS_DEV = true

class MiniPlayer {
    constructor() {
        this.window = null;
        this.onPlayerActionCallback = null;
        this.lastPlayerState = null;
        this.handleMiniPlayerEvents();
    }

    destroy() {
        if (this.window && !this.window.isDestroyed()) {
            this.window.close();
        }
        this.window = null;
    }

    handleMiniPlayerEvents() {
        electron.ipcMain.on('MINIPLAYER_PLAYER_ACTION', (event, action, value) => {
            this.onPlayerActionCallback?.(action, value);
        });
        electron.ipcMain.on('MINIPLAYER_READY', (event) => {
            this.window.webContents.send('MINIPLAYER_PLAYER_STATE', this.lastPlayerState);
        });
    }

    createMiniPlayer() {
        if (this.window) {
            this.window.focus();
            return this.window;
        }

        this.window = new electron.BrowserWindow({
            width: 380,
            height: 590,
            minWidth: 275,
            minHeight: 380,
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

        this.window.once('ready-to-show', () => {
            this.window.show();
            this.window.setAlwaysOnTop(true, "normal"); // Поверх всех окон. Даже фулскрин приложений
        });

        this.window.on('closed', () => {
            this.window = null;
        });

        return this.window;
    }

    handlePlayerState(data) {
        this.window?.webContents.send('MINIPLAYER_PLAYER_STATE', data);
        this.lastPlayerState = data;
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
