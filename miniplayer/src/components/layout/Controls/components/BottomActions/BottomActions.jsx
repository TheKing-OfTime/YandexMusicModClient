import PlayButton from '../PlayButton/PlayButton.jsx';
import PlayerActionButton from '../PlayerActionButton/PlayerActionButton.jsx';

import './BottomActions.css'

export default function BottomActions({ playerState }) {

    return (
        <div className="BottomPlayerActions">
            <PlayerActionButton type='secondary' name='dislike' value={playerState.actionsStore?.isDisliked}/>
            <PlayerActionButton type='secondary' name='shuffle' value={playerState.actionsStore?.shuffle} active={playerState.availableActions?.shuffle} />
            <PlayerActionButton name='backward' active={playerState.availableActions?.moveBackward} />
            <PlayButton isPlaying={playerState.status !== 'paused'} />
            <PlayerActionButton name='forward' active={playerState.availableActions?.moveForward}/>
            <PlayerActionButton type='secondary' name='repeat' value={playerState.actionsStore?.repeat} active={playerState.availableActions?.repeat}/>
            <PlayerActionButton type='secondary' name='like' value={playerState.actionsStore?.isLiked}/>
        </div>
    )
}
