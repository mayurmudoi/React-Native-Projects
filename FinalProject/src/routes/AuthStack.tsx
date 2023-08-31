import { Text, View } from 'react-native';
import React from 'react';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

export type AuthStackParamList = {
    Signup: undefined;
    Login: undefined;
    Home: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerTitleAlign:"center",
        headerBackTitleVisible:false
    }}
    >
        <Stack.Screen name="Login" component={Login} options={{
           headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{
           headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{
           headerShown:false}} />
    </Stack.Navigator>
  )
}