/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Block} from './components';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login'
import Register from './screens/Login/Register'
import Splash from './screens/Home/splash'
import WALK from './screens/Home/walkthrough'

function App() {
  return (
    <Block>
      <WALK/>
    </Block>
  );
}

export default App;
