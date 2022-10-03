import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Balance() {
  return (
    <View style={styles.container}>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Lider em Vendas</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.content}>
            <Text style={styles.valueSubTitleSale}>Bom dia e cia</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Promoções hoje</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.content}>
            <Text style={styles.valueSubTitlePromotion}>15</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  item: {
    backgroundColor: '#fafafa',
    width: 175,
    paddingStart: 15,
    paddingEnd: 15,
    marginTop: -22,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    alignItems: 'center'
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: '#464646'
  },
  content: {
    flexDirection: 'row',
    borderRadius: 4,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  valueSubTitleSale: {
    fontWeight: 'bold',
    borderRadius: 4,
    backgroundColor: '#009999',
    padding: 10,
    color: 'white'
  },
  valueSubTitlePromotion: {
    fontWeight: 'bold',
    borderRadius: 4,
    backgroundColor: '#009999',
    padding: 10,
    width: 100,
    textAlign: 'center',
    color: 'white'
  }
})