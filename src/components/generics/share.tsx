import React from 'react';
import styled from 'styled-components';
import Button from '@/components/home/button';

const Wrapper = styled.div`
  margin: auto;
`;

const Share: React.FC = () => {
  const handleOnClick = async () => {
    const shareData = {
      title: 'Tap | Ruleta',
      text: 'Jugá y ganá con RuleTap!',
      url: 'https://developer.mozilla.org',
    };
    try {
      await navigator.share(shareData);
    } catch (err) {
      // eslint-disable-next-line
      console.warn(err);
    }
  };

  return (
    <Wrapper>
      <Button onClick={handleOnClick}>Invitar a mis amigos</Button>
    </Wrapper>
  );
};

export default Share;
