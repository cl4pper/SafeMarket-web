import React from 'react';
import classNames from 'classnames';

// STYLE
import './Button.scss';

// TYPES
import * as Types from './types';

const Button = (props: Types.ButtonProps) => {
    const { id, label, onClick, secondary } = props;

    return (
        <button
            id={id}
            data-testid={id}
            onClick={() => onClick()}
            className={classNames('Button', {
                'Button--secondary': secondary
            })}>
            {label}
        </button>
    )
};

export {
    Button
};