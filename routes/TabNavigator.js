import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Categories" component={CategoriesStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="My List" component={MyListStackNavigator} />
      <Tab.Screen name="Basket" component={BasketStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
