import Icon from '../../ui/Icon.jsx';

import './Cover.css';

export default function Cover({coverUri}) {

    const src = coverUri ? 'https://' + coverUri.replace('%%', '400x400') : undefined;
    const srcSet = coverUri ? (
        'https://' + coverUri.replace('%%', '200x200') + ' 200w, ' +
        'https://' + coverUri.replace('%%', '400x400') + ' 400w, ' +
        'https://' + coverUri.replace('%%', '800x800') + ' 800w'
    ) : undefined;

    return (
        <div className="Cover_container">
            {
                !src && <div className="Cover_image_placeholder">
                    <Icon className="Cover_image_placeholder_icon" name='note_xl' size={100} />
                </div>
            }
            {src && <img className="Cover_image" srcSet={srcSet} src={src} alt="" />}
        </div>
    );
}
