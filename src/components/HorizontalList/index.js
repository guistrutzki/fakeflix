import React from 'react';
import {FlatList, ListHeader} from './styles';

import Card from '../Card';

const data = [
  {id: 1, title: 'lala'},
  {id: 2, title: 'fonfon'},
  {id: 3, title: 'haha'},
  {id: 4, title: 'hehe'},
];

export default function HorizontalList() {
  return (
    <>
      <ListHeader>Terror</ListHeader>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <Card title={item.title} />}
        keyExtractor={item => item.id}
      />
    </>
  );
}
