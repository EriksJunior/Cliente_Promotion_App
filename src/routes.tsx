import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import Home from './page/Home/Home'
import Categories from "./page/Categories";
import Search from "./page/Search";
import Favorites from './page/Favorites'
import MyAccount from "./page/MyAccount";
import TabButtonSearch from "./components/TabButtonSearch";

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
export default function Routes() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#181818',
        borderTopColor: 'transparent',
      },
      tabBarActiveTintColor: '#009999',
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )
        }} />

      <Tab.Screen
        name="Categorias"
        component={Categories}
        options={{
          headerShown: false, tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="view-grid" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <TabButtonSearch  size={size} color={'white'} focused={focused}/>
          )
        }}
      />

      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          headerShown: false, tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="star-shooting" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Minha conta"
        component={MyAccount}
        options={{
          headerShown: false, tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={25} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Favoritos" component={Favorites} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}