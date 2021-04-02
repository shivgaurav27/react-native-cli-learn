import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const AddButton = props => {
  const {
    title,
    onPress,
    disabled,
    buttonBackgroundColor,
    width,
    backgroundColor,
    borderRadius,
    ...rest
  } = props;
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
});
