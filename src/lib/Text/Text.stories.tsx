
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Text } from './Text';
import * as Types from './types';

const stories = storiesOf('Text', module);
stories.addDecorator(withKnobs);

const props: Types.TextProps = {
	children: 'Text comes here',
    small: false,
    bold: false,
    italic: false,
    align: 'left',
};

const options = {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
}

stories.add('Default', () => (
    <Text
        align={select('align', options, 'left')} 
        small={boolean('small', props.small)}
        bold={boolean('bold', props.bold)}
        italic={boolean('italic', props.italic)}>
            Text
        </Text>
));