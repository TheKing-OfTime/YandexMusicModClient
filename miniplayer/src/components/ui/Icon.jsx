import React from 'react';

export default function Icon({ name, size = 24, color = 'currentColor', ...props }) {
    return (
        <svg width={size} height={size} fill={color} aria-hidden="true" {...props}>
            <use xlinkHref={`../../assets/sprite.svg#${name}`} />
        </svg>
    );
}
