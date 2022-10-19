import { View, Text } from "react-native"
import Header from '../../components/Header';

export default function Categories(){
  return(
    <View>
      <Header headerText="Suas Categorias :D" backgroundColor={'black'} icon={'arrow-left'} colorIcon={'#fff'}/>
      <Text>Tela de Caretogiras</Text>
    </View>
  )
}