import React from 'react';
import styled from 'styled-components';
import Header from '@/components/header';
import Layout from '@/components/layout';

const FullHeight = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
`;
const Main = styled.main`
  height: 100%;
  display: grid;
  place-items: center;
`;

const InfoPage: React.FC<{ isProtected?: boolean }> = ({
  children,
  isProtected = false,
}) => (
  <Layout isProtected={isProtected}>
    <FullHeight>
      <Header />
      <Main>{children}</Main>
    </FullHeight>
  </Layout>
);

export default InfoPage;
