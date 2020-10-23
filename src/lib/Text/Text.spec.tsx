import React from 'react';
import { shallow } from 'enzyme';

import { Text } from './Text';
import * as Types from './types';

const textValue: string = 'Text comes heres';

const props: Types.TextProps = {
    text: textValue,
};

describe('Text', () => {
    const wrapper = shallow(<Text {...props} />);

    it('should render the text prop value', () => {
        expect(wrapper.text()).toBe(textValue);
    });

    it('should has a Text class', () => {
        expect(wrapper.is('.Text')).toBe(true);
    });

    describe('when small prop is set', () => {
        it('should has a Text--small class', () => {
            const testProps: Types.TextProps = { ...props, small: true };
            const wrapper = shallow(<Text {...testProps} />);
            expect(wrapper.is('.Text--small')).toBe(true);
        });
    });

    describe('when bold prop is set', () => {
        it('should has a Text--bold class', () => {
            const testProps: Types.TextProps = { ...props, bold: true };
            const wrapper = shallow(<Text {...testProps} />);
            expect(wrapper.is('.Text--bold')).toBe(true);
        });
    });

    describe('when italic prop is set', () => {
        it('should has a Text--italic class', () => {
            const testProps: Types.TextProps = { ...props, italic: true };
            const wrapper = shallow(<Text {...testProps} />);
            expect(wrapper.is('.Text--italic')).toBe(true);
        });
    });

    describe('when align prop is equal to center', () => {
        it('should has a Text--center class', () => {
            const testProps: Types.TextProps = { ...props, align: 'center' };
            const wrapper = shallow(<Text {...testProps} />);
            expect(wrapper.is('.Text--center')).toBe(true);
        });
    });

    describe('when align prop is equal to right', () => {
        it('should has a Text--right class', () => {
            const testProps: Types.TextProps = { ...props, align: 'right' };
            const wrapper = shallow(<Text {...testProps} />);
            expect(wrapper.is('.Text--right')).toBe(true);
        });
    });

    describe('when align prop is equal to justify', () => {
        it('should has a Text--justify class', () => {
            const testProps: Types.TextProps = { ...props, align: 'justify' };
            const wrapper = shallow(<Text {...testProps} />);
            expect(wrapper.is('.Text--justify')).toBe(true);
        });
    });
})