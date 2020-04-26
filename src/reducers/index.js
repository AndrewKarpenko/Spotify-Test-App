import {combineReducers} from 'redux';

import artistReducer from './artistReducer';
import albumsReducer from './albumsReducer';
import songsReducer from './songsReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  artist: artistReducer,
  albums: albumsReducer,
  songs: songsReducer,
  error: errorReducer,
});
