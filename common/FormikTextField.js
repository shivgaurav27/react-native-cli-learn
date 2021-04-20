import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {fontSizes} from '../utils/Sizes';
const FormikTextField = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    width,
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View style={[styles.inputContainer, width && {width: width}]}>
      <Input
        style={[hasError && styles.errorInput]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );
};

export default FormikTextField;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  errorText: {
    fontSize: fontSizes.md,
    color: 'red',
    marginLeft: '5%',
  },
  errorInput: {
    borderColor: 'red',
  },
});
