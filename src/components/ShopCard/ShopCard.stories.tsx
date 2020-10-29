
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { ShopCard } from './ShopCard';
import * as Types from './types';

const stories = storiesOf('ShopCard', module);
stories.addDecorator(withKnobs);

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

stories.add('Default', () => (
    <ShopCard {...props} />
));