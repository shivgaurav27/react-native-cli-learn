import {withNavigation} from '@react-navigation/compat';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fontSizes} from '../utils/Sizes';

const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      {/* icons  for the menu */}
      <FontAwesome
        name="align-justify"
        size={24}
        color="#333"
        style={styles.icon}
        onPress={openMenu}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default withNavigation(Header);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: fontSizes.md,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
});
