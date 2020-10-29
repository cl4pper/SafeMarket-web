export interface ShopCardProps {
    shop: Shop,
};

export interface Shop {
    id: string,
    name: string,
    type: string,
    info: ShopInfo,
};

export interface ShopInfo {
    phone: string,
    email: string,
    city: string,
    state: string,
}