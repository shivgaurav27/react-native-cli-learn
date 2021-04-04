import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CButton from '../../../common//CButton';
import {Colors, fontSizes, spacing} from '../../../utils/Sizes';

const Delivery = () => {
  const [address, setAddress] = useState(
    'Block B  B-192 Top Floor Pandav Nagar,  Delhi pin-110092',
  );
  return (
    <View>
      <View style={{backgroundColor: Colors.white, elevation: 8}}>
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
      <View style={{marginTop: 20, backgroundColor: 'white', elevation: 8}}>
        <View
          style={[
            styles.addressContainer,
            styles.padding10,
            {justifyContent: 'space-between'},
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
  },
});
