// ./screens/Home.js

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomList from '../../../common/CustomList';
import {fontSizes, spacing} from '../../../utils/Sizes';

const Home = ({navigation, route}) => {
  const {DATA, title} = route.params;
  return (
    <View style={styles.center}>
      <Text style={styles.storesTextStyle}>{title}</Text>
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
  storesTextStyle: {
    paddingTop: spacing.sm,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
    color: '#333',
    letterSpacing: 1,
  },
});

export default Home;
