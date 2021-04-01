import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import DrawerNavigator from '../../../routes/DrawerNavigator';

const Home = ({navigation}) => {
  console.log(navigation);
  return (
    <View>
      <Text>Home component</Text>
      <DrawerNavigator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
