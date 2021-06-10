import React from 'react';
import 'react-native-gesture-handler';
import {MyProvider} from './context/MyContext';
import Home from './screens/Home/Home';
function App() {
  return (
    <MyProvider>
      <Home />
    </MyProvider>
  );
}

export default App;
