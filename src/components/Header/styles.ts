import styled from 'styled-components/native'
import {
  StatusBar,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + "22" : "64";

export const Container = styled.View`
    background-color: "#181818";
    padding-top: ${statusBarHeight};
    padding-start: "16";
  padding-end: "16";
    padding-bottom: "50";
    flex-direction: "row";
`;
