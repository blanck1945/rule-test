import React from "react";
import styled from "styled-components";
import InfoPage from "./infoPage";

const ContainerWrapper = styled.div``;

const BottomContainer = styled.div`
  background: #a52a2a;
  color: #fff;
  font-size: 1.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1.2rem;
`;

const TextHeader = styled.h3`
  margin-bottom: 0.2rem;
`;

const ExchangeScreen = ({ router }) => {
  console.warn(router.location.search);

  return (
    <InfoPage>
      <ContainerWrapper>
        <HeaderContainer>
          <TextHeader>Email</TextHeader>
          <TextHeader>
            {router.location.search.split("?")[1].split("&")[0]}
          </TextHeader>
        </HeaderContainer>
        <HeaderContainer>
          <TextHeader>Premio</TextHeader>
          <TextHeader>
            {router.location.search
              .split("?")[1]
              .split("&")[1]
              .replace("_", " ")}
          </TextHeader>
        </HeaderContainer>
        <HeaderContainer>
          <TextHeader>Comercio</TextHeader>
          <TextHeader>
            {router.location.search.split("?")[1].split("&")[2]}
          </TextHeader>
        </HeaderContainer>
        <BottomContainer>Sin Canjear</BottomContainer>
      </ContainerWrapper>
    </InfoPage>
  );
};

export default ExchangeScreen;
