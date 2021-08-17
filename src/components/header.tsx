import React from 'react';
import styled from 'styled-components';
import TapLogoColor from '@/components/generics/svg/tapLogoColor';

const HeaderWrapper = styled.header`
  background-color: #f6f7fb;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
`;

const TapLogoWrapper = styled.div`
  margin: 12px 0;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <TapLogoWrapper>
      <TapLogoColor />
    </TapLogoWrapper>
  </HeaderWrapper>
);

export default Header;
