import { ReactNode } from "react";

export interface ModalProps {
    title: string,
    visible: boolean,
    content: JSX.Element | JSX.Element[],
}