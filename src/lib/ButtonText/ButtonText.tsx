import React from 'react';
import classNames from 'classnames';

// STYLE
import './ButtonText.scss';

import * as Types from './types';

const ButtonText = (props: Types.ButtonTextProps) => {
    const { id, small, underline, onClick, children } = props;

    return (
        <p
            id={id}
            data-testid={id}
            onClick={() => onClick()}
            className={classNames('ButtonText', {
            'ButtonText--small': small,
            'ButtonText--underline': underline,
        })}>{children}</p>
    )
};

export {
    ButtonText
}