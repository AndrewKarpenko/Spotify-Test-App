import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import {HOST} from '../config';

export const instance = axios.create({
  baseURL: `${HOST.api}`,
});

const reqInt = instance.interceptors.request.use(
  async (config) => {
    config.headers['Authorization'] = await AsyncStorage.getItem('authToken');
    return config;
  },
  error => Promise.reject(error),
);

axios.interceptors.request.eject(reqInt);

export default instance;
