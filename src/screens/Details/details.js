import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Sound from 'react-native-sound';
import {useDispatch} from 'react-redux';

import {emitError} from '../../actions/errorAction';

const Details = ({route}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#4C4C4C',
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#868686',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionText: {
    textAlign: 'center',
    fontSize: 50,
    color: '#828282',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
