import axios from 'axios';

import {HOST} from '../config';

export const instance = axios.create({
  baseURL: `${HOST.api}`,
});

const reqInt = instance.interceptors.request.use(
  async (config) => {
    config.headers['Accept']= `application/json`;
    return config;
  },
  error => Promise.reject(error),
);

axios.interceptors.request.eject(reqInt);
