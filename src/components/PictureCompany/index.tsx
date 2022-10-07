import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import {AntDesign} from '@expo/vector-icons'

interface IDataCompany {
  dataCompany: string,
  key?: number | string,
  picture?: 'addfolder' | 'search1'
}

export default function PictureCompany({dataCompany, picture}: IDataCompany) {
  return (
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.5}>
        <View style={styles.areaButton}>
          <AntDesign name={picture} size={26} color="#FFF"/>
        </View>
        <Text style={styles.labelButton}>{dataCompany}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  actionButton: {
    width: 80,
    alignItems: 'center', 
    marginRight: 20,
  },
  areaButton: {
    backgroundColor: '#009999',
    padding: 10,
    borderRadius: 44 / 2
  },
  labelButton:{
    textAlign: 'center'
  }
})