import axios from 'axios';

const API_KEY = '784aad0931e85363e61d51d69c7af0a1';

const baseURL = 'https://api.themoviedb.org';
const api = axios.create({baseURL});

const getPopularMovies = page =>
  api.get(`/3/trending/all/day`, {
    params: {api_key: API_KEY, page},
  });

export default {getPopularMovies};
