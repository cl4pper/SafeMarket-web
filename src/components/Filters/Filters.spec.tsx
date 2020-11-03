import React from 'react';
import { render, screen } from '@testing-library/react';

import { Filters } from './Filters';
import * as Types from './types';

const testId: string = 'Filters';

const props: Types.FiltersProps = {
    filters: [],
    open: false,
};

describe('Filters', (): void => {
    beforeEach((): void => {
        render(<Filters {...props} />);
    });

    it('should be rendered', () => {
        expect(screen.queryByTestId(testId)).toBeTruthy();
        expect(screen.queryByRole('menu')).toBeTruthy();
    });

    it('should render clickable text', () => {
        expect(screen.queryByText('Filtros')).toBeTruthy();
    });

    describe('options', () => {
        it('should be rendered', () => {
            expect(screen.queryByRole('list')).toBeTruthy();
        });

        it('should render a message for empty filters prop', () => {
            console.log(screen.queryByRole('list').childElementCount);
        });

        it('should render list of filters', () => {
            expect(screen.queryByRole('list')).toBeTruthy();
        });
    });
});