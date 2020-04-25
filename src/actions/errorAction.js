import {
  CLOSE_ERRORS,
} from './types';

export const closeErrors = () => (dispatch) => {
  dispatch({
    type: CLOSE_ERRORS,
  });
};
