// ./navigation/StackNavigator.js

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Header from '../common/Header';
import Address from '../components/Screens/Address';
import Basket from '../components/Screens/Basket';
import Categories from '../components/Screens/Categories';
import ContactUs from '../components/Screens/ContactUs';
import Delivery from '../components/Screens/Delivery';
import Home from '../components/Screens/Home';
import MyList from '../components/Screens/MyList';
import MyOrders from '../components/Screens/MyOrders';
import Notification from '../components/Screens/Notification';
import Search from '../components/Screens/Search';
import Stores from '../components/Screens/Stores';
import Success from '../components/Screens/Success/Success';
import {Colors, fontSizes, spacing} from '../utils/Sizes';

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
        name="Stores"
        component={Stores}
        options={{
          headerTitle: props => <Header props={props} title="Stores" />,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Products',
          headerTintColor: '#333',
          headerTitleStyle: {
            paddingLeft: spacing.xxl,
            fontWeight: 'bold',
            fontSize: fontSizes.md,
            color: '#333',
            letterSpacing: 1,
          },
        }}
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
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{
          title: 'Delivery options',
          headerTintColor: '#333',
          headerTitleStyle: {
            paddingLeft: spacing.xxl,
            fontWeight: 'bold',
            fontSize: fontSizes.md,
            color: '#333',
            letterSpacing: 1,
          },
        }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{
          title: 'Order placed',
          headerTintColor: '#333',
          headerTitleStyle: {
            paddingLeft: spacing.xxl,
            fontWeight: 'bold',
            fontSize: fontSizes.md,
            color: '#333',
            letterSpacing: 1,
          },
        }}
      />

      <Stack.Screen
        name="Address"
        component={Address}
        options={{
          title: 'Address ',
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: fontSizes.md,
            color: Colors.greyFont,
            letterSpacing: 1,
          },
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

const MyOrderStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          headerTitle: props => <Header props={props} title="My Orders" />,
        }}
      />
    </Stack.Navigator>
  );
};
const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: props => <Header props={props} title="Notification" />,
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
  MyOrderStackNavigator,
  NotificationStackNavigator,
};
