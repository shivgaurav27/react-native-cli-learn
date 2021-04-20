import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Drawer} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Drawer.Section title="User">
            <TouchableOpacity />
          </Drawer.Section>
          <DrawerItem
            label="Stores"
            onPress={() => props.navigation.navigate('Stores')}
            icon={({color, size}) => (
              <FontAwesome5 name="store" size={size} color={color} />
            )}
          />
          <DrawerItem
            label="My Orders"
            onPress={() => props.navigation.navigate('MyOrders')}
            icon={({color, size}) => (
              <FontAwesome5 name="box-open" size={size} color={color} />
            )}
          />
          <DrawerItem
            label="Notification"
            onPress={() => props.navigation.navigate('Notification')}
            icon={({color, size}) => (
              <FontAwesome5 name="bell" size={size} color={color} />
            )}
          />
          <DrawerItem
            label="Help"
            onPress={() => props.navigation.navigate('Help')}
            icon={({color, size}) => (
              <MaterialIcons name="support-agent" size={size} color={color} />
            )}
          />
          <Drawer.Section title="Store Owner">
            <TouchableOpacity />
          </Drawer.Section>

          <DrawerItem
            label="Store Manager Login"
            //   onPress={() => alert('bottom')}
            icon={({color, size}) => (
              <FontAwesome5 name="user" size={size} color={color} />
            )}
          />
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          //   onPress={() => alert('bottom')}
          icon={({color, size}) => (
            <MaterialIcons name="exit-to-app" size={size} color={color} />
          )}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  drawerContent: {
    flex: 1,
  },
});
