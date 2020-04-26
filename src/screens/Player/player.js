import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

const Player = ({route}) => {

  Sound.setCategory('Playback');

  useEffect(() => {
    return () => stop();
  }, []);

  const whoosh = new Sound(route.params.url, null, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
    }
  });

  const play = () => {
    whoosh.play();
  };

  const stop = () => {
    whoosh.stop();
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <View style={styles.captionWrapper}>
        <Text style={styles.captionText}>
          {route.params.name}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={play}
        >
          <Text>
            PLAY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={stop}
        >
          <Text>
            STOP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Player;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4C4C4C',
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#868686',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionText: {
    fontSize: 50,
    color: '#828282',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
