import { useCallback } from 'react';
import Icon from '../Icon.jsx';

import './TitleBarButton.css';


function TitleBarButtonIcon({ variant }) {
    switch (variant) {
        case 'quit':
            return (
                <Icon
                    name="titlebar_quit" size="10" className="TitleBar_icon"
                />
            );
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
    }


    return (
        <button id={btnVariant.id} className={btnVariant.className} onClick={btnVariant.callback}>
            <TitleBarButtonIcon variant={variant}/>
        </button>
    )
}
