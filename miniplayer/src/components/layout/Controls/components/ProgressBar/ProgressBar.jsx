import { useEffect, useState } from 'react';

import Slider from '../../../../ui/Slider/Slider.jsx'

import './ProgressBar.css'

export default function ProgressBar({ duration, initialProgress, isPlaying, onSeeked= undefined }) {

    const [progress, setProgress] = useState(initialProgress)
    const [trackBeganAt, setTrackBeganAt] = useState(Date.now())
    const [isSeeking, setIsSeeking] = useState(false);

    useEffect(() => {
        setTrackBeganAt(Date.now() - initialProgress * 1000);
        setProgress(initialProgress);
    }, [initialProgress])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = Date.now();
            const newProgress = (now - trackBeganAt) / 1000;
            if (isPlaying && !isSeeking) setProgress(newProgress);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [trackBeganAt, isPlaying, isSeeking]);

    return (
        <div className="ProgressBar_container">
            <Slider
                className="ProgressBar_slider"
                value={progress}
                min={0}
                max={duration / 1000}
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
        </div>
    );
}
