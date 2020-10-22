export interface TextProps {
    text: string,
    subtext?: boolean,
    bold?: boolean,
    italic?: boolean,
    align?: Alignment | string,
}

export type Alignment = 'left' | 'center' | 'right' | 'justify';