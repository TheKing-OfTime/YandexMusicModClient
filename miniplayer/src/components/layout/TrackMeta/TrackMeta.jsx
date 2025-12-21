import { useMemo } from 'react';
import './TrackMeta.css'

export default function TrackMeta({track}) {

    const artists = useMemo(() => {
        return track?.artists?.map(artist => artist.name).join(', ')
    }, [track?.artists]);

    return (
        <div className="TrackMeta_container">
            <div className="TrackMeta_title">{track?.title}</div>
            <div className="TrackMeta_artists">{artists}</div>
        </div>
    );
}
