import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Message: React.FC = ({ children }) => <Container>{children}</Container>;
export default Message;
