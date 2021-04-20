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
  // {
  //   id: '2',
  //   title: 'Cooks Cafe ',
  //   subTitle: 'Restaurent',
  // },
  // {
  //   id: '3',
  //   title: 'Abc Grocery',
  //   subTitle: 'Grocery , Vegetables && Milk',
  // },
];
const ActiveOrders = ({navigation}) => {
  const Item = ({title, subTitle}) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <View style={styles.cartContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>12/11/2021</Text>
        </View>
        <View style={styles.cartContainer}>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.subTitle}>Rs.430</Text>
        </View>
        <View>
          <Text>Status</Text>
        </View>
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

export default ActiveOrders;

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
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
