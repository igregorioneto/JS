import React, { CSSProperties } from 'react';
import { CustomTextProps } from './CustomTextProps';
import { Rectangle, StyledText } from './CustomText.styles';

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
    rectangeMaxWidth,
    rectangeMaxHeight
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
            { rectangle ? <Rectangle 
                maxWidth={rectangeMaxWidth} 
                maxHeight={rectangeMaxHeight} /> : <div></div> }
            { children }
        </StyledText>
    );
};