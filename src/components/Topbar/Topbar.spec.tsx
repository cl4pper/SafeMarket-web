import React from 'react';
import { render, screen } from '@testing-library/react';

import { Topbar } from './Topbar';
import * as Types from './types';

const testId: string = 'Topbar';
const filterId: string = 'topbar-filters';
const buttonId: string = 'register-button';

const props: Types.TopbarProps = {
    title: 'Safe Market'
};

describe('Topbar', (): void => {
    beforeEach((): void => {
        render(<Topbar />);
    });

    it('should be rendered', () => {
        expect(screen.queryByTestId(testId)).toBeTruthy();
        expect(screen.queryByRole('banner')).toBeTruthy();
    });

    // render logo
    it('should render logo', () => {
        expect(screen.queryByRole('img')).toBeTruthy();
    });

    // render filter text
    it('should render filter text', () => {
        expect(screen.queryByTestId(filterId)).toBeTruthy();
        expect(screen.queryByTestId(filterId).textContent).toBe('Filtros');
    });

    // render register button
    it('should render register button', () => {
        expect(screen.queryByTestId(buttonId)).toBeTruthy();
        expect(screen.queryByTestId(buttonId).textContent).toBe('Cadastre-se');
    });
});