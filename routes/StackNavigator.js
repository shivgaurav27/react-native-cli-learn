// ./navigation/StackNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../components/Screens/Home';
import Basket from '../components/Screens/Basket';
import ContactUs from '../components/Screens/ContactUs';
import Categories from '../components/Screens/Categories';
import MyList from '../components/Screens/MyList';
import Search from '../components/Screens/Search';

import Header from '../common/Header';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: props => <Header props={props} title="Home" />}}
      />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          headerTitle: props => <Header props={props} title="ContactUs" />,
        }}
      />
    </Stack.Navigator>
  );
};

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerTitle: props => <Header props={props} title="Categories" />,
        }}
      />
    </Stack.Navigator>
  );
};
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: props => <Header props={props} title="search" />,
        }}
      />
    </Stack.Navigator>
  );
};
const BasketStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Basket"
        component={Basket}
        options={{
          headerTitle: props => <Header props={props} title="Basket" />,
        }}
      />
    </Stack.Navigator>
  );
};
const MyListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="MyList"
        component={MyList}
        options={{
          headerTitle: props => <Header props={props} title="MyList" />,
        }}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  CategoriesStackNavigator,
  ContactStackNavigator,
  SearchStackNavigator,
  BasketStackNavigator,
  MyListStackNavigator,
};
