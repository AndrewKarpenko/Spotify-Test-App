import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAds, loadMoreAds} from '../../actions/adsAction';
import Ads from '../../components/Ads';

const Main = () => {
  const ads = useSelector((state) => state.ads.ads);
  const vips = useSelector((state) => state.ads.vips).map((item) => {
    item.vip = true;
    return item;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAds());
  }, []);

  const loadMore = () => dispatch(loadMoreAds(ads[ads.length - 1].cursor));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        scrollEventThrottle={16}
        onMomentumScrollEnd={loadMore}
        contentContainerStyle={styles.scrollView}>
        {[...vips, ...ads].map((item) => (
          <Ads data={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: '6%',
    backgroundColor: '#4C4C4C',
  },
  scrollView: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
