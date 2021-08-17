import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiSmartphone, FiClock } from 'react-icons/fi';
import { BiHomeAlt, BiMoney } from 'react-icons/bi';
import { MdMoneyOff } from 'react-icons/md';

const BenefitsObjArray: BenefitComponentProps[] = [
  {
    icon: <FiSmartphone />,
    text: `Recargá a través de tu celular`,
  },
  {
    icon: <BiHomeAlt />,
    text: `Rápido y sin salir de tu casa`,
  },
  {
    icon: <FiClock />,
    text: `Sin límite de horarios`,
  },
  {
    icon: <MdMoneyOff />,
    text: `Sin comisiones`,
  },
  {
    icon: <BiMoney />,
    text: `Sin montos mínimos`,
  },
  {
    icon: <HiOutlineLightBulb />,
    text: `Controlá cuantos kW recargaste`,
  },
];

type BenefitComponentProps = {
  icon: React.ReactNode;
  text: string;
};

const Paper = styled.div`
  margin: 8px;
  width: 156px;
  height: 140px;
  background: white;
  box-shadow: inset 0px 1px 0px #eaeaea;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex: 0 1 calc(50% - 16px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 32px 0;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 13.7358px;
  line-height: 16px;
  color: #002350;
  margin: 10px;
`;

const BenefitComponent: React.FC<BenefitComponentProps> = ({ icon, text }) => (
  <IconContext.Provider value={{ color: `#6B71FF`, size: `30` }}>
    <Paper>
      {icon}
      <Text>{text}</Text>
    </Paper>
  </IconContext.Provider>
);

const BenefitsArray: React.FC = () => (
  <Wrapper>
    {BenefitsObjArray.map((obj) => (
      <BenefitComponent {...obj} key={obj.text} />
    ))}
  </Wrapper>
);

export default BenefitsArray;
