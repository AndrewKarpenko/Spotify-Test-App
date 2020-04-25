import {instance as axios} from '../utils/interceptor';
import {GET_SONGS, EMIT_ERROR} from './types';

export const getSongsByAlbum = (id) => (dispatch) => {
  axios.get(`albums/${id}/tracks`)
    .then(({data}) => {
      dispatch({
        type: GET_SONGS,
        payload: data.items
      });
    })
    .catch((err) => {
      dispatch({
        type: EMIT_ERROR,
        payload: err.response,
      });
    });
};
