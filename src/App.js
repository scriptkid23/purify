import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Block} from './components';
import {MyProvider} from './context/MyContext';
import Home from './screens/Home/Home'
function App() {

  return (
    <MyProvider>
      <Home/>
    </MyProvider>
  );
}

export default App;
