import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
interface IUserName {
  headerText?: string;
  icon?: 'user'
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ headerText, icon }: IUserName) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeaderUserName}>{headerText}</Text>

        <TouchableOpacity activeOpacity={0.5} style={styles.icon}>
          <Feather name={icon} size={27} color="#fff" />
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
  icon: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },
});
