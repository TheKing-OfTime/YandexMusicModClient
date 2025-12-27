import { createContext, useContext, useEffect, useState, useRef } from 'react';

const PlayerContext = createContext({
    playerState: {},
    settingsState: {},
    ready: false,
});

export function PlayerProvider({ children }) {
    const [playerState, setPlayerState] = useState(null);
    const [settingsState, setSettingsState] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let gotPlayer = false;
        let gotSettings = false;

        const unsub1 = window.desktopEvents?.on('MINIPLAYER_PLAYER_STATE', (_, state) => {
            setPlayerState(state);
            gotPlayer = true;
            if (gotSettings) setReady(true);
        });

        const unsub2 = window.desktopEvents?.on('MINIPLAYER_SETTINGS_STATE', (_, state) => {
            setSettingsState(state);
            console.log(state);
            gotSettings = true;
            if (gotPlayer) setReady(true);
        });

        window.desktopEvents?.send('MINIPLAYER_READY');

        return () => {
            unsub1?.();
            unsub2?.();
        };
    }, []);

    if (!ready) {
        return null;
    }

    return (
        <PlayerContext.Provider value={{ playerState, settingsState, ready }}>
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    return useContext(PlayerContext);
}

export { PlayerContext };
