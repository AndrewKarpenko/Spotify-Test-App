import axios from 'axios';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-community/async-storage';

import {HOST, clientId, clientSecret} from '../config';

const base64credentials = base64.encode(`${clientId}:${clientSecret}`);

export default () => {
  axios.post(HOST.token, 'grant_type=client_credentials', {headers: {Authorization: `Basic ${base64credentials}`}})
    .then(({data}) => AsyncStorage.setItem('access_token', data.access_token))
    .catch((err) => console.log(err));
};
