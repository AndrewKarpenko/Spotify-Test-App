import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import Navigator from './src/navigation';

import store from './src/store';

import getAccessToken from './src/utils/getAccessToken';

const App = () => {

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
};

export default App;
