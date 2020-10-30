import React from 'react';
import classNames from 'classnames';

// STYLE
import './Text.scss';

// IMPORT
import * as Types from './types';

const Text = (props: Types.TextProps) => {
    const { children, small, bold, italic, align } = props;

    return (
        <p className={classNames('Text', {
            'Text--small': small,
            'Text--bold': bold,
            'Text--italic': italic,
            'Text--center': align === 'center',
            'Text--right': align === 'right',
            'Text--justify': align === 'justify',
        })}>
            {children}
        </p>
    )
}

export {
    Text
}