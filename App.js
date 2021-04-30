/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider as PictureProvider } from './src/context/PictureContext';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import BeatScreen from './src/screens/BeatScreen';
import TitleComponent from './src/components/TitleComponent';

const navigator = createStackNavigator(
  {
      Home: HomeScreen,
      Beat: BeatScreen
  },
  {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
          headerTitle: () => <TitleComponent/>,
          headerStyle: {
              backgroundColor: '#007799',
              shadowOpacity: 0,
              height: 120,
          },
          headerTintColor: '#eeeeee',
          headerTitleStyle: {
              color: '#eee',
              flex: 1,
              display: 'none',
          },
      },
  },
);

const App = createAppContainer(navigator);

export default () => {
  return (
        <PictureProvider>
          <App />
        </PictureProvider>
  )
}
