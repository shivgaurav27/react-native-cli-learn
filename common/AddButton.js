import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {addItem, removeItem} from '../redux/cart/cart.action';
import {fontSizes} from '../utils/Sizes';

const AddButton = props => {
  const {
    title,
    onPress,
    disabled,
    buttonBackgroundColor,
    width,
    backgroundColor,
    borderRadius,
    cartItems,
    item,
    addItem,
    removeItem,
    ...rest
  } = props;
  console.log('cartItems in add btn ', cartItems);
  const matchId = cartItems.find(cartItem => cartItem.id === item.id);

  if (matchId === undefined) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.appButtonContainer,
          disabled && styles.appButtonDisabled,
          width && {width: width},
          backgroundColor && {backgroundColor: backgroundColor},
        ]}>
        <Text style={styles.appButtonText} {...rest}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.countButtonContainer}>
        <TouchableOpacity onPress={() => removeItem(item)}>
          <FontAwesome name="minus" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.countTextStyle}>{matchId.quantity}</Text>
        <TouchableOpacity onPress={() => addItem(item)}>
          <FontAwesome name="plus" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  }
};

const mapDispatchToprops = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToprops)(AddButton);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    width: 100,
  },
  appButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  appButtonDisabled: {
    backgroundColor: '#cccccc',
    color: '#666666',
  },

  //
  countButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    margin: 10,
  },
  countTextStyle: {
    fontSize: fontSizes.md,
  },
});
