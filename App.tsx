import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import AddToBasket from './src/screens/addToBasket';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Router from './src/navigations/Routers';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <>
      <Provider store={store}>

        <StatusBar style="auto" />
        <Router />
      </Provider>
    </>
  );
}

export default App;