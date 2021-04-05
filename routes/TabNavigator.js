import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {fontSizes} from '../utils/Sizes';
import {
  BasketStackNavigator,
  CategoriesStackNavigator,
  MainStackNavigator,
  MyListStackNavigator,
  SearchStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = props => {
  const {cartItems} = props;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
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
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: fontSizes.md,
        },
      }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Categories" component={CategoriesStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="My List" component={MyListStackNavigator} />
      <Tab.Screen
        name="Basket"
        component={BasketStackNavigator}
        options={{tabBarBadge: cartItems?.length}}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems,
});

export default connect(mapStateToProps)(BottomTabNavigator);
