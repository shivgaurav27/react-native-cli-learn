import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StoresData = [
  {
    id: '1',
    title: 'Om Atta Chakki',
    subTitle: 'Grocery && Milk ',
  },
  {
    id: '2',
    title: 'Cooks Cafe ',
    subTitle: 'Restaurent',
  },
  {
    id: '3',
    title: 'Abc Grocery',
    subTitle: 'Grocery , Vegetables && Milk',
  },
];
const DATA = [
  {
    id: '1',
    title: 'Baby Apple Shimla',
    qty: '1 kg - (Approx 7-8 pcs)',
    Amount: 137,
    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '2',
    title: 'Orange',
    Amount: 80,
    qty: '2 kg - (Approx 7-8 pcs)',

    url:
      'https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  },
  {
    id: '3',
    title: 'Mango',
    qty: '3 kg - (Approx 7-8 pcs)',

    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  },
  {
    id: '4',
    title: 'Straberry',
    qty: '1 kg - (Approx 7-8 pcs)',

    Amount: 80,
    url:
      'https://images.unsplash.com/photo-1575808142341-e39853744dbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80',
  },
];

const Stores = ({navigation}) => {
  const Item = ({title, subTitle}) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', {
            DATA: DATA,
            title: title,
          });
        }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => (
    <Item title={item.title} subTitle={item.subTitle} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={StoresData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Stores;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#bdbdbd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
    elevation: 7,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
  },
  subTitle: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});
