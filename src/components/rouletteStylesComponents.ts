import styled from "styled-components";
import { keyframes } from "styled-components";
import pointer from "../assets/pointer.png";

export const FadeOut = styled.div<{ fadeOut: boolean }>`
  transition: 1s ease;
  ${({ fadeOut }) => fadeOut && "opacity: 0;"}
`;

export const RouletteWrapper = styled.div`
  --tot-size: 400px;
  @media (max-width: 480px) {
    --tot-size: 300px;
  }
  width: var(--tot-size);
  height: var(--tot-size);
  &::before {
    content: "";
    display: block;
    background-image: url(${pointer});
    width: 45px;
    height: 60px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    z-index: 99;
    left: calc(50% - 23px);
    margin-top: -2.5%;
    @media (max-width: 480px) {
      margin-top: -12.5%;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #536789;
  position: absolute;
  top: 50%;
  left: 0;
`;

export const Line1 = styled(Line)`
  transform: rotate(60deg);
`;

export const Line2 = styled(Line)`
  transform: rotate(120deg);
`;

export const Line3 = styled(Line)`
  transform: rotate(180deg);
`;

export const LogoCenter = styled.img`
  width: 18%;
  position: absolute;
  top: 41%;
  left: 41%;
`;

export const Content = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 20px;
  height: 95%;
  position: absolute;
  width: 100%;
  text-align: center;
`;

export const Content1 = styled(Content)`
  transform: rotate(0deg);
`;

export const Content2 = styled(Content)`
  transform: rotate(60deg);
`;

export const Content3 = styled(Content)`
  transform: rotate(120deg);
`;

export const Content4 = styled(Content)`
  transform: rotate(180deg);
`;

export const Content5 = styled(Content)`
  transform: rotate(240deg);
`;

export const Content6 = styled(Content)`
  transform: rotate(300deg);
`;

export const PrizeTitle = styled.h6`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  text-align: center;
  color: #002350;
  max-width: 150px;
  margin: 0 auto;
  height: 2em;
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Heading = styled.h1`
  font-family: Comfortaa, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 133%;
  text-align: center;
  color: #ffffff;
  margin-bottom: 3em;
`;

export const Logo = styled.div<{ logo: string }>`
  display: block;
  margin: 0.5em auto 0;
  border: 1px solid #8495aa;
  width: 32px;
  height: 32px;
  background-image: url("${(props): string => props.logo}");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;
