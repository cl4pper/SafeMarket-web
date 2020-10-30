import React from 'react';

// STYLE
import './ShopCard.scss';

// TYPES
import * as Types from './types';

// COMPONENTS
import { Title, Text, Chip } from '@lib';

const ShopCard = (props: Types.ShopCardProps) => {
    const { shop } = props;

    return (
        <div className="ShopCard" data-testid="ShopCard">
            <Title bold small title={shop.name} data-testid="ShopCard__title" />
            <div className="ShopCard__bottom" data-testid="ShopCard__bottom">
                <ul className="ShopCard__labels">
                    <Chip label={shop.type} />
                </ul>
                <div className="ShopCard__contacts" data-testid="ShopCard__contacts">
                    <Text bold>Contatos:</Text>
                    <Text small>
                        <b>Telefone: </b>{shop.info.phone}
                    </Text>
                    <Text small>
                        <b>Email: </b>{shop.info.email}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export {
    ShopCard
}