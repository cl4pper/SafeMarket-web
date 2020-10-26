
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Button } from './Button';
import * as Types from './types';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const props: Types.ButtonProps = {
    id: 'story-button-id',
    label: 'Button',
    onClick: () => console.log('Clicked!'),
    secondary: false,
};

stories.add('Default', () => (
    <Button
        label={text('text', props.label, null)}
        onClick={() => props.onClick()} 
        secondary={boolean('secondary', props.secondary)} />
));