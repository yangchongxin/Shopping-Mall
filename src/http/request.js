import axios from 'axios';
import conf from './axios.conf';

const http = axios.create(conf);

export default {
  validCode(params) {
    return http.get('/validCode', { params });
  },
  login(data) {
    return http.post('/login', data);
  },
  register(data) {
    return http.post('/register', data);
  },
};
