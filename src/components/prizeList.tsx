import * as React from 'react';
import styled from 'styled-components';
import PrizeListItem from './generics/prizeListItem';

type EndItemProps = {
  maxQuantity?: number;
  items: any;
};

type PrizeListProps = EndItemProps & {
  title: string;
};

const Container = styled.div`
  background-color: #edf3fb;
  display: grid;
  place-items: center;
  padding: 1em;
  margin: 1em;
  @media (max-width: 768px) {
    justify-items: start;
    padding: 0;
  }
`;

const Title = styled.h3`
  font-family: Comfortaa, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: 0.15px;
  color: #002350;
  margin: 0 0 1em;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Prizes: React.FC<EndItemProps> = ({ items, maxQuantity = 6 }) => (
  <List>
    {items.slice(0, maxQuantity).map((item: any) => (
      <PrizeListItem item={item} key={item.id} />
    ))}
  </List>
);

const PrizeList: React.FC<PrizeListProps> = ({ title, ...rest }) => (
  <Container>
    <Title>{title}</Title>
    <Prizes {...rest} />
  </Container>
);
export default PrizeList;
