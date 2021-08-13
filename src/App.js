import React from 'react';
import 'react-native-gesture-handler';
import {MyProvider} from './context/MyContext';
import Home from './screens/Home/Home';
import Dashboard from './screens/dashboard/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <MyProvider>
      <NavigationContainer>
<<<<<<< Updated upstream
        <Stack.Navigator initialRouteName="dashboard">
          <Stack.Screen name="home" options={{headerShown: false}}>
            {props => <Home {...props} />}
          </Stack.Screen>
=======
        <Stack.Navigator initialRouteName="home">
           {/*<Stack.Screen name="home" options={{headerShown: false}}>
          {props => <Home {...props}/>}
  </Stack.Screen>*/}
>>>>>>> Stashed changes
          <Stack.Screen name="dashboard" options={{headerShown: false}}>
            {props => <Dashboard {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>
  );
}

export default App;
