import React from 'react';
import { render, screen } from '@testing-library/react';

import { CardList } from './CardList';

// TYPES
import * as Types from './types';
import { Shop } from 'components';

const testId: string = 'CardList';

const emptyProps: Types.CardListProps = {
    shops: [],
};

const shop: Shop = {
    id: '0',
    name: 'Loja A',
    type: 'Tecnologia',
    info: {
        phone: '+55 15 3455-7890',
        email: 'loja_a@email.com',
        city: 'Sorocaba',
        state: 'SP',
    }
};

const props: Types.CardListProps = {
    shops: [shop],
};


describe('Topbar', (): void => {
    describe(('for empty shop list'), () => {

        beforeEach((): void => {
            render(<CardList {...emptyProps} />);
        });
    
        it('should be rendered', () => {
            expect(screen.queryByTestId(testId)).toBeTruthy();
        });

        it(('should not render any list item'), () => {
            expect(screen.queryByRole('item')).toBeFalsy();
        });
        it(('should render a message'), () => {
            expect(screen.queryByText('Nenhuma loja registrada')).toBeTruthy();
        });
    })
});

describe('Topbar', (): void => {
    describe(('for filled shop list'), () => {

        beforeEach((): void => {
            render(<CardList {...props} />);
        });
    
        it('should be rendered', () => {
            expect(screen.queryByTestId(testId)).toBeTruthy();
        });

        it(('should render some list items'), () => {
            expect(screen.queryByRole('item')).toBeTruthy();
        });

        it(('should not render a message'), () => {
            expect(screen.queryByText('Nenhuma loja registrada')).toBeFalsy();
        });
    })
});