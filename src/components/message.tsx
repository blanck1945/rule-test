import * as React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import ViewWrapper from './generics/viewWrapper';
import Centered from './generics/centered';
import Button from './generics/button';

type MessageProps = {
  iconUrl: string;
  copy: string;
  ctaText: string;
};

const MessageText = styled.p`
  font-size: 17.28px;
  line-height: 133%;
  text-align: center;
  letter-spacing: 0.144px;
  color: #353535;
  margin: 0 0 30.72px;
`;
const Icon = styled.img`
  width: 198.72px;
`;

const handleOnClick = () => {
  navigate('/');
};

const Message: React.FC<MessageProps> = ({ iconUrl, copy, ctaText }) => (
  <ViewWrapper dMaxWidth={329}>
    <Centered>
      <Icon src={iconUrl} />
      <MessageText> {copy} </MessageText>
      <Button onClick={handleOnClick}>{ctaText}</Button>
    </Centered>
  </ViewWrapper>
);
export default Message;
