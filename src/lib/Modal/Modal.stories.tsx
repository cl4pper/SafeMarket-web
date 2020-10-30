
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Modal } from './Modal';
import * as Types from './types';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

const contentExample = (): JSX.Element => {
    return (
        <div>
            <p>Content</p>
            <p>Comes <b>here</b></p>
        </div>
    )
}

const props: Types.ModalProps = {
    title: 'Modal title',
    visible: true,
    content: contentExample()
};

stories.add('Default', () => (
    <Modal
        title={text('title', props.title)}
        visible={boolean('visible', props.visible)}
        content={props.content} />
));