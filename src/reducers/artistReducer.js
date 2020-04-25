import {
  SEARCH_ARTIST,
} from '../actions/types';

const initialState = {
  artist: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
  }
  return state;
}
