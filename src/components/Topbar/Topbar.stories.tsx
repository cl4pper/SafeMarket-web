
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Topbar } from './Topbar';

const stories = storiesOf('Topbar', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <Topbar />
));