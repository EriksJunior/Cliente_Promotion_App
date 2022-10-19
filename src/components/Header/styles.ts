import styled from 'styled-components/native'
import {
  StatusBar,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const Container = styled.View`
  background-color: #181818;
  padding-top: ${statusBarHeight}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 50px;
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #009999;
`;

export const TouchableOpacityIcon = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
