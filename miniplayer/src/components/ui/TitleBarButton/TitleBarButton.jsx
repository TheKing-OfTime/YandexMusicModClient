import { useCallback } from 'react';
import Icon from '../Icon.jsx';

import { usePlayer } from '../../../contexts/PlayerContext.jsx';

import './TitleBarButton.css';


function TitleBarButtonIcon({ variant }) {

    const { settingsState } = usePlayer();

    switch (variant) {
        case 'quit':
            return (
                <Icon
                    name="titlebar_quit" size="10" className="TitleBar_icon"
                />
            );
        case 'pin':
            return <Icon name={(settingsState.miniplayer?.window?.alwaysOnTop ?? true) ? 'pin_filled_xs'  : 'pin_xs'} size="12" className="TitleBar_icon" />;
    }

}

export default function TitleBarButton({ variant }) {
    const btnVariant = {};
    switch (variant) {
        case 'quit':
            btnVariant.id = 'quit';
            btnVariant.className = 'TitleBar_QuitButton';
            btnVariant.callback = useCallback(() => {
                window.close();
            }, [])
            break;
        case 'pin':
            btnVariant.id = 'pin';
            btnVariant.className = 'TitleBar_Button';
            btnVariant.callback = useCallback(() => {
                window.desktopEvents?.send('MINIPLAYER_TOGGLE_PIN');
            }, [])
            break;
    }


    return (
        <button id={btnVariant.id} className={btnVariant.className} onClick={btnVariant.callback}>
            <TitleBarButtonIcon variant={variant}/>
        </button>
    )
}
