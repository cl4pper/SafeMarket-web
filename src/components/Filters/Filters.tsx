import React from 'react';

// STYLE
import './Filters.scss';

import * as Types from './types';

// COMPONENTS
import { ButtonText } from '@lib';

const Filters = (props: Types.FiltersProps) => {
    return (
        <div className="Filters" data-testid="Filters" role="menu">
            <div className="Filters__icon" onClick={() => console.log('Open filters!')}>
                <ButtonText
                    id="filter-icon"
                    underline
                    onClick={() => window.alert('Open filter menu.')}>Filtros</ButtonText>
            </div>
        </div>
    )
};

export {
    Filters
}