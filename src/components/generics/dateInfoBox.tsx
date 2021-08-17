import React from 'react';
import styled from 'styled-components';
import { BiCalendar } from 'react-icons/bi';

type DateInfoBoxProps = {
  dateTitle: string;
  dateString: string;
};
const Container = styled.div`
  background: #edf3fb;
  border-radius: 8px;
`;
const InfoText = styled.h5`
  font-family: 'Comfortaa', sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: #002350;
  align-self: center;
`;
const InfoWrapper = styled.div`
  padding: 20px 16px 16px;
  display: grid;
  row-gap: 1em;
  padding: 20px 16px;
  grid-template-columns: 32px auto;
  column-gap: 10px;
`;
const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  background: #6b71ff;
  display: grid;
  place-items: center;
  border-radius: 50%;
`;
const InfoTitle = styled.span`
  display: block;
  font-weight: bold;
`;

const DateInfoBox: React.FC<DateInfoBoxProps> = ({ dateTitle, dateString }) => (
  <Container>
    <InfoWrapper>
      <IconContainer>
        <BiCalendar style={{ color: `white` }} />
      </IconContainer>
      <InfoText>
        <InfoTitle>{dateTitle}</InfoTitle>
        {dateString}
      </InfoText>
    </InfoWrapper>
  </Container>
);

export default DateInfoBox;
