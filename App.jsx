import * as React from 'react';
import { Text ,View} from 'react-native';
import Home from './pages/Home'
import CreateYourPizza from './pages/CreateYourPizza'
import PizzaCustomizing from './pages/PizzaCustomizing'

export default function App() {
  return (
    <View>
      {/* <Home/> */}
      {/* <CreateYourPizza/> */}
      <PizzaCustomizing/>

    </View>
  );
}