import React from "react";
import { Container, Item, ItemTitle, Content, ValueSubTitleSale, ValueSubTitlePromotion } from "./styles";
import { TouchableOpacity } from "react-native";

export default function Balance() {
  return (
    <Container >
      <Item >
        <ItemTitle>Lider em Vendas</ItemTitle>
        <TouchableOpacity activeOpacity={0.5}>
          <Content>
            <ValueSubTitleSale>Bom dia e cia</ValueSubTitleSale>
          </Content>
        </TouchableOpacity>
      </Item>

      <Item >
        <ItemTitle>Promoções hoje</ItemTitle>
        <TouchableOpacity activeOpacity={0.5}>
          <Content>
            <ValueSubTitlePromotion >15</ValueSubTitlePromotion>
          </Content>
        </TouchableOpacity>
      </Item>

    </Container>
  )
}