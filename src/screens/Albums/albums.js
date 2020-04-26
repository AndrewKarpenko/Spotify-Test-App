import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Album from '../../components/Album';
import {getAlbumsByArtist} from '../../actions/albumsAction';

const Albums = ({route}) => {

  const navigation = useNavigation();
  const albums = useSelector(state => state.albums.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumsByArtist(route.params.id));
  }, []);

  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={albums}
        renderItem={({item}) => (
          <Album
            image={item.images[0] && item.images[0].url}
            name={item.name}
            release_date={item.release_date}
            total_tracks={item.total_tracks}
            navigate={() => navigation.navigate('Tracks', {id: item.id})}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Albums;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4C4C4C',
  },
  flatList: {
    marginHorizontal: 20,
  },
});
