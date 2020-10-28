
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Chip } from './Chip';
import * as Types from './types';

const stories = storiesOf('Chip', module);
stories.addDecorator(withKnobs);

const props: Types.ChipProps = {
    label: 'Chip',
};

stories.add('Default', () => (
    <Chip
        label={text('label', props.label, null)}/>
));