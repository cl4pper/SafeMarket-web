import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { Modal } from './Modal';
import * as Types from './types';

const modalTitle: string = 'Modal title';

const props: Types.ModalProps = {
    title: modalTitle,
    visible: true,
    content: <p>Hello, Modal</p>
};

//  METHOD TO CALL MODAL AND GET RESPECTIVE ROLE ELEMENT
function getByRole(innerProps: Types.ModalProps, role: string) {
    render(<Modal {...innerProps} />);
    const wrapper = screen.queryByRole(role);

    return wrapper;
};

// METHOD TO CALL MODAL
function createModalContent(innerProps: Types.ModalProps) {
    const component = render(<Modal {...innerProps} />);

    return component;
};

describe('Modal', () => {

    it('should be rendered', () => {
        const component = getByRole({ ...props }, 'dialog');
        const parent = component.parentElement;
        
        expect(parent).toBeTruthy();
        expect(parent.className).toContain('Modal');
    });

    it('should have a title', () => {
        const component = createModalContent({ ...props });
        const children = component.queryByText(props.title);

        expect(children.className).toBe('Modal__title');
    });

    it('should have a content', () => {
        const component = getByRole({ ...props }, 'tree');
        const content = component.childElementCount;

        expect(component.className).toBe('Modal__content');
        expect(content).toBeGreaterThan(0);
    });
})