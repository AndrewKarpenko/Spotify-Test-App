import React, {useEffect, useState} from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';

import Navigator from './src/navigation';

import {closeErrors} from './src/actions/errorAction';

import store from './src/store';

import getAccessToken from './src/utils/getAccessToken';

const App = () => {

  const [visible, setVisible] = useState(false);

  const getError = () => {
    const errorModal = store.getState().error.error;
    setVisible(errorModal);
  };

  const closeError = () => {
    store.dispatch(closeErrors());
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
          style={styles.modalOverview}
        >
          <View
            style={styles.modalWindow}
          >
            <Text style={styles.header}>
              Something went wrong
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={closeError}
            >
              <Text style={styles.text}>
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
  modalOverview: {
    backgroundColor: 'rgba(0,0,0,.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWindow: {
    height: '20%',
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: '#868686',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#868686',
    borderRadius: 25,
    height: 50,
    width: '90%',
  },
  header: {
    fontSize: 25,
    color: '#828282',
  },
  text: {
    color: '#828282',
  },
});

