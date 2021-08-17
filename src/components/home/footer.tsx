import React from 'react';
import styled from 'styled-components';
import aaip from '@/images/aaip.png';
import TapLogoInverted from '@/components/generics/svg/tapLogoInverted';

const FooterWrapper = styled.footer`
  padding: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: #002350;
  @media (max-width: 768px) {
    height: 315px;
  }
`;

const FooterMainText = styled.div`
  font-family: Open Sans;
  font-size: 10px;
  line-height: 14px;
  text-align: justify;
  margin: 30px 0;
  letter-spacing: -0.15px;
  color: #e3e9f3;
`;

const SubText = styled.div`
  margin-top: 8px;
  font-family: Open Sans;
  font-size: 14px;
  line-height: 150%;
  color: #fefefe;
`;

const SubFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const TapBilletera = styled.div`
  text-align: right;
`;

const SubFooter: React.FC = () => (
  <SubFooterWrapper>
    <img src={aaip} alt="aaip registro bases datos qr" />
    <TapBilletera>
      <TapLogoInverted />
      <SubText>
        © Tap Billetera S.A
        <br />
        <a href="https://auntap.com/terminos-y-condiciones/">
          Ver términos y condiciones
        </a>
      </SubText>
    </TapBilletera>
  </SubFooterWrapper>
);

const Footer: React.FC = () => (
  <FooterWrapper>
    <SubText>
      Al jugar acepto los&nbsp;
      <a href="https://auntap.com/terminos-y-condiciones/">
        Términos y Condiciones
      </a>
    </SubText>
    <FooterMainText>
      Tap Billetera S.A. no es un banco ni una entidad financiera de la Ley Nro.
      21.526. Tap Billetera S.A. se limita a ofrecer servicios de pago y no se
      encuentra autorizada a operar como entidad financiera por el Banco Central
      de la República Argentina. Los fondos depositados en las cuentas de la
      Aplicación Tap no constituyen depósitos en una entidad financiera, ni
      cuentan con ninguna de las garantías que tales depósitos puedan gozar de
      acuerdo con la legislación y reglamentación aplicables en materia de
      depósitos en entidades financieras.
    </FooterMainText>
    <SubFooter />
  </FooterWrapper>
);

export default Footer;
