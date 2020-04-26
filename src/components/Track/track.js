import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

interface IProps {
  name: string,
  navigate: () => void
}

const Track = (props: IProps) => {
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
          source={{uri: 'https://i0.wp.com/itc.ua/wp-content/uploads/2019/09/Apple-Music-Android.jpg?fit=920%2C613&quality=100&strip=all&ssl=1'}}
        />
      </View>
      <View style={{flex: 2, justifyContent: 'space-around'}}>
        <Text style={{color: '#828282'}}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Track;
