import React from 'react';
import styled from 'styled-components';
import TapLogoInverted from '@/components/generics/svg/tapLogoInverted';
import EdenorMide from '@/components/generics/svg/edenorMide';

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  /*height: 56px;*/
  background: #002350;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  margin: 12px 24px;
`;

const Footer: React.FC = () => (
  <Wrapper>
    <LogoWrapper>
      <TapLogoInverted />
    </LogoWrapper>
    <LogoWrapper>
      <EdenorMide />
    </LogoWrapper>
  </Wrapper>
);

export default Footer;
