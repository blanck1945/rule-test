import React, { useState, useEffect } from "react";
import { navigateToNextView } from "@/utils";
import centerLogo from "../assets/center.png";
import styled from "styled-components";
import { keyframes } from "styled-components";
import {
  FadeOut,
  RouletteWrapper,
  Line,
  Line1,
  Line2,
  Line3,
  LogoCenter,
  Content,
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Content6,
  Heading,
  PrizeTitle,
  Logo,
} from "./rouletteStylesComponents";
import { getValue } from "@/utils/getValue";
import { VirtualLoger } from "@/utils/logger";
import { LogEvent, LogMessage } from "@/types/logs";

const RouletteComponent: React.FC<{
  prizes: any;
  fadeOut: boolean;
  start: boolean;
}> = ({ prizes, fadeOut, start }) => {
  const [rand, setRand] = useState<number>(Math.floor(Math.random() * 6) + 1);

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        const user = JSON.parse(localStorage.getItem("userData"));
        const userWithStatus = {
          ...user,
          email: {
            status: 1,
            sendEmail: true,
          },
        };
        localStorage.setItem(
          "userData",
          JSON.stringify({
            ...userWithStatus,
            prize: prizes[rand].node.data,
          })
        );
        //VirtualLoger(LogEvent.rouletteFinish, LogMessage.rouletteFinishMsg);
        navigateToNextView();
      }, 5000);
    }
  }, [start]);

  const rouletteSpin = keyframes`
   from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(${getValue(start, rand)});
    }
 `;

  const stop = keyframes`0%{transform:rotate(0deg)}`;

  const RouletteContainer = styled.div`
    & {
      min-width: 100%;
      min-height: 100%;
      border-radius: 50%;
      background: #f3f6fa;
      position: relative;
      z-index: 1;
      animation: ${start ? rouletteSpin : stop} 4s ease-in-out forwards;
    }
  `;

  return (
    <FadeOut fadeOut={fadeOut}>
      <Heading>¡Buena suerte!</Heading>
      <RouletteWrapper>
        <RouletteContainer>
          <Line1 />
          <Line2 />
          <Line3 />
          <LogoCenter src={centerLogo} />
          <Content1>
            <PrizeTitle>{prizes[0].node.data.premio}</PrizeTitle>
            <Logo logo={prizes[0].node.data.imgUrl} />
          </Content1>
          <Content2>
            <PrizeTitle>{prizes[1].node.data.premio}</PrizeTitle>
            <Logo logo={prizes[1].node.data.imgUrl} />
          </Content2>
          <Content3>
            <PrizeTitle>{prizes[2].node.data.premio}</PrizeTitle>
            <Logo logo={prizes[2].node.data.imgUrl} />
          </Content3>
          <Content4>
            <PrizeTitle>{prizes[3].node.data.premio}</PrizeTitle>
            <Logo logo={prizes[3].node.data.imgUrl} />
          </Content4>
          <Content5>
            <PrizeTitle>{prizes[4].node.data.premio}</PrizeTitle>
            <Logo logo={prizes[4].node.data.imgUrl} />
          </Content5>
          <Content6>
            <PrizeTitle>{prizes[5].node.data.premio}</PrizeTitle>
            <Logo logo={prizes[5].node.data.imgUrl} />
          </Content6>
        </RouletteContainer>
      </RouletteWrapper>
    </FadeOut>
  );
};

interface RouleteProps {
  businessPrizes: any[];
}

const Roulette: React.FC<RouleteProps> = ({ businessPrizes }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [start, setStart] = useState(false);

  if (!businessPrizes || businessPrizes.length < 6) {
    return null;
  }
  return (
    <>
      <RouletteComponent
        prizes={businessPrizes}
        fadeOut={fadeOut}
        start={start}
      />
      <button onClick={() => setStart(true)}>Girar</button>
    </>
  );
};

export default Roulette;
