export interface FiltersProps {
    filters: Filter[] | [],
    open: boolean,
};

export interface Filter {
    id: number,
    label: string,
};