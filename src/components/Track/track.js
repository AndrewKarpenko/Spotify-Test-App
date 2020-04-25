import React from 'react';
import {View, Text, Image} from 'react-native';

import {noImageUrl} from '../../config';


interface IProps {
  name: string
}

const Track = (props: IProps) => {
  return (
    <View
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
      <View style={{flex: 2, justifyContent: 'space-around'}}>
        <Text style={{color: '#828282'}}>{props.name}</Text>
      </View>
    </View>
  );
};

export default Track;
