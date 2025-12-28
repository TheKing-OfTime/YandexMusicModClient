import { useMemo } from 'react';
import './TrackMeta.css'
import { usePlayer } from '../../../contexts/PlayerContext.jsx';

export default function TrackMeta() {

    const { playerState } = usePlayer();
    const track = playerState.track;

    const artists = useMemo(() => {
        return track?.artists?.map(artist => artist.name).join(', ')
    }, [track?.artists]);

    return (
        <div className="TrackMeta_container">
            <div className="TrackMeta_title_container">
                <span className='TrackMeta_title' title={track?.title}>
                    {track?.title}
                </span>
                {
                    track?.version && <span className='TrackMeta_version' title={track.version}>
                        {track.version}
                    </span>
                }
            </div>
            <div className="TrackMeta_artists_container">
                <span className='TrackMeta_artists' title={artists}>
                    {artists}
                </span>
            </div>
        </div>
    );
}
