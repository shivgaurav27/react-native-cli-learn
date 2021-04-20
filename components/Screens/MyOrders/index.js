import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import ActiveOrders from '../ActiveOrders';
import CompletedOrders from '../CompletedOrders';

const Tab = createMaterialTopTabNavigator();

const MyOrders = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Active orders" component={ActiveOrders} />
        <Tab.Screen name="Completed Orders" component={CompletedOrders} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyOrders;

const styles = StyleSheet.create({});
