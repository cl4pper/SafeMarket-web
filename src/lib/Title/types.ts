export interface TitleProps {
    title: string,
    small?: boolean,
    bold?: boolean,
    italic?: boolean,
    align?: Alignment | string,
}

export type Alignment = 'left' | 'center' | 'right' | 'justify';