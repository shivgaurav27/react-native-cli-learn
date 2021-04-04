import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CButton from '../../../common//CButton';
import AddButton from '../../../common/AddButton';
import {Colors, fontSizes, spacing} from '../../../utils/Sizes';
const Delivery = () => {
  const [address, setAddress] = useState(
    'Block B  B-192 Top Floor Pandav Nagar,  Delhi pin-110092',
  );
  return (
    <View>
      <View style={styles.giftContainer}>
        <View style={styles.container}>
          <View style={[styles.addressContainer, styles.padding10]}>
            <FontAwesome name="map-marker" size={24} color="black" />
            <View>
              <Text style={styles.addressText}>Deliver to : Home</Text>
            </View>
            <Text style={{paddingLeft: spacing.sm}}>(Default)</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CButton styles={styles.btn} title="Change" />
          </View>
        </View>
        <View style={styles.addressTextContainer}>
          <Text style={[styles.addressTextStyle, {padding: spacing.sm}]}>
            {address}
          </Text>
        </View>
      </View>
      <View style={[styles.giftContainer, styles.marginTop20]}>
        <View
          style={[
            styles.addressContainer,
            styles.padding10,
            styles.spaceBetweenClass,
          ]}>
          <View style={styles.addressContainer}>
            <FontAwesome name="gift" size={24} color="black" />
            <Text style={[styles.addressText, {paddingLeft: spacing.sm}]}>
              Is this a gift order ?
            </Text>
          </View>
          <CButton styles={styles.btn} title="Add Message" />
        </View>
      </View>
      <View style={[styles.marginTop20, styles.defaultDeliveryOption]}>
        <View
          style={[
            styles.addressContainer,
            styles.padding10,
            styles.spaceBetweenClass,
          ]}>
          <View style={styles.addressContainer}>
            <Text style={[styles.addressText, {paddingLeft: spacing.sm}]}>
              Default Delivery Option
            </Text>
          </View>
          <View>
            <Text>1 Shipment </Text>
            <Text>Delivery Charges Rs. 50</Text>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: Colors.white, paddingTop: 10}}></View>
      <View
        style={[
          styles.addressContainer,
          styles.padding10,
          styles.spaceBetweenClass,
          {elevation: 5},
        ]}>
        <View style={styles.addressContainer}>
          <Text style={[{paddingLeft: spacing.sm}]}>
            Shipment 1: Standard Delivery
          </Text>
        </View>
        <CButton styles={styles.btn} title="View 1 item" />
      </View>
      <View style={{elevation: 8, backgroundColor: Colors.SoftPeach}}>
        <DropDownPicker
          items={[
            {label: 'Today 09:00 PM - 10:00 PM', value: 'uk'},
            {label: 'Today 08:00 PM - 08:00 PM', value: 'uk'},
            {label: 'Today 10:00 PM - 05:00 PM', value: 'uk'},
          ]}
          placeholder="Select a country"
          containerStyle={{height: 40}}
          style={styles.dropDownContainer}
          dropDownStyle={{backgroundColor: Colors.white}}
        />
        <Text style={{marginLeft: spacing.md, paddingTop: spacing.md}}>
          Delivery Charge: Rs 50
        </Text>
        <View style={{alignItems: 'center', zIndex: 1}}>
          <AddButton title="proceed to pay" width={'90%'} borderRadius={5} />
        </View>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  padding10: {
    padding: 10,
  },
  addressContainer: {
    flexDirection: 'row',
  },
  addressText: {
    paddingLeft: spacing.sm,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 10,
  },
  btn: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#3b3b3b',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressTextStyle: {
    fontSize: fontSizes.md,
    color: Colors.greyFont,
    fontWeight: '700',
  },
  addressTextContainer: {
    width: '100%',
  },
  giftContainer: {
    backgroundColor: Colors.white,
    elevation: 8,
  },
  spaceBetweenClass: {
    justifyContent: 'space-between',
  },
  marginTop20: {
    marginTop: 20,
  },
  defaultDeliveryOption: {
    backgroundColor: Colors.SoftPeach,
    elevation: 8,
  },
  paybtn: {
    width: 100,
    backgroundColor: 'red',
  },
  dropDownContainer: {
    backgroundColor: Colors.white,
    marginLeft: spacing.md,
    marginRight: spacing.md,
    opacity: 1,
  },
});
