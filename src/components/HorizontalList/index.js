import React from 'react';
import {FlatList, ListHeader} from './styles';

import Card from '../Card';

export default function HorizontalList(props) {
  return (
    <>
      <ListHeader>{props.title}</ListHeader>
      <FlatList
        horizontal
        data={props.data?.data ? props.data.data.results : null}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={item => `${item.id}-${item.name}`}
      />
    </>
  );
}
