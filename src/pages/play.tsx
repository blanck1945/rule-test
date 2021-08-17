import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import InfoPage from "@/components/generics/infoPage";
import Roulette from "@/components/roulette";
import ViewWrapper from "@/components/generics/viewWrapper";

const Container = styled.div`
  background: linear-gradient(17.24deg, #8c91ff -13.8%, #14d2b9 92.35%);
  display: grid;
  place-items: center;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
`;

interface PlayProps extends PageProps {
  data: { allAirtable: { edges: {}[] } };
}

const Play: React.FC<PlayProps> = ({ data }) => {
  const {
    allAirtable: { edges },
  } = data;
  return (
    <InfoPage isProtected>
      <Container>
        <ViewWrapper dMaxWidth={400}>
          <Roulette businessPrizes={edges} />
        </ViewWrapper>
      </Container>
    </InfoPage>
  );
};

export const query = graphql`
  {
    allAirtable {
      edges {
        node {
          data {
            comercio
            _15_a_pagar_por_adelantado
            costo
            premio
            total
          }
        }
      }
    }
  }
`;

export default Play;
