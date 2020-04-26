import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Track from '../../components/Track';
import {getSongsByAlbum} from '../../actions/tracksAction';

const Tracks = ({route}) => {

  const songs = useSelector(state => state.songs.songs);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getSongsByAlbum(route.params.id));
  }, []);

  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={songs}
        renderItem={({item}) => (
          <Track
            navigate={() => navigation.navigate('Player', {url: item.preview_url, name: item.name})}
            name={item.name}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Tracks;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4C4C4C',
  },
  flatList: {
    marginHorizontal: 20,
  },
});
