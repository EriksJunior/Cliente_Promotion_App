import { View, Text } from "react-native"
import Header from '../../components/Header';

export default function MyAccount(){
  return(
    <View>
      <Header headerText="Sua Conta :d" backgroundColor={'#181818'} icon={'keyboard-arrow-left'} colorIcon={'#fff'} contentRow={'row-reverse'}/>
      <Text>Tela minha conta</Text>
    </View>
  )
}