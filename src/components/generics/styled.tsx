import styled from 'styled-components';

const BenefitsText = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #002350;
  text-align: center;
`;

const SubText = styled.span`
  font-family: Open Sans;
  font-size: 12px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(91, 91, 91, 0.8);
`;

const Underline = styled(SubText)`
  text-decoration: underline;
`;

export { BenefitsText, SubText, Underline };
