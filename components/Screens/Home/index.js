// ./screens/Home.js

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomList from '../../../common/CustomList';

const DATA = [
  {
    id: '1',
    title: 'Orange',
    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '2',
    title: 'Orange',
    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '3',
    title: 'Orange',
    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '4',
    title: 'Orange',
    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '5',
    title: 'Orange',
    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '6',
    title: 'Orange',
    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '7',
    title: 'Orange',
    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '8',
    title: 'Orange',
    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
];

const Home = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <CustomList DATA={DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Home;
