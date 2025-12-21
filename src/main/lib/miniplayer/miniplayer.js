const electron = require('electron');
const path = require('path');

class MiniPlayer {
    constructor() {
        this.window = null;
        this.onPlayerActionCallback = null;
        this.lastPlayerState = null;
        this.handleMiniPlayerEvents();
    }

    destroy() {
        this.window.close();
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
            width: 400,
            height: 450,
            minWidth: 275,
            minHeight: 365,
            backgroundColor: '#000000',
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

        // this.window.loadFile(path.join(__dirname, './miniplayer.html'));
        this.window.loadURL('http://localhost:5173/');

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
