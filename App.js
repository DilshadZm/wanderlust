import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './HomePage';
import DestinationDiscoveryScreen from './DestinationDiscovery';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Wanderlust' }}
        />
        <Stack.Screen
          name="DestinationDiscovery"
          component={DestinationDiscoveryScreen}
          options={{ title: 'Discover Destinations' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
