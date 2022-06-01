import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={
          [
            {Key: 'Rober'},
            {Key: 'Saul'},
            {Key: 'Damaris'},
            {Key: 'Ricardo'},
            {Key: 'Omar'},
            {Key: 'Luis'}
          ]
        }
        renderItem={
          ({item}) => <Text>{item.Key}</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
