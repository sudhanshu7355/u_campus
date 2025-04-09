import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/Home'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from'@react-navigation/native-stack'
import Order from './src/Order'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <Home />

    
  )
};


const styles = StyleSheet.create({

});
export default App;