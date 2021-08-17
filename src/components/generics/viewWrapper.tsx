import * as React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  dMaxWidth?: number;
  mMaxWidth?: number;
  bgColor?: string;
  children: React.ReactNode;
};

const Container = styled.div<WrapperProps>`
  max-width: ${(props): string =>
    props.dMaxWidth ? `${String(props.dMaxWidth)}px` : `auto`};
  background-color: ${(props): string => props.bgColor || `auto`};
`;

const ViewWrapper: React.FC<WrapperProps> = ({
  dMaxWidth,
  mMaxWidth,
  bgColor,
  children,
}) => (
  <Container dMaxWidth={dMaxWidth} bgColor={bgColor}>
    {children}
  </Container>
);
export default ViewWrapper;
