import { Text, View } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AppStackParamList = {
    Home: undefined;
    Login: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerTitleAlign:"center",
        headerBackTitleVisible:false
    }}
    >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}