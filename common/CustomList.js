import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import {Colors, fontSizes, paddingRight, spacing} from '../utils/Sizes';
import Card from './Card';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
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
      </View>
    </View>
  </TouchableOpacity>
);

const CustomListItem = ({DATA}) => {
  console.log('Data', DATA);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#fff' : '#fff';
    // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
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
    height: 150,
    marginVertical: 8,
    marginHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
  titleContainer: {
    padding: 10,
    // marginLeft: 20,
    width: '70%',
  },
  image: {
    width: 100,
    height: 100,
  },
  darkGreyText: {
    color: Colors.DarkGrey,
  },
  SoftPeachText: {
    color: Colors.SoftPeach,
  },
  subTitleContainer: {
    padding: 10,
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
});
