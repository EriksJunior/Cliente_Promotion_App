import React from "react"
import { View, StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

interface ITabButtonSearch{
  size: number,
  color?: string
  focused: boolean
}
export default function TabButtonSearch({size, color, focused}: ITabButtonSearch) {
  return (
    <View style={[styles.container, {backgroundColor: focused ?  '#008888' : '#009999'} ]}>
      <FontAwesome name="search" size={size} color={ focused ? '#fff' : '#C0C0C0'}></FontAwesome > 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  }
})