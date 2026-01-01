import { useCallback, useEffect, useState } from 'react';


import Slider from '../../../../ui/Slider/Slider.jsx'
import Icon from '../../../../ui/Icon.jsx';

import './Volume.css'


export default function Volume({ value=0.5, variant = 'default', style=undefined, alwaysShow = true}) {

    const [unmuteVolume, setUnmuteVolume] = useState(value);

    const onChange = useCallback((value) => {
        window.desktopEvents?.send('MINIPLAYER_PLAYER_ACTION', 'SET_VOLUME', value);
    }, []);

    const onWheel = useCallback((e) => {
        e.preventDefault();
        let newVolume = (value ?? 0) + (e.deltaY < 0 ? 0.01 : -0.01);
        newVolume = Math.min(1, Math.max(0, newVolume));
        onChange(newVolume);
    }, [value, onChange]);

    const toggleMute = useCallback(() => {
        setUnmuteVolume(value);
        onChange(value ? 0 : unmuteVolume);
    }, [value, unmuteVolume, setUnmuteVolume, onChange]);

    return (
        <div className={'Volume_container ' + (variant ? 'Volume_container_' + variant : '')} style={style} onWheel={onWheel}>
            <button className={'Volume_MuteButton ' + (!alwaysShow ? 'Volume_hover' : '')} onClick={toggleMute}>
                <Icon size={28} name={(value ?? 0) > 0 ? 'volume_xs' : 'volumeOff_xs'} />
            </button>
            <Slider className="Volume_slider" value={value} min={0} max={1} step={0.01} onChange={onChange} />
            <span className={'Volume_label ' + (!alwaysShow ? 'Volume_hover' : '')}>{Math.round(value * 100)}%</span>
        </div>
    );
}
