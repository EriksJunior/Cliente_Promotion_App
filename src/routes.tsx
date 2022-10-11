import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './page/Home/Home'
import Favorites from './page/Favorites'

const Stack = createNativeStackNavigator();

export default function MyStack(){
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

