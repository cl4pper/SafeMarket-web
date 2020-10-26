import React from 'react';
import { render } from '@testing-library/react';

import { Title } from './Title';
import * as Types from './types';

const titleValue: string = 'Text comes heres';

const props: Types.TitleProps = {
    title: titleValue,
};

// METHOD TO CREATE COMPONENT TO BE TESTED
function createComponent(props: Types.TitleProps) {
    const testProps: Types.TitleProps = { ...props };
    const { getByText } = render(<Title {...testProps} />);

    return getByText(titleValue);
};

describe('Text', () => {

    it('should be rendered', () => {
        const { queryByText } = render(<Title {...props} />);
        
        expect(queryByText(titleValue)).toBeTruthy();
    });

    it('should render prop title', () => {
        const component = createComponent({ ...props });

        expect(component.textContent).toBe(titleValue);
    });

    describe('when small prop is set', () => {
        it('should has a Title--small class', () => {
            const component = createComponent({ ...props, small: true });
    
            expect(component.classList).toContain('Title--small');
        });
    });

    describe('when bold prop is set', () => {
        it('should has a Title--bold class', () => {
            const component = createComponent({ ...props, bold: true });
    
            expect(component.classList).toContain('Title--bold');
        });
    });

    describe('when italic prop is set', () => {
        it('should has a Title--italic class', () => {
            const component = createComponent({ ...props, italic: true });
    
            expect(component.classList).toContain('Title--italic');
        });
    });

    describe('when align prop is center', () => {
        it('should has a Title--center class', () => {
            const component = createComponent({ ...props, align: 'center' });
    
            expect(component.classList).toContain('Title--center');
        });
    });

    describe('when align prop is right', () => {
        it('should has a Title--right class', () => {
            const component = createComponent({ ...props, align: 'right' });
    
            expect(component.classList).toContain('Title--right');
        });
    });
})