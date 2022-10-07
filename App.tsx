import Home from './src/page/Home/index'
import {
  StatusBar,
} from 'react-native'

export default function App() {
  StatusBar.setBarStyle("light-content")
  StatusBar.setBackgroundColor("transparent")

  return (
    <Home />
  );
}
