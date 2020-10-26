import React from 'react';
import classNames from 'classnames';

// STYLE
import './Modal.scss';

// TYPES
import * as Types from './types';

const Modal = (props: Types.ModalProps) => {
    const { title, visible, content } = props;

    return (
        <div className={classNames('Modal', {
            'Modal--visible': visible
        })}>
            <div role="dialog" className="Modal__box">
                <p className="Modal__title">
                    { title }
                </p>
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