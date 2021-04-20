import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useStores} from '../hooks/useStores';
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
    item,
    cartItems,
    fontSize,
    color,
    ...rest
  } = props;
  const {cartStore} = useStores();

  const matchId = cartItems?.find(cartItem => cartItem.id === item.id);

  if (matchId === undefined) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.appButtonContainer,
          disabled && styles.appButtonDisabled,
          width && {width: width},
          fontSize && {fontSize: fontSize},
          borderRadius && {borderRadius: borderRadius},
          backgroundColor && {backgroundColor: backgroundColor},
        ]}>
        <Text style={[styles.appButtonText, color && {color: color}]} {...rest}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.countButtonContainer}>
        <TouchableOpacity>
          <FontAwesome
            name="minus"
            size={24}
            color="red"
            onPress={() => cartStore.removeItemFromCart(item)}
          />
        </TouchableOpacity>
        <Text style={styles.countTextStyle}>{matchId.quantity}</Text>
        <TouchableOpacity>
          <FontAwesome
            name="plus"
            size={24}
            color="red"
            onPress={() => cartStore.addItemToCart(item)}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default AddButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    width: 100,
    zIndex: 1,
  },
  appButtonText: {
    fontSize: fontSizes.md,
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
