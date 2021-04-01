import {Formik, Field} from 'formik';
import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Input, Image, Button} from 'react-native-elements';
import FormikTextField from '../../../common/FormikTextField';
import * as yup from 'yup';
import CustomButton from '../../../common/CustomButton';
import {spacing} from '../../../utils/Sizes';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('please enter valid email')
    .required('email is required'),
  password: yup.string().required('password is required'),
});

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image
        source={{
          uri:
            'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg',
        }}
        style={{width: 200, height: 200, borderRadius: 10, marginBottom: 20}}
      />

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginValidationSchema}
        onSubmit={values => {
          console.log(values);
          navigation.replace('Home');
        }}>
        {({handleSubmit, isValid}) => (
          <>
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
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Login"
                onPress={handleSubmit}
                disabled={!isValid}
              />
              <CustomButton
                type="outline"
                title="Register"
                onPress={() => navigation.push('Register')}
              />
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
  },
});
