import { useEffect, useMemo, useState } from 'react';

import hex2hsl from './utils/hex2hsl.js';

import TitleBar from './components/layout/TitleBar/TitleBar.jsx';
import Cover from './components/layout/Cover/Cover.jsx';
import Controls from './components/layout/Controls/Controls.jsx';
import TrackMeta from './components/layout/TrackMeta/TrackMeta.jsx';


import './App.css';

function App() {
    const [playerState, setPlayerState] = useState({});

    const bgColor = useMemo(
        () =>
            playerState.track?.derivedColors?.average
                ? {
                      '--player-bg-color': hex2hsl(playerState.track.derivedColors.average, 20).css,
                  }
                : undefined,
        [playerState.track?.derivedColors?.average],
    );

    useEffect(() => {
        const unsub = window.desktopEvents?.on('MINIPLAYER_PLAYER_STATE', (event, state) => {
            setPlayerState(state);
        });

        window.desktopEvents.send('MINIPLAYER_READY');

        return () => {
            unsub && unsub();
        };
    }, []);

    return (
        <>
            <TitleBar />
            <main className="main" style={bgColor}>
                <Cover coverUri={playerState.track?.coverUri} nextCoverUri={playerState.nextTrack?.coverUri} />
                <TrackMeta track={playerState.track}/>
                <Controls playerState={playerState}/>
            </main>
        </>
    );
}

export default App;
