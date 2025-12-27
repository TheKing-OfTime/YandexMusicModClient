import { useEffect } from 'react';

import Icon from '../../ui/Icon.jsx';
import getCoverUrls from '../../../utils/getCoverUrls.js';

import OverlayActions from '../Controls/components/OverlayActions/OverlayActions.jsx';

import './Cover.css'
import { usePlayer } from '../../../contexts/PlayerContext.jsx';

export default function Cover() {
    const { playerState } = usePlayer();

    const coverUri = playerState.track?.coverUri ?? playerState.track?.imageUrl;
    const nextCoverUri = playerState.nextTrack?.coverUri;
    const isGenerative = !!playerState.track?.id?.startsWith?.('generative');

    const urls = getCoverUrls(coverUri);
    const nextUrls = getCoverUrls(nextCoverUri);

    useEffect(() => {
        // Preload next cover
        if (nextCoverUri) {
            const nextImg = new Image();
            nextImg.sizes = '70vmin';
            nextImg.srcset = nextUrls.srcSet;
            nextImg.decode?.().catch(() => {});
        }
    }, [nextCoverUri, nextUrls]);

    if (!urls) {
        return (
            <div className="Cover_container">
                <div className="Cover_image_placeholder">
                    <Icon className="Cover_image_placeholder_icon" name="note_xl" size={100} />
                </div>
            </div>
        );
    }

    return (
        <div className={'Cover_container ' + (isGenerative ? ' Cover_container_generative' : '')}>
            <img className="Cover_image" src={urls.src} srcSet={urls.srcSet} alt="" loading="lazy" sizes="70vmin" />
            <OverlayActions />
        </div>
    );
}
