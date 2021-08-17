import React from 'react';
import styled from 'styled-components';
import TapLogo from '@/components/generics/svg/tapLogo';

const Wrapper = styled.div`
  background: linear-gradient(12.03deg, #8c9eff -11.5%, #14d2b9 100.72%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  top: 0;
  min-height: 485px;
`;

const LogoWrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
`;

const Header: React.FC = ({ children }) => (
  <Wrapper>
    <LogoWrapper>
      <TapLogo />
    </LogoWrapper>
    {children}
  </Wrapper>
);

export default Header;
