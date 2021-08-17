import React from 'react';
import styled from 'styled-components';
import GooglePlay from '@/components/generics/svg/googlePlay';
import AppStore from '@/components/generics/svg/appStore';
import mockup from '@/images/mockup.png';

const Mockup = styled.img`
  height: 200px;
  width: 260px;
  overflow: hidden;
  object-fit: cover;
  object-position: 0 0;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StoreWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 30px 0;
  max-width: 600px;
`;

const DownloadLinks: React.FC = () => (
  <Wrapper>
    <StoreWrapper>
      <GooglePlay width="140" height="39" />
      <AppStore width="140" height="39" />
    </StoreWrapper>
    <Mockup src={mockup} alt="Aplicacion" loading="lazy" />
  </Wrapper>
);

export default DownloadLinks;
