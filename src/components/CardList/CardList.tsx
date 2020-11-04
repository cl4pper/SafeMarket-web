import React from 'react';

// STYLE
import './CardList.scss';

// TYPES
import * as Types from './types';
import { Shop } from '@components';

// COMPONENTS
import { Text } from '@lib';
import { ShopCard } from '@components';

const CardList = (props: Types.CardListProps) => {
    const { shops } = props;

    function renderList (): JSX.Element | JSX.Element[] {
        return (
            <ul className="CardList__list" role="list">
                {
                    shops.map((shop: Shop, index: number): JSX.Element | JSX.Element[] => (
                        <li className="CardList__item" key={index} role="item">
                            <ShopCard shop={shop} />
                        </li>
                    ))
                }
            </ul>
        )
    };
    
    return (
        <section className="CardList" data-testid="CardList">
            {
                shops.length
                    ? renderList()
                    : <Text italic small>Nenhuma loja registrada</Text>
            }
        </section>
    )
}

export {
    CardList
}