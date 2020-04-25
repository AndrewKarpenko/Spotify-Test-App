import React, {useEffect, useState} from 'react';
import {TextInput, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {searchArtist} from '../../actions/searchAction';

import Artist from '../../components/Artist';

const Search = () => {
  const limit = 20;
  const navigation = useNavigation();
  const searchResult = useSelector(state => state.artist.artist);
  const dispatch = useDispatch();

  const [artists, setArtists] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [offset, setOffset] = useState(0);

  const searchRequestByArtistName = (name) => {
    setArtists([]);
    setOffset(0);
    setArtistName(name);
  };

  const handleLoadMore = () => {
    setOffset(offset + limit);
  };

  useEffect(() => {
    dispatch(searchArtist(artistName, offset, limit));
  }, [artistName, offset]);

  useEffect(() => {
    setArtists([...artists, ...searchResult]);
  }, [searchResult]);

  return (
    <SafeAreaView
      style={styles.saveArea}
    >
      <TextInput
        placeholderTextColor={'#828282'}
        onChangeText={searchRequestByArtistName}
        autoCorrect={false}
        style={styles.input}
        placeholder={'artist name'}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={artists}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => (
          <Artist
            image={item.images[0] && item.images[0].url}
            name={item.name}
            genres={item.genres[0]}
            popularity={item.popularity}
            navigate={() => navigation.navigate('Albums', {id: item.id})}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  saveArea: {
    flex: 1, backgroundColor: '#4C4C4C'
  },
  input: {
    margin: 20,
    color: '#828282',
    fontSize: 34,
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#868686',
    borderRadius: 5,
  },
  flatList: {
    marginHorizontal: 20
  }
});
