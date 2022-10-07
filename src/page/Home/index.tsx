import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import PictureCompany from '../../components/PictureCompany';
import SearchIcon from '../../components/SearchIcon';
import { CompanyContext } from '../../contexts/company';
import { ICompany } from '../../interfaces/ICompany';


export default function App() {
  const { company, getCompanyPerPage }: any = useContext(CompanyContext)

  useEffect(() => {
    // getCompanyPerPage()
  }, [])

  return (
    <View style={styles.container}>
      <Header nameUser={'Eriks Junior'} />
      <Balance />
      <Text style={styles.title}>Lojas Favoritas</Text>
      <View style={styles.contentPictureCompany}>
        <ScrollView style={styles.scrollViewCompany} horizontal={true} showsHorizontalScrollIndicator={false}>
          <SearchIcon />
          {company.map((e: ICompany) => { return <PictureCompany picture={'addfolder'} key={e.id} dataCompany={e.companyName} /> })}
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
