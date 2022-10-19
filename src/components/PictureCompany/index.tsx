import React from "react";
import { GestureResponderEvent } from 'react-native'
import { ActionButton, AreaButton, LabelButton } from "./styles";
import { AntDesign } from '@expo/vector-icons'

interface IDataCompany {
  title?: string,
  key?: number | string,
  picture?: 'addfolder' | 'search1',
  color: string,
  backgroundColorPicture?: string,
  onPress?: (event: GestureResponderEvent) => void
}

export default function PictureCompany({ title, picture, color, backgroundColorPicture, onPress }: IDataCompany) {
  return (
    <ActionButton onPress={onPress} activeOpacity={0.5}>
      <AreaButton style={{ backgroundColor: backgroundColorPicture }}>
        <AntDesign name={picture} size={26} color={color} />
      </AreaButton>
      <LabelButton>{title}</LabelButton>
    </ActionButton>
  )
}

// const styles = StyleSheet.create({
//   actionButton: {
//     width: 80,
//     alignItems: 'center',
//     marginRight: 20,
//   },
//   areaButton: {
//     padding: 10,
//     borderRadius: 44 / 2
//   },
//   labelButton:{
//     textAlign: 'center'
//   }
// })