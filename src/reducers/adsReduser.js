import {GET_ADS, GET_VIP} from '../actions/types';

const initialState = {
  ads: [],
  vips: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ADS:
      return {
        ...state,
        ads: action.payload,
      };
    case GET_VIP:
      return {
        ...state,
        vips: action.payload,
      };
  }
  return state;
}
