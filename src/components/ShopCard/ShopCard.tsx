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
                    <Text bold text="Contatos:" />
                    <Text small text={shop.info.phone} />
                    <Text small text={shop.info.email} />
                </div>
            </div>
        </div>
    )
}

export {
    ShopCard
}