import {instance as axios} from '../utils/interceptor';
import {GET_ALBUMS, EMIT_ERROR} from './types';

export const getAlbumsByArtist = (id) => (dispatch) => {
  axios.get(`artists/${id}/albums`)
    .then((data) => {
      dispatch({
        type: GET_ALBUMS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EMIT_ERROR,
        payload: err.response,
      });
    });
};
