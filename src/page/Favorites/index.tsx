import React from 'react';
import {View, Text} from 'react-native'
import Header from '../../components/Header';

export default function App() {
  return (
      <View>
        <Header headerText='Sua lojas Favoritas :)'/>
        <Text>Todas lojas Favoritas</Text>
      </View>
  );
}