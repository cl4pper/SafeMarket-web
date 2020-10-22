import React from 'react';
import classNames from 'classnames';

// STYLE
import './Title.scss';

// IMPORT
import * as Types from './types';

const Title = (props: Types.TitleProps) => {
    const { title, small, bold, italic, align } = props;

    return (
        <p className={classNames('Title', {
            'Title--small': small,
            'Title--bold': bold,
            'Title--italic': italic,
            'Title--center': align === 'center',
            'Title--right': align === 'right',
            'Title--justify': align === 'justify',
        })}>
            {title}
        </p>
    )
}

export {
    Title
}