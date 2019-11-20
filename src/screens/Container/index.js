import React from 'react';
import {Wrapper} from './styles';

import HorizontalList from '../../components/HorizontalList';

export default function Container() {
  return (
    <Wrapper>
      <HorizontalList />
      <HorizontalList />
      <HorizontalList />
      <HorizontalList />
    </Wrapper>
  );
}
