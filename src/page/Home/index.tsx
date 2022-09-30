import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';

const listShops = [
  {
    id: 1,
    nameCompany: 'Empire Grif'
  },
  {
    id: 2,
    nameCompany: 'Trinnus'
  },
  {
    id: 3,
    nameCompany: 'Trem bão'
  },
  {
    id: 4,
    nameCompany: 'come quente'
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header nameUser={'Eriks Junior'} />
      <Balance />

      <Text style={styles.title}>Lojas disponíveis</Text>

      <FlatList
        style={styles.list}
        data={listShops}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Text>{item.nameCompany}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    paddingStart: 16,
    paddingEnd: 16,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
