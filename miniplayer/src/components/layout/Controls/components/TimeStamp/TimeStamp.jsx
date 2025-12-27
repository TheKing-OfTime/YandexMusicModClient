import React, { useMemo } from 'react';
import './TimeStamp.css'

export default function TimeStamp({ seconds = 0, className = '' , title }) {

    const formatted = useMemo(() => {
        const total = Math.max(0, Math.floor(Number(seconds) || 0));
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const secs = total % 60;

        const pad2 = (n) => (n < 10 ? `0${n}` : String(n));

        // Форматирование времени:
        // - часы > 0: "h:mm:ss"
        // - минуты > 0: "m:ss"
        // - меньше минуты: "0:ss" (секунды с ведущим нулём)
        if (hours > 0) {
            return `${hours}:${pad2(minutes)}:${pad2(secs)}`;
        }

        if (minutes > 0) {
            return `${minutes}:${pad2(secs)}`;
        }

        return `0:${pad2(secs)}`;
    }, [seconds]);

    return (
        <div className={`TimeStamp_container ${className}`.trim()} title={title || formatted}>
            {formatted}
        </div>
    );
}
