import { useCallback } from 'react';
import Icon from '../../../../ui/Icon.jsx';

import './PlayButton.css'

export default function PlayButton({ isPlaying, size = 48 }) {

    const onClick = useCallback(() => {
        window.desktopEvents?.send('MINIPLAYER_PLAYER_ACTION', 'TOGGLE_PLAY');
    }, []);

    return (
       <button
            type="button"
            onClick={onClick}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            aria-pressed={!!isPlaying}
            className='PlayButton'
        >
            <Icon name={!isPlaying ? 'play_filled_l' : 'pause_filled_l'} size={size} />
        </button>
   )
}
