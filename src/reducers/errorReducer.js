import {
  EMIT_ERROR, CLOSE_ERROR
} from '../actions/types';

const initialState = {
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EMIT_ERROR:
      return {
        ...state,
        error: true,
      };
    case CLOSE_ERROR:
      return {
        ...state,
        error: false
      }
  }
  return state;
}
