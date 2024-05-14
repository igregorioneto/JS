import styled from 'styled-components';
import { CustomRectangleProps, CustomTextProps } from './CustomTextProps';

// Componente com StyledComponent para texto personalizado
export const StyledText = styled.div.withConfig({
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
export const Rectangle = styled.div.withConfig({
    shouldForwardProp: (prop) => !['maxWidth', 'maxHeight'].includes(prop)
})<CustomRectangleProps>`
    max-width: ${(props) => props.maxWidth || '10vw'};
    max-height: ${(props) => props.maxHeight ||'10vw'};

    position: absolute;
    width: 50vw;
    height: calc(50vw * 95 / 165);
    background: #ff0000;
    z-index: -1;
  
    @media (max-width: 768px) {
        width: 80vw;
        height: calc(80vw * 95 / 165);
    }
`;