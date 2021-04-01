import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {
  MainStackNavigator,
  CategoriesStackNavigator,
  BasketStackNavigator,
  SearchStackNavigator,
  MyListStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            return(
              <Ionicons name='ios-information-circle' size={size} color={color} />
            )
          }
         
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      
      >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Categories" component={CategoriesStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="My List" component={MyListStackNavigator} />
      <Tab.Screen
        name="Basket"
        component={BasketStackNavigator}
        options={{tabBarBadge: 3}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
