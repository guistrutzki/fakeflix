import React from 'react';
import {ImageWrapper, Image} from './styles';

export default function Header() {
  return (
    <ImageWrapper>
      <Image
        resizeMode="contain"
        source={{
          uri:
            'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
        }}
      />
    </ImageWrapper>
  );
}
