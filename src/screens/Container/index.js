import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import api from '../../services/api';
import {Wrapper, ScrolView} from './styles';

import Header from '../../components/Header';
import HorizontalList from '../../components/HorizontalList';

export default function Container() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularMovies2, setPopularMovies2] = useState([]);
  const [popularMovies3, setPopularMovies3] = useState([]);
  const [popularMovies4, setPopularMovies4] = useState([]);

  const fetchData = async () => {
    setPopularMovies(await api.getPopularMovies(1));
    setPopularMovies2(await api.getPopularMovies(2));
    setPopularMovies3(await api.getPopularMovies(3));
    setPopularMovies4(await api.getPopularMovies(4));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header />
      <Wrapper>
        <ScrolView>
          <HorizontalList title="Filmes Populares" data={popularMovies} />
          <HorizontalList title="Comédia" data={popularMovies2} />
          <HorizontalList title="Ação" data={popularMovies3} />
          <HorizontalList title="Terror" data={popularMovies4} />
        </ScrolView>
      </Wrapper>
    </>
  );
}
