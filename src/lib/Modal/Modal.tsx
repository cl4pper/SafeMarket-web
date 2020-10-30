import React from 'react';
import classNames from 'classnames';

// STYLE
import './Modal.scss';

// TYPES
import * as Types from './types';

// COMPONENTS
import { Title } from '@lib';

const Modal = (props: Types.ModalProps) => {
    const { title, visible, content } = props;

    return (
        <div data-testid="Modal" className={classNames('Modal', {
            'Modal--visible': visible
        })}>
            <div role="dialog" className="Modal__box">
                <Title small title={title}/>
                <div role="tree" className="Modal__content">
                    { content }
                </div>
            </div>
        </div>
    )
};

export {
    Modal
};