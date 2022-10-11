import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './page/Home/Home'
import Favorites from './page/Favorites'

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export { MyStack, MyTab, Drawer }

