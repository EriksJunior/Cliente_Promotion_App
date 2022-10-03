import Home from './src/page/Home/index'
import {
  StatusBar,
} from 'react-native'

export default function App() {
  StatusBar.setBackgroundColor("transparent")
  
  return (
      <Home />
  );
}
