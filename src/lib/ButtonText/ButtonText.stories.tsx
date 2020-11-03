
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { ButtonText } from './ButtonText';
import * as Types from './types';

const stories = storiesOf('ButtonText', module);
stories.addDecorator(withKnobs);

const props: Types.ButtonTextProps = {
    id: 'buttontext-story',
    small: false,
    underline: false,
    children: 'Button text'
};

stories.add('Default', () => (
    <ButtonText
        id={props.id}
        small={boolean('small', props.small)}
        underline={boolean('underline', props.underline)}>
        {text('children', props.children)}
    </ButtonText>
));