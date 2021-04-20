import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CButton from '../../../common/CButton';
import {Colors, fontSizes, spacing} from '../../../utils/Sizes';

const AddressList = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <View style={styles.btnContainer}>
        <CButton
          styles={styles.btn}
          title="Choose current location"
          icon="MaterialIcons"
          iconName="gps-fixed"
        />
      </View>
      <View style={styles.addressHeadingContainer}>
        <View>
          <Text style={[styles.addressBtnText, {padding: spacing.md}]}>
            Saved Addresses
          </Text>
        </View>
        <View>
          <CButton
            styles={(styles.btn, {...styles.addressBtn})}
            title="+ add new address"
            width={'100%'}
            color="blue"
            fontSize={fontSizes.md}
            elevation={2}
          />
        </View>
      </View>
      <View
        style={[
          styles.addressHeadingContainer,
          {backgroundColor: Colors.white, paddingBottom: spacing.md},
        ]}>
        <View style={[styles.addressHeadingContainer]}>
          <Text style={{padding: spacing.sm}}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </Text>
          <View>
            <Text style={[styles.defaultAddressRedText]}>
              Default Address :
              <Text style={{color: Colors.black, fontWeight: 'bold'}}>
                {' '}
                Home
              </Text>
            </Text>
            <View style={{width: 210}}>
              <Text style={styles.addressBtnText}>gaurang bansal</Text>
              <Text style={styles.addressBtnText}>
                c191 gulshan ikebana sector 143 , noida-ghazibad -201301
                ph:19282928299
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.addressHeadingContainer, styles.iconContainer]}>
          <FontAwesome
            name="pencil"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
          <Text
            style={[
              styles.iconStyle,
              {fontSize: fontSizes.lg, fontWeight: 'bold'},
            ]}>
            |
          </Text>
          <FontAwesome
            name="trash"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
        </View>
      </View>
      <View
        style={[
          styles.addressHeadingContainer,
          {backgroundColor: Colors.white, paddingBottom: spacing.md},
        ]}>
        <View style={[styles.addressHeadingContainer]}>
          <Text style={{padding: spacing.sm}}>
            <RadioButton
              value="first"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </Text>
          <View>
            <Text style={[styles.OtherAddressRedText]}>
              office Address :
              <Text style={{color: Colors.black, fontWeight: 'bold'}}>
                {' '}
                office
              </Text>
            </Text>
            <View style={{width: 210}}>
              <Text style={styles.addressBtnText}>gaurang bansal</Text>
              <Text style={styles.addressBtnText}>
                c191 gulshan ikebana sector 143 , noida-ghazibad -201301
                ph:19282928299
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.addressHeadingContainer, styles.iconContainer]}>
          <FontAwesome
            name="pencil"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
          <Text
            style={[
              styles.iconStyle,
              {fontSize: fontSizes.lg, fontWeight: 'bold'},
            ]}>
            |
          </Text>
          <FontAwesome
            name="trash"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: Colors.DarkGrey,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  btnContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  addressHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressBtnText: {
    fontSize: fontSizes.md,
    color: Colors.DarkGrey,
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 10,
  },
  iconStyle: {
    padding: 10,
  },
  defaultAddressRedText: {
    fontSize: fontSizes.headiing2,
    fontWeight: 'bold',
    color: 'red',
    paddingTop: 16,
  },
  OtherAddressRedText: {
    fontSize: fontSizes.headiing2,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 16,
  },
  addressBtn: {
    padding: 20,
  },
});
