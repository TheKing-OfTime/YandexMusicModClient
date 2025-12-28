import { useCallback, useState, useEffect } from "react";
import ProgressBar from './components/ProgressBar/ProgressBar.jsx';
import BottomActions from './components/BottomActions/BottomActions.jsx';

import './Controls.css'
import { usePlayer } from '../../../contexts/PlayerContext.jsx';
import Volume from './components/Volume/Volume.jsx';

export default function Controls() {

    const { playerState, settingsState } = usePlayer();

    const [progress, setProgress] = useState(playerState.progress);

    const alwaysShow = settingsState.miniplayer.alwaysShowPlayerTimestamps ?? settingsState.playerBarEnhancement.alwaysShowPlayerTimestamps

    const onSeeked = useCallback((newProgress) => {
        window.desktopEvents?.send('MINIPLAYER_PLAYER_ACTION', 'SET_PROGRESS', newProgress);
    }, []);

    useEffect(() => {
        if (playerState.status !== 'buffering' && playerState.status !== 'loadingMediaSource') {
            setProgress(playerState.progress);
        }
    }, [playerState.progress, playerState.status]);

    return (
        <div className="Controls_container">
            <ProgressBar
                duration={playerState.track?.durationMs}
                initialProgress={progress}
                initialTimestamp={playerState.timestamp}
                isPlaying={playerState.isPlaying}
                alwaysShowTimestamp={alwaysShow}
                onSeeked={onSeeked}
            />
            <BottomActions />
            <Volume style={{ marginTop: '8px' }} value={playerState.volume} alwaysShow={alwaysShow}/>
        </div>
    );
}
