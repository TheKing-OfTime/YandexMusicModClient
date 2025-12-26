import { useCallback, useState, useEffect } from "react";
import ProgressBar from './components/ProgressBar/ProgressBar.jsx';
import BottomActions from './components/BottomActions/BottomActions.jsx';

import './Controls.css'

export default function Controls({ playerState }) {

    const [progress, setProgress] = useState(playerState.progress);

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
                onSeeked={onSeeked}
            />
            <BottomActions playerState={playerState} />
        </div>
    );
}
