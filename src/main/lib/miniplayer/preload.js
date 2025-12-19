const electron = require('electron');

electron.contextBridge.exposeInMainWorld('desktopEvents', {
    send(name, ...args) {
        electron.ipcRenderer.send(name, ...args);
    },
    on(name, callback) {
        const listener = (event, ...args) => {
            callback(event, ...args);
        };

        electron.ipcRenderer.on(name, listener);

        return () => {
            electron.ipcRenderer.off(name, listener);
        };
    },
    invoke(name, ...args) {
        return electron.ipcRenderer.invoke(name, ...args);
    },
    emit(name, ...args) {
        return electron.ipcRenderer.emit(name, ...args);
    },
});
