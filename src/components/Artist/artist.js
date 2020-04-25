import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import { noImageUrl } from '../../config';

interface IProps {
  image: string,
  name: string,
  genres: string,
  popularity: number,
  navigate: () => void
}

const Artist = (props: IProps) => {
  return (
    <TouchableOpacity
      onPress={props.navigate}
      style={{
        padding: 20,
        height: 100,
        backgroundColor: '#1F1F1F',
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{height: 90, width: 90, borderRadius: 45, borderColor: '#868686', borderWidth: 2}}
          source={{uri: props.image || noImageUrl}}
        />
      </View>
      <View style={{flex: 1}}>
        {
          !!props.name && <Text style={{color: '#828282', justifyContent: 'space-around'}}>Name:</Text>
        }
        {
          !!props.genres && <Text style={{color: '#828282', justifyContent: 'space-around'}}>Genre:</Text>
        }
        {
          !!props.popularity && <Text style={{color: '#828282', justifyContent: 'space-around'}}>Popularity:</Text>
        }
      </View>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        {
          !!props.name && <Text numberOfLines={1} ellipsizeMode='tail' style={{color: '#828282'}}>{props.name}</Text>
        }
        {
          !!props.genres && <Text numberOfLines={1} ellipsizeMode='tail' style={{color: '#828282', justifyContent: 'space-around'}}>{props.genres}</Text>
        }
        {
          !!props.popularity && <Text numberOfLines={1} ellipsizeMode='tail' style={{color: '#828282', justifyContent: 'space-around'}}>{props.popularity}</Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default Artist;
