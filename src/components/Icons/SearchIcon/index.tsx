import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import {AntDesign} from '@expo/vector-icons'

interface IdataIcon {
  name: 'search1',
  title: string
}

export default function SearchIcon(dataIcon: IdataIcon) {
  return (
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.5}>
        <View style={styles.areaButton}>
          <AntDesign name={dataIcon.name} size={26} color="black"/>
        </View>
        <Text style={styles.labelButton}>{dataIcon.title}</Text>
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
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 44 / 2
  },
  labelButton:{
    textAlign: 'center'
  }
})