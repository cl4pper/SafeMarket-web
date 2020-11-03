import { ReactNode } from "react";

export interface ButtonTextProps {
    id: string,
    children: string,
    underline?: boolean,
    small?: boolean,
    onClick?(): void,
};