import { CSSProperties } from "styled-components";

// Interface para as propriedades do componente
export interface CustomTextProps {
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    color?: string;
    textAlign?: string;
    width?: string;
    height?: string;
    style?: CSSProperties; // Propriedades CSS adicionais
    children?: React.ReactNode; // Tipo para 'children'
    rectangle?: boolean;
    rectangeMaxWidth?: string;
    rectangeMaxHeight?: string;
}

export interface CustomRectangleProps {
    maxWidth?: string;
    maxHeight?: string;
}