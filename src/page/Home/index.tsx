import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import PictureCompany from '../../components/PictureCompany';

const listCompany = [
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
  {
    id: 5,
    nameCompany: 'come quente'
  },
  {
    id: 6,
    nameCompany: 'come quente'
  },
  {
    id: 7,
    nameCompany: 'come quente'
  },
  {
    id: 8,
    nameCompany: 'come quente'
  },
  {
    id: 9,
    nameCompany: 'come quente'
  },

]

export default function App() {
  return (
    <View style={styles.container}>
      <Header nameUser={'Eriks Junior'} />
      <Balance />

      <Text style={styles.title}>Lojas disponíveis</Text>

      <View style={styles.contentPictureCompany}>
        <ScrollView style={styles.scrollViewCompany} horizontal={true} showsHorizontalScrollIndicator={false}>
          {listCompany.map((e) => { return <PictureCompany key={e.id} dataCompany={e.nameCompany} /> })}
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
    marginTop: 20,
    paddingStart: 16,
    paddingEnd: 16,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  contentPictureCompany: {
    flexDirection: 'row'
  },
  scrollViewCompany:{
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  }
});
