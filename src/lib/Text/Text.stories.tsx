
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Text } from './Text';
import * as Types from './types';

const stories = storiesOf('Text', module);
stories.addDecorator(withKnobs);

const props: Types.TextProps = {
	text: 'Text comes here',
    subtext: false,
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
        text={text('text', props.text, null)}
        align={select('align', options, 'left')} 
        subtext={boolean('subtext', props.subtext)}
        bold={boolean('bold', props.bold)}
        italic={boolean('italic', props.italic)} />
));