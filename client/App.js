import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import SplashScreen from './screens/SplashScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import BottomTabs from "./components/BottomTabs.js";

const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="HomeScreen" component={HomeScreen}
        // options={{
        //   title: "asani.io", 
        //   headerBackVisible: false,
        //   headerTitleAlign:'center',
        //   headerTintColor:'#3e89be',
        // }}
        />
        <Stack.Screen name="SplashScreen" component={SplashScreen}
        // options={{ headerShown: false }} 
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen}
        // options={{ headerShown: false }}
        />
        <Stack.Screen name="App" component={BottomTabs} />

      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})