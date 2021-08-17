import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #14d2b9;
  box-shadow: 0px 2px 10px rgba(25, 1, 52, 0.12);
  border-radius: 16px;
  width: 275px;
  height: 48px;
  margin: 12px 0;

  &:hover {
    background: #22c5aa;
  }

  &:active {
    background: #1ebaa5;
  }

  &:disabled {
    background: #c9c9c9;
  }
`;

const InnerText = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: #ffffff;
`;

type ButtonProps = {
  onClick: React.MouseEventHandler;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => (
  <StyledButton onClick={onClick} {...rest}>
    <InnerText>{children}</InnerText>
  </StyledButton>
);

export default Button;
