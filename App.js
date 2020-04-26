import React, {useEffect, useState} from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';

import Navigator from './src/navigation';

import {CLOSE_ERROR} from './src/actions/types';

import store from './src/store';

import getAccessToken from './src/utils/getAccessToken';

const App = () => {

  const [visible, setVisible] = useState(false);

  const getError = () => {
    const errorModal = store.getState().error.error;
    setVisible(errorModal);
  };

  const closeError = () => {
    store.dispatch({type: CLOSE_ERROR});
  };

  const unsubscribe = store.subscribe(getError);

  useEffect(() => {
    getAccessToken();
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <Modal
        animationType='fade'
        transparent
        visible={visible}
      >
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,.5)',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              height: '20%',
              width: '80%',
              borderRadius: 20,
              backgroundColor: '#1F1F1F',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderWidth: 3,
              borderColor: '#868686',
            }}
          >
            <Text style={{fontSize: 25, color: '#828282'}}>
              Something went wrong
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 3,
                borderColor: '#868686',
                borderRadius: 25,
                height: 50,
                width: '90%'
              }}
              onPress={closeError}
            >
              <Text style={{color: '#828282'}}>
                DISMISS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Navigator/>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  album: {
    padding: 20,
    height: 100,
    backgroundColor: '#1F1F1F',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  albumImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderColor: '#868686',
    borderWidth: 2,
  },
  wrapper: {
    flex: 1,
  },
  text: {
    color: '#828282',
    justifyContent: 'space-around',
  },
});

