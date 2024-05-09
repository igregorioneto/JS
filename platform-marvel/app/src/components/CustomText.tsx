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
}

// Componente com StyledComponent para texto personalizado
const StyledText = styled.div<CustomTextProps>`
    position: absolute;
    font-family: 'Marvel';
    text-align: ${(props) => props.textAlign || 'left'};
    font-size: ${(props) => props.fontSize || '16px'};
    font-weight: ${(props) => props.fontWeight || 'normal'};
    font-style: ${(props) => props.fontStyle || 'normal'};
    color: ${(props) => props.color || '#000'};
    color: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
`;

// Componente React para texto com propriedades personalizáveis
const CustomText: React.FC<CustomTextProps> = ({
    children,
    fontSize,
    fontWeight,
    fontStyle,
    color,
    textAlign,
    width,
    height,
    style
}) => {
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
            { children }
        </StyledText>
    );
};

export default CustomText;