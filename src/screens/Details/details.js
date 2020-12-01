import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('screen');

const Details = ({route}) => {
  const ads = route.params.data;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.flexBox}>
        <ScrollView horizontal>
          <View style={styles.imageWrapper}>
            {ads.photos.map((item, index) => (
              <>
                <Image key={index} style={styles.image} source={{uri: item}} />
                <View style={styles.separator} />
              </>
            ))}
          </View>
        </ScrollView>
        <View style={styles.priceNameWrapper}>
          <View style={styles.priceWrapper}>
            <Text style={styles.priceNameText}>
              {ads.price} {ads.currency}
            </Text>
          </View>
          <View style={styles.priceNameSeparator} />
          <View style={styles.nameWrapper}>
            <Text style={styles.priceNameText}>{ads.name}</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View>
          <Text style={styles.headerText}>City</Text>
          <Text style={styles.text}>{ads.region.name}</Text>
        </View>
        <View>
          <Text style={styles.headerText}>Description</Text>
          <Text style={styles.text}>{ads.description}</Text>
        </View>
      </View>
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
  flexBox: {
    flex: 1,
  },
  imageWrapper: {
    flexDirection: 'row',
  },
  image: {
    aspectRatio: 1,
    width: width - 50,
  },
  separator: {
    height: '100%',
    width: 5,
  },
  priceNameText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  priceNameSeparator: {
    width: 5,
    backgroundColor: '#333',
  },
  priceWrapper: {
    width: '30%',
  },
  nameWrapper: {
    width: '70%',
  },
  priceNameWrapper: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: '#333',
  },
  headerText: {
    fontSize: 25,
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});
