import React from 'react';
import url from "../../assets/sprite.svg";

export default function Icon({ name, size = 24, color = 'currentColor', ...props }) {
    return (
        <svg width={size} height={size} fill={color} aria-hidden="true" {...props}>
            <use xlinkHref={`${url}#${name}`} />
        </svg>
    );
}
