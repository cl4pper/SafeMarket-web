import React from 'react';

// STYLE
import './Chip.scss';

// TYPES
import * as Types from './types';

const Chip = (props: Types.ChipProps) => {
    const { label } = props;

    return (
        <p className="Chip">
            {label ? label : <i>(none)</i>}
        </p>
    )
};

export {
    Chip
};