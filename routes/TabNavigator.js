import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
            iconName = focused
            ? 'home'
            : 'home';
          }
          if(route.name==="Basket"){
            iconName = focused ? 'shopping-basket' : 'shopping-basket';
          }
          if(route.name==="Search"){
            iconName = focused ? 'search' : 'search';
          }
          if(route.name==="My List"){
            iconName = focused ? 'list' : 'list';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;

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
