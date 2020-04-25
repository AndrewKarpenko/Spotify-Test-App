import {instance as axios} from '../utils/interceptor';
import {SEARCH_ARTIST, EMIT_ERROR} from './types';

export const searchArtist = (name, offset, limit) => (dispatch) => {
  if (!name) {
    dispatch({
      type: SEARCH_ARTIST,
      payload: [],
    });
  } else {
    axios.get(`search?q=${name}&type=artist&offset=${offset}&limit=${limit}`)
      .then(({data}) => {
        dispatch({
          type: SEARCH_ARTIST,
          payload: data.artists.items,
        });
      })
      .catch((err) => {
        dispatch({
          type: EMIT_ERROR,
          payload: err.response,
        });
      });
  }
};
