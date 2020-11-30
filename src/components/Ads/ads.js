import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import {noImageUrl} from '../../config';
import {useNavigation} from '@react-navigation/native';

const Ads = (props) => {
  const {data} = props;
  const navigation = useNavigation();

  const toDetails = () => navigation.navigate('Details');

  return (
    <TouchableOpacity onPress={toDetails} style={styles.itemWrapper}>
      <Image style={styles.image} source={{uri: data.photo || noImageUrl}} />
      <View style={styles.priceWrapper}>
        <Text style={styles.text}>{`${data.price} ${data.currency}`}</Text>
      </View>
      <View>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.region.name}</Text>
        <Text style={styles.text}>{moment(data.updated_at).calendar()}</Text>
      </View>
      {data.vip && (
        <View style={styles.vipLabel}>
          <Text style={styles.vipText}>VIP</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Ads;

Ads.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  release_date: PropTypes.string,
  total_tracks: PropTypes.number,
  navigate: PropTypes.func,
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemWrapper: {
    width: '47%',
    marginBottom: 20,
  },
  priceWrapper: {
    height: 20,
    width: '50%',

    backgroundColor: 'red',
    marginTop: -20,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  vipLabel: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
  },
  vipText: {
    color: '#fff',
    textAlign: 'center',
  },
});
