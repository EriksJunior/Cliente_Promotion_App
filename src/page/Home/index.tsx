import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import PictureCompany from '../../components/PictureCompany';
import { ICompany } from '../../interfaces/ICompany';
import { CompanyContext } from '../../contexts/company';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const { company, getCompanyPerPage } = useContext(CompanyContext) as { company: Array<ICompany>, getCompanyPerPage: any }
  const navigation = useNavigation()

  useEffect(() => {
    getCompanyPerPage()
  }, [])

  function handleOpenFavorites() {
    navigation.navigate('Favorites' as never)
  }

  return (
    <View style={styles.container}>
      <Header nameUser={'Eriks Junior'} />
      <Balance />
      <Text style={styles.title}>Lojas Favoritas</Text>
      <View style={styles.contentPictureCompany}>
        <ScrollView style={styles.scrollViewCompany} horizontal={true} showsHorizontalScrollIndicator={false}>
          <PictureCompany onPress={() => handleOpenFavorites()} picture={'search1'} backgroundColorPicture={'#FFF'} color={'black'} title={'Pesquisar'} />
          {company.map((e: ICompany) => { return <PictureCompany backgroundColorPicture={'#009999'} color={'#FFF'} picture={'addfolder'} key={e.id} title={e.companyName} /> })}
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
  scrollViewCompany: {
    maxHeight: 150,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  }
});
