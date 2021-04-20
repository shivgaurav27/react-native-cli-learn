import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import 'react-native-gesture-handler';
import DrawerNavigator from './routes/DrawerNavigator';
import {CartContext} from './UserProvider/UserProvider';

const App = () => {
  const store = useContext(CartContext);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register',
            headerTitleAlign: 'center',
          }}
        /> */}
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
