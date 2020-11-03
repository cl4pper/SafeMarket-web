import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';

import { ButtonText } from './ButtonText';
import * as Types from './types';

const testId: string = 'buttontest-test';
const label: string = 'Btn label';

const props: Types.ButtonTextProps = {
    id: testId,
    children: label,
};

describe('ButtonText', (): void => {
    beforeEach((): void => {
        render(<ButtonText {...props} />);
    });

    it('should be rendered', () => {
        expect(screen.queryByTestId(testId)).toBeTruthy();
    });

    it('should render label', () => {
        expect(screen.queryByText(props.children));
    });
});

describe('ButtonText', (): void => {
    it('should apply underline style when set by prop', () => {  
        render(<ButtonText {...props} underline />);

        expect(screen.queryByTestId(testId).classList)
            .toContain('ButtonText--underline');
    });
});

describe('ButtonText', (): void => {
    it('should apply small style when set by prop', () => {    
        render(<ButtonText {...props} small />);

        expect(screen.queryByTestId(testId).classList)
            .toContain('ButtonText--small');
    });
});

describe('ButtonText', (): void => {
    it('should run an action when clicked', () => {
        const action = jest.fn();
        const component = render(<ButtonText {...props} onClick={() => action()} />)
    
        fireEvent.click(component.queryByTestId(props.id));
        expect(action).toHaveBeenCalled();
    });
});