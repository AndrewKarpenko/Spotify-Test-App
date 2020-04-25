import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {noImageUrl} from '../../config';

interface IProps {
  image: string,
  name: string,
  release_date: string,
  total_tracks: number,
  navigate: () => void
}

const Album = (props: IProps) => {
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
          !!props.release_date && <Text style={{color: '#828282', justifyContent: 'space-around'}}>Release date:</Text>
        }
        {
          !!props.total_tracks && <Text style={{color: '#828282', justifyContent: 'space-around'}}>Total tracks:</Text>
        }
      </View>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        {
          !!props.name && <Text numberOfLines={1} ellipsizeMode='tail' style={{color: '#828282'}}>{props.name}</Text>
        }
        {
          !!props.release_date && <Text numberOfLines={1} ellipsizeMode='tail' style={{color: '#828282', justifyContent: 'space-around'}}>{props.release_date}</Text>
        }
        {
          !!props.total_tracks && <Text numberOfLines={1} ellipsizeMode='tail' style={{color: '#828282', justifyContent: 'space-around'}}>{props.total_tracks}</Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default Album;
