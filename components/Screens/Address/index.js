import {Field, Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as yup from 'yup';
import CustomButton from '../../../common/CustomButton';
import FormikTextField from '../../../common/FormikTextField';
import {useStores} from '../../../hooks/useStores';
import {Colors, fontSizes, spacing} from '../../../utils/Sizes';

const initialValues = {
  name: '',
  mobile: '',
  houseNo: '',
  address1: '',
};
const loginValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  mobile: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("Mobile number can't start with a minus")
    .integer("Mobile number can't include a decimal point")
    .min(10)
    .required('Mobile number is required'),
  houseNo: yup.string().required('House No. is required'),
  address1: yup.string().required('Address is required'),
});

const Address = props => {
  const {navigation} = props;
  const {UserStore} = useStores();

  const updateAddress = async values => {
    console.log('values', values);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        {/* <View style={[styles.profileContainer, styles.displayInRow]}>
          <View style={styles.profileWraper}>
            <Text style={{color: Colors.grey}}>Name : {name}</Text>
            <Text style={{color: Colors.grey}}>Mobile : {mobile}</Text>
          </View>
          <FontAwesome
            name="pencil"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
        </View> */}
        <View style={styles.formContainer}>
          <Text style={styles.addressText}>Address Details</Text>
          <View style={styles.formContainer}>
            <Formik
              enableReinitialize={true}
              initialValues={UserStore.user || initialValues}
              validationSchema={loginValidationSchema}
              onSubmit={updateAddress}>
              {({handleSubmit, isValid}) => (
                <>
                  {/* <View style={styles.displayInRow}>
                    <Field
                      component={FormikTextField}
                      name="houseNo"
                      placeholder="House no"
                      keyboardType="numeric"
                      width="30%"
                    />
                    <Field
                      component={FormikTextField}
                      name="apartmentName"
                      placeholder="Apartment name"
                      width="70%"
                    />
                  </View> */}
                  <Field
                    component={FormikTextField}
                    name="name"
                    placeholder="Name"
                    width="100%"
                  />
                  <Field
                    component={FormikTextField}
                    name="mobile"
                    placeholder="Mobile"
                    width="100%"
                    keyboardType="numeric"
                  />
                  <Field
                    component={FormikTextField}
                    name="houseNo"
                    placeholder="House No."
                    width="100%"
                  />

                  <Field
                    component={FormikTextField}
                    name="address1"
                    placeholder="Address 1"
                    width="100%"
                  />
                  <Field
                    component={FormikTextField}
                    name="Address2"
                    placeholder="Address 2"
                    width="100%"
                  />

                  <View style={styles.addressBtnContainer}>
                    <CustomButton
                      backgroundColor={Colors.DarkGrey}
                      title="ADD ADDRESS"
                      color="black"
                      fontWeight="bold"
                      fontSize={fontSizes.md}
                      elevation={2}
                      onPress={handleSubmit}
                      width="95%"
                      disabled={!isValid}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  profileWraper: {
    width: '95%',
  },
  displayInRow: {
    flexDirection: 'row',
  },
  profileContainer: {
    borderColor: Colors.DarkGrey,
    borderWidth: 2,
    borderRadius: 2,
    padding: 10,
  },
  dropDownContainer: {
    backgroundColor: '#f7f6f2',
    marginLeft: spacing.md,
    marginRight: spacing.md,
    opacity: 1,
    width: 150,
  },
  formContainer: {
    flex: 1,
    paddingTop: 20,
  },

  addressBtnContainer: {
    flex: 1,
    top: 50,
    width: '100%',
    bottom: 0,
    height: 100,
  },
  addressText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
