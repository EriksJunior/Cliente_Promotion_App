import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

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
        component={Favorites}
        options={{
          headerShown: false, tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="view-grid" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Pesquisar"
        component={Favorites}
        options={{
          headerShown: false, tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="shield-search" size={size} color={color} />
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
        component={Favorites}
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