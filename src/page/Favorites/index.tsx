import React from 'react';
import {View, Text} from 'react-native'
import Header from '../../components/Header';

export default function App() {
  return (
      <View>
        <Header headerText='Sua lojas Favoritas :)' backgroundColor={'#181818'} icon={'keyboard-arrow-left'} colorIcon={'#fff'} contentRow={'row-reverse'}/>
        <Text>Todas lojas Favoritas</Text>
      </View>
  );
}