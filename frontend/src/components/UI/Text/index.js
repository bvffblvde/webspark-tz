import React from 'react';
import styled, { css } from 'styled-components';

const textStyles = css`
  color: ${props => props.color || 'black'};
  font-family: ${props => props.fontFamily || 'Roboto-Medium,serif'};
  font-size: ${props => props.fontSize || '16px'};
  @media (max-width: 768px) {
    font-size: 14px !important;
  }

  @media (max-width: 480px) {
    font-size: 12px !important;
  }
`;

const StyledHeading = styled.h1`
  font-family: Montserrat-Medium,serif;
  margin: 0;
  padding: 0;
  ${textStyles};
  font-size: 24px !important;
    @media (max-width: 768px) {
        font-size: 18px !important;
        }
  
    @media (max-width: 480px) {
        font-size: 16px !important;
    
    }
`;

const StyledText = styled.p`
  font-family: Roboto-Regular,serif;
  margin: 0;
  padding: 0;
  ${textStyles}
`;

const TextComponent = ({ color, variant, fontFamily, children, fontSize }) => {
    if (variant === 'heading') {
        return <StyledHeading color={color} fontFamily={fontFamily}>{children}</StyledHeading>;
    }
    return <StyledText color={color} fontFamily={fontFamily} fontSize={fontSize}>{children}</StyledText>;
};

export default TextComponent;




