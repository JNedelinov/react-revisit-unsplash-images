import axios from 'axios';
import { config } from './config';

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  // headers: {
  //   Accept: 'application/json',
  //   'Accept-Version': 'v1',
  //   Authorization: `Client-ID ${config.accessKey}`,
  // },
});

export default api;
