import React from 'react';
import {CardWrapper, Image} from './styles';

export default function Card(props) {
  console.log(props.data.poster_path);
  return (
    <CardWrapper>
      <Image
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${props.data.poster_path}`,
        }}
      />
    </CardWrapper>
  );
}
