import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from './Button';
import * as Types from './types';

const buttonId: string = 'button-test';
const buttonLabel: string = 'Text comes heres';

const props: Types.ButtonProps = {
    id: buttonId,
    label: buttonLabel,
    onClick: () => console.log('Clicked!'),
};

// METHOD TO CREATE COMPONENT TO BE TESTED
function createComponent(props: Types.ButtonProps) {
    const innerProps: Types.ButtonProps = { ...props };
    const { queryByTestId } = render(<Button {...innerProps} />);

    return queryByTestId(buttonId);
};

describe('Button', () => {

    it('should be rendered', () => {
        const { queryByTestId } = render(<Button {...props} />);
        
        expect(queryByTestId(buttonId)).toBeTruthy();
    });

    it('should have a label', () => {
        const component = createComponent({ ...props });

        expect(component.textContent).toBe(buttonLabel);
    });

    describe('when secondary prop is set', () => {
        it('should get alternative Button type', () => {
            const component = createComponent({ ...props, secondary: true });
    
            expect(component.classList).toContain('Button--secondary');
        });
    });

    // test button click
    it('should run action when clicked', () => {
        const action = jest.fn();
        const component = createComponent({ ...props, onClick: () => action() });

        fireEvent.click(component);
        expect(action).toHaveBeenCalled();
    });
})