import PlayButton from '../PlayButton/PlayButton.jsx';
import PlayerActionButton from '../PlayerActionButton/PlayerActionButton.jsx';

import './BottomActions.css'
import { usePlayer } from '../../../../../contexts/PlayerContext.jsx';

export default function BottomActions() {
    const { playerState, settingsState } = usePlayer();

    function LeftFeedbackButton() {
        if (settingsState.playerBarEnhancement.showDislikeButton) {
            return <PlayerActionButton type='secondary' name='dislike' value={playerState.actionsStore?.isDisliked}/>
        }

        return <PlayerActionButton type='secondary' name='like' value={playerState.actionsStore?.isLiked}/>
    }

    function RightFeedbackButton() {
        if (settingsState.playerBarEnhancement.showDislikeButton) {
            return <PlayerActionButton type='secondary' name='like' value={playerState.actionsStore?.isLiked}/>
        }

        return <PlayerActionButton type='secondary' name='dislike' value={playerState.actionsStore?.isDisliked}/>
    }

    return (
        <div className="BottomPlayerActions">
            <LeftFeedbackButton />
            <PlayerActionButton type='secondary' name='shuffle' value={playerState.actionsStore?.shuffle} active={playerState.availableActions?.shuffle} />
            <PlayerActionButton name='backward' active={playerState.availableActions?.moveBackward} />
            <PlayButton isPlaying={playerState.status !== 'paused'} useYellowButton={!settingsState.playerBarEnhancement.whitePlayButton} />
            <PlayerActionButton name='forward' active={playerState.availableActions?.moveForward}/>
            <PlayerActionButton type='secondary' name='repeat' value={playerState.actionsStore?.repeat} active={playerState.availableActions?.repeat}/>
            <RightFeedbackButton />
        </div>
    )
}
