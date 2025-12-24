import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

export default function Slider({
    value,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    orientation = 'horizontal', // 'horizontal' | 'vertical'
    onChange,
    className = '',
    style = {},
    disabled = false,
    ...rest
}) {
    const isControlled = value !== undefined;
    const [internal, setInternal] = useState(defaultValue);
    const ref = useRef(null);

    useEffect(() => {
        if (!isControlled) return;
        // keep CSS custom property used for WebKit progress coloring in sync
        if (ref.current) {
            const percent = ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100 || 0;
            ref.current.style.setProperty('--value', String(percent));
        }
    }, [value, min, max, isControlled]);

    useEffect(() => {
        if (ref.current && !isControlled) {
            const percent = ((Number(internal) - Number(min)) / (Number(max) - Number(min))) * 100 || 0;
            ref.current.style.setProperty('--value', String(percent));
        }
    }, [internal, min, max, isControlled]);

    const handleChange = (e) => {
        const next = e.target.valueAsNumber ?? Number(e.target.value);
        if (!isControlled) setInternal(next);
        if (typeof onChange === 'function') onChange(next, e);
        // update CSS var for visual progress
        if (ref.current) {
            const percent = ((Number(next) - Number(min)) / (Number(max) - Number(min))) * 100 || 0;
            ref.current.style.setProperty('--value', String(percent));
        }
    };

    const currentValue = isControlled ? value : internal;
    const baseClass = `slider ${orientation} ${disabled ? 'disabled' : ''} ${className}`.trim();

    return (
        <div
            className={baseClass}
            style={style}
            ref={ref}
            aria-orientation={orientation}
        >
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={currentValue}
                onChange={handleChange}
                disabled={disabled}
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={currentValue}
                {...rest}
            />
        </div>
    );
}
