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
import CustomButton from '../common/CustomButton';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image
      source={{
        uri: item.url,
      }}
      style={styles.imgContainer}
    />
    <View style={styles.titleContainer}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton title="Add" width={100} backgroundColor="red" />
      </View>
    </View>
  </TouchableOpacity>
);

const CustomListItem = ({DATA}) => {
  console.log('Data', DATA);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
  titleContainer: {
    marginLeft: 20,
  },
  imgContainer: {
    width: 100,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    top: '30%',
    left: '100%',
  },
});
