import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ICompany } from '../../interfaces/ICompany'
import { CompanyContext } from '../../contexts/company'
interface IUserName {
  nameUser: string;
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ nameUser }: IUserName) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeaderUserName}>Olá, {nameUser}</Text>

        <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    paddingTop: statusBarHeight,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 50,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHeaderUserName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#009999",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "#009999",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },
});
