import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import InfoPage from "./infoPage";

const ContainerWrapper = styled.div`
  width: 20%;
`;

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
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background: #edf3fb;
  border-radius: 8px;
  padding: 1rem;
`;

const TextHeader = styled.h3`
  font-family: "Comfortaa", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  font-weight: bold;
  letter-spacing: 0.15px;
  color: #002350;
  align-self: center;
`;

const ExchangeScreen = ({ router }) => {
  const [routerData, setRouterData] = useState(undefined);

  useEffect(() => {
    setRouterData(router);
  }, []);

  const replaceDash = (value: string) => {
    const valuesToMap = value.split("");
    const newArr = valuesToMap.map((char) => (char === "_" ? " " : char));
    return newArr.join("");
  };

  return (
    <InfoPage>
      <ContainerWrapper>
        <HeaderContainer>
          <TextHeader>Email</TextHeader>
          <TextHeader>
            {routerData
              ? routerData?.location?.search.split("?")[1].split("&")[0]
              : "SSR"}
          </TextHeader>
        </HeaderContainer>
        <HeaderContainer>
          <TextHeader>Comercio</TextHeader>
          <TextHeader>
            {routerData
              ? replaceDash(
                  routerData?.location?.search.split("?")[1].split("&")[1]
                )
              : "SSR"}
          </TextHeader>
        </HeaderContainer>
        <HeaderContainer>
          <TextHeader>Premio</TextHeader>
          <TextHeader>
            {routerData
              ? replaceDash(
                  routerData?.location?.search.split("?")[1].split("&")[2]
                )
              : "SSR"}
          </TextHeader>
        </HeaderContainer>
        <BottomContainer>Sin Canjear</BottomContainer>
      </ContainerWrapper>
    </InfoPage>
  );
};

export default ExchangeScreen;
