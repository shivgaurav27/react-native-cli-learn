import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import CustomListItem from '../../../common/CustomList';

const Basket = props => {
  const {navigation, cartItems} = props;

  return (
    <View style={styles.center}>
      <CustomListItem DATA={cartItems} />
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
