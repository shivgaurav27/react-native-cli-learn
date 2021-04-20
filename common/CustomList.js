import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import {useStores} from '../hooks/useStores';
import {Colors, fontSizes, paddingRight, spacing} from '../utils/Sizes';
import AddButton from './AddButton';
import Card from './Card';

const Item = observer(({item, onPress, backgroundColor, textColor}) => {
  const {cartStore} = useStores();
  return (
    <View onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={styles.itemContainer}>
        <Card style={styles.cardContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.url,
            }}
          />
        </Card>
        <View style={styles.titleContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.darkGreyText}>FRESHO</Text>
            <Text style={styles.darkGreyText}>7 hrs</Text>
          </View>
          <Text style={[styles.title, textColor]}>{item.title}</Text>

          <View style={styles.quantityContainer}>
            <Text style={styles.darkGreyText}>{item.qty}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.amount}>Rs.{item.Amount}</Text>
            <Text style={styles.crossedText}>175</Text>
          </View>
          <View style={styles.buttonContainer}>
            <AddButton
              title="Add"
              item={item}
              cartItems={cartStore.cart}
              onPress={() => cartStore.addItemToCart(item)}
            />
          </View>
        </View>
      </View>
    </View>
  );
});

const CustomListItem = ({DATA}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#fff' : '#fff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
  },
  item: {
    width: '96%',
    height: 200,
    marginVertical: 8,
    marginHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
  },
  titleContainer: {
    padding: 10,
    width: '70%',
  },
  image: {
    width: '100%',
    height: 100,
  },
  darkGreyText: {
    color: Colors.DarkGrey,
  },
  SoftPeachText: {
    color: Colors.SoftPeach,
  },
  subTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    fontSize: fontSizes.md,
    backgroundColor: Colors.SoftPeach,
    borderRadius: 5,
    padding: spacing.sm,
  },
  priceContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  crossedText: {
    textDecorationLine: 'underline line-through',
    color: Colors.DarkGrey,
  },
  amount: {
    paddingRight: paddingRight.md,
    fontSize: fontSizes.md,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  cardContainer: {
    height: '100%',
    width: '30%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
