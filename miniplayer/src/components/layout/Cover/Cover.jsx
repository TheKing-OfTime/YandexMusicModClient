import { useEffect, useState } from 'react';

import Icon from '../../ui/Icon.jsx';
import getCoverUrls from '../../../utils/getCoverUrls.js';

import './Cover.css'

export default function Cover({ coverUri, nextCoverUri=undefined }) {
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
    });

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
        <div className="Cover_container">
            <img
                className="Cover_image"
                src={urls.src}
                srcSet={urls.srcSet}
                alt=""
                loading="lazy"
                sizes='70vmin'
            />
        </div>
    );
}
