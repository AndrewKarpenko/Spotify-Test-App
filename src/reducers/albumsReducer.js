import {
  GET_ALBUMS,
} from '../actions/types';

const initialState = {
  album: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        album: action.payload,
      };
  }
  return state;
}
