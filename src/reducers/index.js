import { combineReducers } from 'redux';

import artistReducer from './artistReducer';
import albumsReducer from './albumsReducer';
import songsReducer from './songsReducer';


export default combineReducers({
  artist: artistReducer,
  albums: albumsReducer,
  songs: songsReducer
});
