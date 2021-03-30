import "react-native-gesture-handler"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Login from './components/Screens/Login';
import Register from './components/Screens/Register';
import { NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"
const App = () => {
  const Stack = createStackNavigator()
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Register" component={Register} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;

