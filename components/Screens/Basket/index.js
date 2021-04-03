import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import CustomListItem from '../../../common/CustomList';

const DATA = [
  {
    id: '1',
    title: 'Baby Apple Shimla',
    qty: '1 kg - (Approx 7-8 pcs)',
    Amount: 137,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '2',
    title: 'Orange',
    Amount: 80,
    qty: '2 kg - (Approx 7-8 pcs)',

    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
];

const Basket = props => {
  const {navigation, cartItems} = props;

  return (
    <View style={styles.center}>
      <CustomListItem DATA={DATA} />
    </View>
  );
};
const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems,
});

export default connect(mapStateToProps)(Basket);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
