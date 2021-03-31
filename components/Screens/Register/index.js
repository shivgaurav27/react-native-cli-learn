import React, {useState} from 'react';
import {Formik, Field} from 'formik';

import {KeyboardAvoidingView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import FormikTextField from '../../../common/FormikTextField';
import {spacing} from '../../../utils/Sizes';

import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const loginValidationSchema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref('password')], 'Password mismatch'),
  }),
});

const RegisterScreen = props => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text h3 style={{marginBottom: 40}}>
        Create Account
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={values => console.log(values)}>
        {({handleSubmit, isValid}) => (
          <>
            <Field
              component={FormikTextField}
              name="name"
              placeholder="full name"
            />
            <Field
              component={FormikTextField}
              name="email"
              placeholder="email"
              keyboardType="email-address"
            />
            <Field
              component={FormikTextField}
              name="password"
              placeholder="password"
              secureTextEntry
            />
            <Field
              component={FormikTextField}
              name="confirmPassword"
              placeholder="confirm password"
              secureTextEntry
            />
            <Button
              containerStyle={styles.button}
              disabled={!isValid}
              raised
              title="Register"
              // onPress={register}
            />
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
