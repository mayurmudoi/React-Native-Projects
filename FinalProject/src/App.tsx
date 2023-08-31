import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from "./routes/Router";

export default function App(){
  return(
    <SafeAreaProvider>
      <Router/>
    </SafeAreaProvider>
  )
}