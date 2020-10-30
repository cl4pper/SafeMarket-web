import React from 'react';
import { render } from '@testing-library/react';

import { Text } from './Text';
import * as Types from './types';

const textValue: string = 'Text comes heres';

const props: Types.TextProps = {
    children: textValue,
};

// METHOD TO CREATE COMPONENT TO BE TESTED
function createComponent(props: Types.TextProps) {
    const testProps: Types.TextProps = { ...props };
    const { getByText } = render(<Text {...testProps} />);

    return getByText(textValue);
};

describe('Text', () => {

    it('should be rendered', () => {
        const { queryByText } = render(<Text {...props} />);
        
        expect(queryByText(textValue)).toBeTruthy();
    });

    it('should render prop text', () => {
        const component = createComponent({ ...props });

        expect(component.classList).toContain('Text');
        expect(component.textContent).toBe(textValue);
    });

    describe('when small prop is set', () => {
        it('should has a Text--small class', () => {
            const component = createComponent({ ...props, small: true });
    
            expect(component.classList).toContain('Text--small');
        });
    });

    describe('when bold prop is set', () => {
        it('should has a Text--bold class', () => {
            const component = createComponent({ ...props, bold: true });
    
            expect(component.classList).toContain('Text--bold');
        });
    });

    describe('when italic prop is set', () => {
        it('should has a Text--italic class', () => {
            const component = createComponent({ ...props, italic: true });
    
            expect(component.classList).toContain('Text--italic');
        });
    });

    describe('when align prop is center', () => {
        it('should has a Text--center class', () => {
            const component = createComponent({ ...props, align: 'center' });
    
            expect(component.classList).toContain('Text--center');
        });
    });

    describe('when align prop is right', () => {
        it('should has a Text--right class', () => {
            const component = createComponent({ ...props, align: 'right' });
    
            expect(component.classList).toContain('Text--right');
        });
    });

    describe('when align prop is justify', () => {
        it('should has a Text--justify class', () => {
            const component = createComponent({ ...props, align: 'justify' });
    
            expect(component.classList).toContain('Text--justify');
        });
    });
})