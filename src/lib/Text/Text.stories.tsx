
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Text } from './Text';
import * as Types from './types';

const stories = storiesOf('Text', module);
stories.addDecorator(withKnobs);

const props: Types.TextProps = {
	text: 'Text',
    subtext: false,
    bold: false,
    italic: false,
    align: 'left',
};

stories.add('Default', () => (
    <Text
        text={text('text', props.text, null)}
        subtext={boolean('subtext', props.subtext)}
        bold={boolean('bold', props.bold)}
        italic={boolean('italic', props.italic)} />
));