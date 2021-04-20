import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fontSizes} from '../utils/Sizes';

const CButton = props => {
  const {
    onPress,
    disabled,
    styles,
    title,
    color,
    fontWeight,
    fontSize,
    ...rest
  } = props;
  console.log('prpos', props);
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{...styles.appButtonContainer, ...styles}}>
      <Text
        style={[
          styles.appButtonText,
          color && {color: color},
          fontWeight && {fontWeight: 'bold'},
          fontSize && {fontSize: fontSize},
        ]}
        {...rest}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    opacity: 0.6,
    backgroundColor: '#0783C3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    width: 200,
  },
  appButtonText: {
    fontSize: fontSizes.sm,
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
