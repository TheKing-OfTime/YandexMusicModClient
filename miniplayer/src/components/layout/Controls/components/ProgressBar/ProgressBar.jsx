import { useEffect, useState } from 'react';

import Slider from '../../../../ui/Slider/Slider.jsx'

import './ProgressBar.css'
import TimeStamp from '../TimeStamp/TimeStamp.jsx';

export default function ProgressBar({ duration, initialProgress, initialTimestamp, isPlaying, onSeeked= undefined, alwaysShowTimestamp = false }) {

    const [progress, setProgress] = useState(initialProgress)
    const [trackBeganAt, setTrackBeganAt] = useState();
    const [isSeeking, setIsSeeking] = useState(false);

    useEffect(() => {
        setTrackBeganAt(initialTimestamp - initialProgress * 1000);
        setProgress(initialProgress);
    }, [initialProgress, initialTimestamp])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = Date.now();
            const newProgress = (now - trackBeganAt) / 1000;
            if (isPlaying && !isSeeking) setProgress(newProgress);
        }, 250);

        return () => clearInterval(intervalId);

    }, [trackBeganAt, isPlaying, isSeeking]);

    return (
        <div className="ProgressBar_container">
            <TimeStamp seconds={progress+1} className={!alwaysShowTimestamp ? 'ProgressBar_timestamp_hover' : undefined} />
            <Slider
                className="ProgressBar_slider"
                value={progress}
                min={0}
                max={(duration || Infinity) / 1000}
                step={1}
                onChange={(value) => {
                    setProgress(value);
                }}
                onMouseDown={() => {
                    setIsSeeking(true);
                }}
                onMouseUp={() => {
                    if (typeof onSeeked === 'function') onSeeked(progress);
                    setIsSeeking(false);
                }}
            />
            <TimeStamp seconds={(duration || 0) / 1000} className={!alwaysShowTimestamp ? 'ProgressBar_timestamp_hover' : undefined} />
        </div>
    );
}
