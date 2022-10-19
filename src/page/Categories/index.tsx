import { View, Text } from "react-native"
import Header from '../../components/Header';

export default function Categories() {
  return (
    <View>
      <Header headerText="Suas Categorias :D" backgroundColor={'#181818'} icon={'arrow-left'} colorIcon={'#fff'} contentRow={'row-reverse'} />
      <Text>Tela de Caretogiras</Text>
    </View>
  )
}