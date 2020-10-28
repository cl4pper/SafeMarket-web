import React from 'react';
import { render } from '@testing-library/react';

import { Chip } from './Chip';
import * as Types from './types';

const label: string = 'Chip label';

const props: Types.ChipProps = {
    label: label,
};

// METHOD TO CREATE COMPONENT TO BE TESTED
function createComponent(props: Types.ChipProps) {
    const innerProps: Types.ChipProps = { ...props };
    const { queryByText } = render(<Chip {...innerProps} />);

    return queryByText(label);
};

describe('Chip', () => {

    it('should be rendered', () => {
        const component = createComponent({ ...props })
        
        expect(component).toBeTruthy();
    });

    it('should render label prop', () => {
        const component = createComponent({ ...props });

        expect(component.textContent).toBe(label);
    });
})