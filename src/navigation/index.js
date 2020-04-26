import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Albums from '../screens/Albums';
import Search from '../screens/Search';
import Tracks from '../screens/Tracks';
import Player from '../screens/Player';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Albums" component={Albums} />
        <Stack.Screen name="Tracks" component={Tracks} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
