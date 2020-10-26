export interface ButtonProps {
    id: string,
    label: string,
    secondary?: boolean,
    onClick(): void,
}