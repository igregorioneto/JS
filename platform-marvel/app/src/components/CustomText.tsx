import React, { CSSProperties } from 'react';
import styled from 'styled-components';

// Interface para as propriedades do componente
interface CustomTextProps {
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
}

// Componente com StyledComponent para texto personalizado
const StyledText = styled.div.withConfig({
    shouldForwardProp: (prop) => !['textAlign', 'fontSize', 'fontWeight', 'fontStyle', 'color', 'width', 'height'].includes(prop)
})<CustomTextProps>`
    font-family: 'Marvel';
    text-align: ${(props) => props.textAlign || 'left'};
    font-size: ${(props) => props.fontSize || '16px'};
    font-weight: ${(props) => props.fontWeight || 'normal'};
    font-style: ${(props) => props.fontStyle || 'normal'};
    color: ${(props) => props.color || '#000'};
    color: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    z-index: 1;
`;

// Estilo para o retângulo
const Rectangle = styled.div`
    position: absolute;
    width: 50vw;
    height: calc(50vw * 95 / 165);
    max-width: 165px;
    max-height: 95px;
    background: #ff0000;
    z-index: -1;
  
    @media (max-width: 768px) {
        width: 80vw;
        height: calc(80vw * 95 / 165);
    }  
`;

// Componente React para texto com propriedades personalizáveis
export default function CustomText({
    children,
    fontSize,
    fontWeight,
    fontStyle,
    color,
    textAlign,
    width,
    height,
    style,
    rectangle,
}: CustomTextProps) {
    return (
        <StyledText
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            color={color}
            textAlign={textAlign}
            width={width}
            height={height}
            style={style}
        >
            { rectangle ? <Rectangle /> : <div></div> }
            { children }
        </StyledText>
    );
};