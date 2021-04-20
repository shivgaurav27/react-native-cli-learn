// ./navigation/DrawerNavigator.js

import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from '../components/Screens/DrawerContent';
import {
  ContactStackNavigator,
  MyOrderStackNavigator,
  NotificationStackNavigator,
} from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="stores"
        component={TabNavigator}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <FontAwesome5 name="store" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MyOrders"
        component={MyOrderStackNavigator}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <FontAwesome5 name="box-open" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationStackNavigator}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <FontAwesome5 name="bell" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={ContactStackNavigator}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcons name="support-agent" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
