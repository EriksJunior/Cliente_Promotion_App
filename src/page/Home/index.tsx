import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import PictureCompany from '../../components/PictureCompany';
import SearchIcon from '../../components/SearchIcon';

const listCompany = [
  {
    id: 1,
    nameCompany: 'Empire Grif lokura'
  },
  {
    id: 2,
    nameCompany: 'Trinnus Açaiteria e Hamburgueria'
  },
  {
    id: 3,
    nameCompany: 'Trem bão'
  },
  {
    id: 4,
    nameCompany: 'Empire grif'
  },
  {
    id: 5,
    nameCompany: 'test'
  },
  {
    id: 6,
    nameCompany: 'test'
  },
  {
    id: 7,
    nameCompany: 'test'
  },
  {
    id: 8,
    nameCompany: 'test'
  },
  {
    id: 9,
    nameCompany: 'test'
  },

]

export default function App() {
  return (
    <View style={styles.container}>
      <Header nameUser={'Eriks Junior'} />
      <Balance />

      <Text style={styles.title}>Lojas Favoritas</Text>

      <View style={styles.contentPictureCompany}>
        <ScrollView style={styles.scrollViewCompany} horizontal={true} showsHorizontalScrollIndicator={false}>
          <SearchIcon />
          {listCompany.map((e) => { return <PictureCompany picture={'addfolder'} key={e.id} dataCompany={e.nameCompany} /> })}
        </ScrollView>
      </View>
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
    marginTop: 40,
    paddingStart: 16,
    paddingEnd: 16,
  },
  contentPictureCompany: {
    flexDirection: 'row'
  },
  scrollViewCompany:{
    maxHeight: 150,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  }
});
