import PlayerActionButton from '../PlayerActionButton/PlayerActionButton.jsx';

import './OverlayActions.css'
import { usePlayer } from '../../../../../contexts/PlayerContext.jsx';
import Volume from '../Volume/Volume.jsx';

export default function OverlayActions() {
    const { playerState, settingsState } = usePlayer();

    function LeftFeedbackButton() {
        if (settingsState.playerBarEnhancement.showDislikeButton) {
            return <PlayerActionButton type='overlay_primary'  name='dislike' value={playerState.actionsStore?.isDisliked}/>
        }

        return <PlayerActionButton type='overlay_primary'  name='like' value={playerState.actionsStore?.isLiked}/>
    }

    function RightFeedbackButton() {
        if (settingsState.playerBarEnhancement.showDislikeButton) {
            return <PlayerActionButton type='overlay_primary'  name='like' value={playerState.actionsStore?.isLiked}/>
        }

        return <PlayerActionButton type='overlay_primary'  name='dislike' value={playerState.actionsStore?.isDisliked}/>
    }

    return (
        <div className="OverlayPlayerActions">
            <div className="OverlayPlayerActions_volume_row">
                <Volume variant='overlay' value={playerState.volume}/>
            </div>
            <div className="OverlayPlayerActions_sonata_row">
                <PlayerActionButton type="overlay" name="shuffle" value={playerState.actionsStore?.shuffle} active={playerState.availableActions?.shuffle} size={38} />
                <PlayerActionButton type="overlay_primary" name="backward" active={playerState.availableActions?.moveBackward} size={40} />
                <PlayerActionButton type={settingsState.playerBarEnhancement.whitePlayButton ? 'overlay_primary' : 'overlay_yellow'} name="play" value={playerState.status !== 'paused'} size={52} />
                <PlayerActionButton type="overlay_primary" name="forward" active={playerState.availableActions?.moveForward} size={40} />
                <PlayerActionButton type="overlay" name="repeat" value={playerState.actionsStore?.repeat} active={playerState.availableActions?.repeat} size={38} />
            </div>
            <div className="OverlayPlayerActions_feedback_row">
                <LeftFeedbackButton />
                <RightFeedbackButton />
            </div>
        </div>
    );
}
