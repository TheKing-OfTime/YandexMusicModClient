import { useCallback } from "react";
import ProgressBar from './components/ProgressBar/ProgressBar.jsx';

import './Controls.css'

export default function Controls({ playerState }) {

    const onSeeked = useCallback((newProgress) => {
        window.desktopEvents?.send('MINIPLAYER_PLAYER_ACTION', 'SET_PROGRESS', newProgress);
    }, []);

    return (
        <div className="Controls_container">
            <ProgressBar
                duration={playerState.track?.durationMs}
                initialProgress={playerState.progress}
                isPlaying={playerState.isPlaying}
                onSeeked={onSeeked}
            />
        </div>
    );
}
