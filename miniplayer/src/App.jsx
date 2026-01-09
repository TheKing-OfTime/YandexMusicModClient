import { useMemo } from 'react';

import hex2hsl from './utils/hex2hsl.js';

import TitleBar from './components/layout/TitleBar/TitleBar.jsx';
import Cover from './components/layout/Cover/Cover.jsx';
import Controls from './components/layout/Controls/Controls.jsx';
import TrackMeta from './components/layout/TrackMeta/TrackMeta.jsx';

import { PlayerProvider, usePlayer } from './contexts/PlayerContext.jsx';

import './App.css';

function App() {
    const { playerState, settingsState } = usePlayer();

    const bgColor = useMemo(
        () =>
            !settingsState.playerBarEnhancement.disablePerTrackColors && playerState.track?.derivedColors?.average
                ? {
                      '--player-bg-color': hex2hsl(playerState.track.derivedColors.average, 20).css,
                  }
                : undefined,
        [playerState.track?.derivedColors?.average, settingsState.playerBarEnhancement.disablePerTrackColors],
    );

    return (
        <>
            <TitleBar />
            <main className="main" style={bgColor}>
                <div className="Track_container">
                    <Cover />
                    <TrackMeta />
                </div>
                <Controls />
            </main>
        </>
    );
}

export default function Main() {
    return (
        <PlayerProvider>
            <App />
        </PlayerProvider>
    );
}
