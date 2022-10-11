import { NavigationContainer } from '@react-navigation/native'
import {
  StatusBar,
} from 'react-native'
import {MyTab} from './src/routes'

export default function App() {
  StatusBar.setBarStyle("light-content")
  StatusBar.setBackgroundColor("transparent")

  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
