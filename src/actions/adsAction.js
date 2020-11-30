import {instance as axios} from '../utils/interceptor';
import {GET_ADS, GET_VIP, EMIT_ERROR} from './types';

export const getAds = () => (dispatch) => {
  axios
    .get(`autos`)
    .then(({data}) => {
      dispatch({
        type: GET_ADS,
        payload: data.ads,
      });
      dispatch({
        type: GET_VIP,
        payload: data.vips,
      });
    })
    .catch((err) => {
      dispatch({
        type: EMIT_ERROR,
        payload: err.response,
      });
    });
};

export const loadMoreAds = (cursor) => (dispatch, getState) => {
  axios
    .get(`autos?cursor=${cursor}`)
    .then(({data}) => {
      const currentState = getState().ads.ads;
      const payload = [...currentState, ...data.ads];
      dispatch({
        type: GET_ADS,
        payload: payload,
      });
    })
    .catch((err) => {
      dispatch({
        type: EMIT_ERROR,
        payload: err.response,
      });
    });
};
