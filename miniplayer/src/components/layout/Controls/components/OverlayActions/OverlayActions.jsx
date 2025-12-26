import PlayerActionButton from '../PlayerActionButton/PlayerActionButton.jsx';

import './OverlayActions.css'

export default function OverlayActions({ playerState }) {

    return (
        <div className="OverlayPlayerActions">
            <div className='OverlayPlayerActions_sonata_row'>
                <PlayerActionButton type='overlay' name='shuffle' value={playerState.actionsStore?.shuffle} active={playerState.availableActions?.shuffle} size={38}/>
                <PlayerActionButton type='overlay_primary' name='backward' active={playerState.availableActions?.moveBackward} size={40}/>
                <PlayerActionButton type='overlay_primary' name='play' value={playerState.status !== 'paused'} size={52}/>
                <PlayerActionButton type='overlay_primary' name='forward' active={playerState.availableActions?.moveForward} size={40}/>
                <PlayerActionButton type='overlay' name='repeat' value={playerState.actionsStore?.repeat} active={playerState.availableActions?.repeat} size={38}/>
            </div>
            <div className='OverlayPlayerActions_feedback_row'>
                <PlayerActionButton type='overlay_primary'  name='dislike' value={playerState.actionsStore?.isDisliked}/>
                <PlayerActionButton type='overlay_primary'  name='like' value={playerState.actionsStore?.isLiked}/>
            </div>
        </div>
    )
}
