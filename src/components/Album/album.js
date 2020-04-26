import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {noImageUrl} from '../../config';

const Album = (props) => {
  return (
    <TouchableOpacity
      onPress={props.navigate}
      style={styles.album}>
      <View style={styles.wrapper}>
        <Image
          style={styles.albumImage}
          source={{uri: props.image || noImageUrl}}
        />
      </View>
      <View style={styles.wrapper}>
        {
          !!props.name && <Text style={styles.text}>Name:</Text>
        }
        {
          !!props.release_date && <Text style={styles.text}>Release date:</Text>
        }
        {
          !!props.total_tracks && <Text style={styles.text}>Total tracks:</Text>
        }
      </View>
      <View style={styles.wrapper}>
        {
          !!props.name && <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{props.name}</Text>
        }
        {
          !!props.release_date && <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{props.release_date}</Text>
        }
        {
          !!props.total_tracks && <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{props.total_tracks}</Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default Album;

Album.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  release_date: PropTypes.string,
  total_tracks: PropTypes.number,
  navigate: PropTypes.func
};

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
    borderWidth: 2
  },
  wrapper: {
    flex: 1
  },
  text: {
    color: '#828282',
    justifyContent: 'space-around'
  }
});
