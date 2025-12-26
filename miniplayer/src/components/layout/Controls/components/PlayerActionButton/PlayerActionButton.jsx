import { useCallback } from 'react';
import Icon from '../../../../ui/Icon.jsx';

import './PlayerActionButton.css'

const actionMap = {
    forward: {
        icon: 'next_xxs',
        action: 'MOVE_FORWARD',
    },
    backward: {
        icon: 'previous_xxs',
        action: 'MOVE_BACKWARD',
    },
    shuffle: {
        toggled: {
            icon: 'shuffle_xs',
            color: '#e6e6e6',
        },
        icon: 'shuffle_xs',
        action: 'TOGGLE_SHUFFLE',
    },
    repeat: {
        values: {
            'none': {
                icon: 'repeat_xs',
            },
            'one': {
                icon: 'repeat_one_xs',
                color: 'white',
            },
            'context': {
                icon: 'repeat_xs',
                color: 'white',
            },
        },
        icon: 'repeat_xs',
        action: 'TOGGLE_REPEAT',
    },
    like: {
        toggled: {
            icon: 'liked_xs',
        },
        icon: 'like_xs',
        action: 'TOGGLE_LIKE',
    },
    dislike: {
        toggled: {
            icon: 'disliked_xs',
            action: 'TOGGLE_DISLIKE',
        },
        icon: 'dislike_xs',
        action: 'TOGGLE_DISLIKE MOVE_FORWARD',
    },
}

const calculateState = (name, value) => {
    let state = actionMap[name];

    if (actionMap[name]?.values) {
        state = actionMap[name].values[value] ? actionMap[name].values[value] : {};
    } else if (actionMap[name]?.toggled) {
        state = value ? actionMap[name]?.toggled : {};
    }

    return {...actionMap[name], ...state};
}

export default function PlayerActionButton({ value, active= true, name, size = 48, type='primary' }) {


    const state = calculateState(name, value);

    const onClick = useCallback(() => {
        state.action.split(' ').forEach(action => {
            window.desktopEvents?.send('MINIPLAYER_PLAYER_ACTION', action);
        });
    }, [state]);

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={name}
            className={'PlayerActionButton ' + 'PlayerActionButton_' + type}
            disabled={!active}
            style={{
                height: size + 'px',
                color: state.color,
            }}
        >
            <Icon name={state.icon} size={size-20} />
        </button>
    );
}
