/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Block} from './components';

import Rainbow from './Rainbow';
function App() {
  return (
    <SafeAreaProvider>
    <Block>
      <Rainbow />
      <Text>what is your name</Text>
    </Block>
    </SafeAreaProvider>
  );
}

export default App;
