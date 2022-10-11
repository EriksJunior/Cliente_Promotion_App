import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'

import {AntDesign} from '@expo/vector-icons'

interface IDataCompany {
  title?: string,
  key?: number | string,
  picture?: 'addfolder' | 'search1',
  color: string,
  backgroundColorPicture?: string,
  onPress?: (event: GestureResponderEvent) => void
}

export default function PictureCompany({title, picture, color, backgroundColorPicture, onPress}: IDataCompany) {
  return (
      <TouchableOpacity onPress={onPress} style={styles.actionButton} activeOpacity={0.5}>
        <View style={[styles.areaButton, { backgroundColor: backgroundColorPicture}]}>
          <AntDesign name={picture} size={26} color={color}/>
        </View>
        <Text style={styles.labelButton}>{title}</Text>
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
    padding: 10,
    borderRadius: 44 / 2
  },
  labelButton:{
    textAlign: 'center'
  }
})