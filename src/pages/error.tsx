import React from 'react';
import { PageProps } from 'gatsby';
import InfoPage from '@/components/generics/infoPage';
import Message from '@/components/message';
import errorIcon from '../images/error_illus.png';

const Error: React.FC<PageProps> = () => (
  <InfoPage>
    <Message
      iconUrl={errorIcon}
      copy="Tenemos problemas para conectarnos a internet. Volvé a intentalo más tarde."
      ctaText="Reintentar"
    />
  </InfoPage>
);

export default Error;
