import {
  CLOSE_ERROR, EMIT_ERROR
} from './types';

export const closeErrors = () => (dispatch) => {
  dispatch({
    type: CLOSE_ERROR,
  });
};

export const emitError = () => (dispatch) => {
  dispatch({
    type: EMIT_ERROR,
  });
};
