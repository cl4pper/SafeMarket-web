import { ReactNode } from "react";

export interface TextProps {
    // children: React.PropsWithChildren<{}>,
    children: ReactNode | string,
    small?: boolean,
    bold?: boolean,
    italic?: boolean,
    align?: Alignment | string,
}

export type Alignment = 'left' | 'center' | 'right' | 'justify';