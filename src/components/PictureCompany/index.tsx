import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import {AntDesign} from '@expo/vector-icons'

export default function PictureCompany({dataCompany}: any) {
  return (
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>{dataCompany}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center', 
    marginRight: 32
    
  },
  areaButton: {
    backgroundColor: '#009999',
    padding: 10,
    borderRadius: 44 / 2
  },
  labelButton:{

  }
})