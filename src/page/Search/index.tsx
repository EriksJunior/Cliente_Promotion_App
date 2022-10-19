import { View, Text } from "react-native"
import Header from '../../components/Header';

export default function Search(){
  return(
    <View>
      <Header headerText="Realize buscas" backgroundColor={'#181818'} icon={'keyboard-arrow-left'} colorIcon={'#fff'} contentRow={'row-reverse'}/>
      <Text>Realizar buscas</Text>
    </View>
  )
}