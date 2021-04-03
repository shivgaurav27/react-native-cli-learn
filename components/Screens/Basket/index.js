import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import AddButton from '../../../common/AddButton';
import CustomListItem from '../../../common/CustomList';
import {fontSizes} from '../../../utils/Sizes';

const Basket = props => {
  const {navigation, cartItems} = props;

  const totalAmount = cartItems => {
    return cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        parseFloat(accumulatedQuantity) +
        parseFloat(cartItem.quantity) * parseFloat(cartItem.Amount),
      0,
    );
  };

  return (
    <View style={styles.center}>
      <CustomListItem DATA={cartItems} />
      <View style={styles.checkoutContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.amountStyle}>Rs. {totalAmount(cartItems)}</Text>
          <AddButton
            width={150}
            borderRadius={0}
            title="Checkout"
            // onPress={totalAmount(cartItems)}
          />
        </View>
      </View>
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
  checkoutContainer: {
    flex: 1,
    backgroundColor: 'rgb(5, 93, 151)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountStyle: {
    color: '#fff',
    fontSize: fontSizes.md,
    padding: 20,
    fontWeight: 'bold',
  },
});
