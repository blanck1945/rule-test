import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { parseDate } from "@/utils";
import InfoPage from "@/components/generics/infoPage";
import PrizeHeading from "@/components/generics/prizeHeading";
import CommerceInfoBox from "@/components/generics/commerceInfoBox";
import UserInfoBox from "@/components/generics/userInfoBox";
import DateInfoBox from "@/components/generics/dateInfoBox";
import Share from "@/components/generics/share";

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 328px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const BoxWrapper = styled(ContentWrapper)`
  row-gap: 12px;
  padding: 0;
  @media (max-width: 480px) {
    flex-grow: 1;
  }
`;

type OptionData = {
  emoji: string;
  title: string;
};

const winnerOptions: Record<number, OptionData> = {
  1: {
    emoji: "🥳",
    title: "¡Felicitaciones, Ganaste!",
  },
  2: {
    emoji: "😧",
    title: "Todavía no canjeaste tu premio",
  },
  3: {
    emoji: "😁",
    title: "Este premio ya fue canjeado",
  },
};

const GanadorComponent: React.FC<any> = ({ userData }) => (
  <InfoPage>
    <ContentWrapper>
      <PrizeHeading
        {...winnerOptions[userData.email.status]}
        prize={userData.prize.premio}
      />
      <BoxWrapper>
        {userData.status === 2 && (
          <DateInfoBox dateTitle="Fecha de canje:" dateString={"rob"} />
        )}
        {userData.status !== 2 && (
          <UserInfoBox
            email={userData.player.email.value}
            infoTitle="Te enviamos el código para canjear a tu email:"
            tip="Tip: revisá la carpeta de spam"
          />
        )}
        <CommerceInfoBox comercio={userData.prize} />
      </BoxWrapper>
      <Share />
    </ContentWrapper>
  </InfoPage>
);

const EndScreenWrapper = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")));
  }, []);

  if (user) {
    return <GanadorComponent userData={user} />;
  }
  return <p>Loading</p>;
};

export default EndScreenWrapper;
