import { NavigationContainer } from '@react-navigation/native'
import {
  StatusBar,
} from 'react-native'
import Routes from './src/routes'

export default function App() {
  StatusBar.setBarStyle("light-content")
  StatusBar.setBackgroundColor("transparent")

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
