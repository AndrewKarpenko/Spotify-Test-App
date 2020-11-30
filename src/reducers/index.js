import {combineReducers} from 'redux';

import adsReducer from './adsReduser';
import errorReducer from './errorReducer';

export default combineReducers({
  ads: adsReducer,
  error: errorReducer,
});
