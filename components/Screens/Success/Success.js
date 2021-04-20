import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Success = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View />
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        Congratulations. The thing you wanted to happen has happened.
      </Text>
      <View />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({});
