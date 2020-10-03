import "react-native-gesture-handler";
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import createStore from './src/reducks/store/store'
import {Provider as PaperProvider} from 'react-native-paper'
import {Provider as ReduxProvider} from 'react-redux'
import {Home, Books, Account,SignIn,SignUp,Reset, Register} from './src/templates/index'
import Navigation from './Navigation'

export const store = createStore()

const App = () => {
  return (
    <ReduxProvider store={store}>
    <PaperProvider>
      <NavigationContainer>
    <Navigation />
      </NavigationContainer>
    </PaperProvider>
    </ReduxProvider>
  );
}

export default App
