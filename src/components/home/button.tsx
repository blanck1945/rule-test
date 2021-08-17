import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #6b71ff;
  box-shadow: 0px 2px 10px rgba(25, 1, 52, 0.12);
  border-radius: 16px;
  width: 275px;
  height: 48px;
  margin: 12px;
  transition: 0.5s ease;

  &:hover {
    background: #4e53db;
  }

  &:active {
    background: #353ab7;
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
  transition: 0.5s ease;

  ${StyledButton}:disabled & {
    color: #002350;
  }
`;

type ButtonProps = {
  onClick: React.MouseEventHandler;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledButton onClick={onClick} disabled={disabled} {...rest}>
    <InnerText>{children}</InnerText>
  </StyledButton>
);

export default Button;
