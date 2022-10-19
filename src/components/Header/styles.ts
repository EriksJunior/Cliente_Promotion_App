import styled from 'styled-components/native'
import {
  StatusBar,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

interface IContainerStyleProps {
  backgroundColor?: string
  contentRow?: string
}

export const Container = styled.View<IContainerStyleProps>`
  background-color: ${props => props.backgroundColor};
  padding-top: ${statusBarHeight}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 50px;
  flex-direction: row;
`;

export const Content = styled.View<IContainerStyleProps>`
  flex: 1;
  flex-direction: ${props => props.contentRow} ;//passar style row-reverse nos componente
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
