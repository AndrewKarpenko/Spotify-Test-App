import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Artist from '../Artist';

const Track = (props) => {
  return (
    <TouchableOpacity
      onPress={props.navigate}
      style={styles.track}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.trackImage}
          source={{uri: 'https://i0.wp.com/itc.ua/wp-content/uploads/2019/09/Apple-Music-Android.jpg?fit=920%2C613&quality=100&strip=all&ssl=1'}}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Track;

Track.propTypes = {
  name: PropTypes.string,
  navigate: PropTypes.func
};

const styles = StyleSheet.create({
  track: {
    padding: 20,
    height: 100,
    backgroundColor: '#1F1F1F',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  trackImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderColor: '#868686',
    borderWidth: 2
  },
  textWrapper: {
    flex: 2,
    justifyContent: 'space-around'
  },
  text: {
    color: '#828282'
  },
  imageWrapper: {
    flex: 1
  }
});
