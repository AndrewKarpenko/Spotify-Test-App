import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import { noImageUrl } from '../../config';
import Album from '../Album';

const Artist = (props) => {
  return (
    <TouchableOpacity
      onPress={props.navigate}
      style={styles.artist}>
      <View style={{flex: 1}}>
        <Image
          style={styles.artistImage}
          source={{uri: props.image || noImageUrl}}
        />
      </View>
      <View style={styles.wrapper}>
        {
          !!props.name && <Text style={styles.text}>Name:</Text>
        }
        {
          !!props.genres && <Text style={styles.text}>Genre:</Text>
        }
        {
          !!props.popularity && <Text style={styles.text}>Popularity:</Text>
        }
      </View>
      <View style={styles.wrapper}>
        {
          !!props.name && <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{props.name}</Text>
        }
        {
          !!props.genres && <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{props.genres}</Text>
        }
        {
          !!props.popularity && <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{props.popularity}</Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default Artist;

Artist.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.string,
  popularity: PropTypes.number,
  navigate: PropTypes.func
};

const styles = StyleSheet.create({
  artist: {
    padding: 20,
    height: 100,
    backgroundColor: '#1F1F1F',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  artistImage: {
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
