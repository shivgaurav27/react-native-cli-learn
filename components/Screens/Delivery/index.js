import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CButton from '../../../common//CButton';
import AddButton from '../../../common/AddButton';
import ModalPopup from '../../../common/ModalPopup';
import {useStores} from '../../../hooks/useStores';
import {Colors, fontSizes, spacing} from '../../../utils/Sizes';

const Delivery = ({navigation}) => {
  const {UserStore} = useStores();
  const [visible, setVisible] = React.useState(false);
  const [address, setAddress] = useState(UserStore.user.address1);

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
            <CButton
              styles={styles.btn}
              title="Change"
              onPress={() => navigation.navigate('Address')}
            />
          </View>
        </View>
        <View style={styles.addressTextContainer}>
          <Text style={[styles.addressTextStyle, {padding: spacing.sm}]}>
            {address}
          </Text>
        </View>
      </View>

      <View style={{elevation: 8, backgroundColor: Colors.SoftPeach}}>
        <Text style={{marginLeft: spacing.md, paddingTop: spacing.md}}>
          Delivery Charge: Rs 50
        </Text>
        <View style={{alignItems: 'center', zIndex: 1}}>
          <AddButton
            title="confirm order"
            width={'90%'}
            borderRadius={5}
            onPress={() => setVisible(true)}
          />
        </View>
        <ModalPopup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.header}
              onPress={() => setVisible(false)}>
              <Image
                source={require('../../../assets/x.png')}
                style={styles.crossImg}
              />
            </TouchableOpacity>
            <Image
              source={require('../../../assets/success.png')}
              style={styles.successImg}
            />
            <Text style={styles.modalText}>
              Congratulations Order Successfully placed.
            </Text>
          </View>
        </ModalPopup>
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
  modalText: {
    marginVertical: 20,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    fontSize: fontSizes.xxl,
  },
  successImg: {
    height: 150,
    width: 150,
    marginVertical: 10,
  },
  crossImg: {
    width: 30,
    height: 30,
  },
});
