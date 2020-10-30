import React from 'react';
import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';
import * as Types from './types';

const modalTitle: string = 'Modal title';

const props: Types.ModalProps = {
    title: modalTitle,
    visible: true,
    content: <p>Hello, Modal</p>
};

describe('Modal', () => {
    beforeEach(() => {
        render(<Modal {...props} />);
    });

    it('should be rendered', () => {
        const component = screen.queryByTestId('Modal');
        
        expect(component).toBeTruthy();
    });

    it('should render a content box', () => {
        const component = screen.queryByRole('dialog');
        
        expect(component).toBeTruthy();
    });

    it('should have a title', () => {
        const component = screen.queryByText(modalTitle);
        const title = component.textContent;

        expect(title).toBe(props.title);
    });

    it('should have a content', () => {
        const component = screen.queryByRole('tree');

        expect(component).toBeTruthy();
        expect(component.childElementCount).toBeGreaterThan(0);
    });
})