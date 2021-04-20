import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {observer} from 'mobx-react';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useStores} from '../hooks/useStores';
import {fontSizes} from '../utils/Sizes';
import {
  BasketStackNavigator,
  CategoriesStackNavigator,
  MainStackNavigator,
  MyListStackNavigator,
  SearchStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = observer(() => {
  const {cartStore} = useStores();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Store') {
            iconName = focused ? 'store' : 'store';
          }
          if (route.name === 'Basket') {
            iconName = focused ? 'shopping-basket' : 'shopping-basket';
          }
          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }
          if (route.name === 'My List') {
            iconName = focused ? 'list' : 'list';
          }
          if (route.name === 'Categories') {
            iconName = focused ? 'th' : 'th';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
        labelStyle: {
          fontSize: fontSizes.md,
        },
      }}>
      <Tab.Screen name="Store" component={MainStackNavigator} />
      <Tab.Screen name="Categories" component={CategoriesStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="My List" component={MyListStackNavigator} />
      <Tab.Screen
        name="Basket"
        component={BasketStackNavigator}
        options={{tabBarBadge: cartStore.cart.length}}
      />
    </Tab.Navigator>
  );
});

export default BottomTabNavigator;
