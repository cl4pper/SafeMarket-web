import React from 'react';
import { render, screen } from '@testing-library/react';

import { ShopCard } from './ShopCard';
import * as Types from './types';

const cardTestId: string = 'ShopCard';
const titleTestId: string = 'ShopCard__title';
const infoTestId: string = 'ShopCard__contacts';

const shopName: string = 'Computer Shop';
const shopPhone: string = '+55 11 3455-7890';
const shopEmail: string = 'computer@email.com';
const shopCity: string = 'Sao Paulo';
const shopState: string = 'SP';

const props: Types.ShopCardProps = {
    shop: {
        id: '1',
        name: shopName,
        type: 'Tech',
        info: {
            phone: shopPhone,
            email: shopEmail,
            city: shopCity,
            state: shopState
        }
    }
};

describe('ShopCard', () => {
    beforeEach(() => {
        render(<ShopCard {...props} />);
    });

    it('should be rendered', () =>{
        expect(screen.queryByTestId(cardTestId)).toBeTruthy();
    });

    it('should render shop name', () =>{
        const title = screen.queryByText(shopName);

        expect(title).toBeTruthy();
    });

    it('should render shop info', () =>{
        const info = screen.queryByTestId(infoTestId);

        expect(info).toBeTruthy();
    });

    it('should render shop phone and email', () =>{
        const phone = screen.queryByText(shopPhone);
        const email = screen.queryByText(shopEmail);

        expect(phone).toBeTruthy();
        expect(email).toBeTruthy();
    });
});