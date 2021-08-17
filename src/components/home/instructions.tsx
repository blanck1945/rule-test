import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 24px 0;
`;

const Paper = styled.div`
  background: #f3f6fa;
  box-shadow: 0px 2px 10px rgba(25, 1, 52, 0.12);
  border-radius: 8px;
`;

const List = styled.ul`
  counter-reset: step;
`;

const ListItem = styled.li`
  color: #353535;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 10px 0;
  position: relative;

  &::before {
    content: counter(step);
    counter-increment: step;
    margin: 0 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #6b71ff;
  }

  &::after {
    content: ' ';
    border-left: 1px solid #6b71ff;
    height: 100%;
    position: absolute;
    top: 40px;
    left: 25px;
  }

  &:last-child::after {
    content: none;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #ffffff;
  margin-bottom: 15px;
`;

const Steps: React.FC = () => (
  <Paper>
    <List>
      <ListItem>Ingresá tu número de medidor</ListItem>
      <ListItem>Verificá los datos</ListItem>
      <ListItem>Recibí el comprobante</ListItem>
      <ListItem>Disfrutá tu recarga</ListItem>
    </List>
  </Paper>
);

const Instructions: React.FC = () => (
  <Wrapper>
    <Text>¿Cómo recargar?</Text>
    <Steps />
  </Wrapper>
);

export default Instructions;
