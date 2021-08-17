import React from 'react';
import styled from 'styled-components';
import { FiMail } from 'react-icons/fi';

type CommerceInfoBoxProps = {
  infoTitle: string;
  email: string;
  tip: string;
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
`;
const TitleWrapper = styled(InfoWrapper)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 11px 16px 8px;
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
const InfoTitle = styled(InfoText)`
  font-weight: bold;
  line-height: 125%;
  max-width: 260px;
`;
const InfoTip = styled.span`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 117%;
  color: #353535;
`;

const CommerceInfoBox: React.FC<CommerceInfoBoxProps> = ({
  email,
  infoTitle,
  tip,
}) => (
  <Container>
    <TitleWrapper>
      <IconContainer>
        <FiMail style={{ color: `white` }} />
      </IconContainer>
      <InfoTitle>{infoTitle}</InfoTitle>
    </TitleWrapper>
    <InfoWrapper>
      <InfoText>{email}</InfoText>
      <InfoTip>{tip}</InfoTip>
    </InfoWrapper>
  </Container>
);

export default CommerceInfoBox;
