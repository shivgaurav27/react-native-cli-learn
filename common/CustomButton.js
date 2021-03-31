import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  buttonBackgroundColor,
} from 'react-native';

const CustomButton = props => {
  console.log('props==>', props);
  const {title, onPress, disabled, buttonBackgroundColor, ...rest} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.appButtonContainer, disabled && styles.appButtonDisabled]}>
      <Text style={styles.appButtonText} {...rest}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#0783C3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  appButtonDisabled: {
    backgroundColor: '#cccccc',
    color: '#666666',
  },
});
