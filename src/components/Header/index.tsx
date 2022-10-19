import React from "react";

import { Container, Content, TextHeader, TouchableOpacityIcon } from "./styles";
import { Feather } from "@expo/vector-icons";
interface IUserName {
  headerText?: string
  icon?: 'user' | 'arrow-left'
  backgroundColor?: string
  colorIcon?: string
}

export default function Header({ headerText, icon, backgroundColor, colorIcon }: IUserName) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Content>
        <TextHeader>{headerText}</TextHeader>

        <TouchableOpacityIcon activeOpacity={0.5}>
          <Feather name={icon} size={27} color={colorIcon} />
        </TouchableOpacityIcon>
      </Content>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#181818",
//     paddingTop: statusBarHeight,
//     paddingStart: 16,
//     paddingEnd: 16,
//     paddingBottom: 50,
//     flexDirection: "row",
//   },
//   content: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   textHeader: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#009999",
//   },
//   icon: {
//     width: 44,
//     height: 44,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 44 / 2,
//   },
// });
