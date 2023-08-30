import { View, Text } from 'react-native';
import React, { useContext, useState ,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Loading from '../components/Loading';
import { AppwriteContext } from '../appwrite/AppwriteContext';
//Routes
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

export const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext)
    
    useEffect(() => {
      appwrite
      .getCurrentUser()
      .then(Response =>{
        setIsLoading(false)
        if (Response){
            setIsLoggedIn(true)
        }
      })
      .catch(_ =>{
        setIsLoading(false)
        setIsLoggedIn(false)
      })
    }, [appwrite, setIsLoggedIn])
    
    if (isLoading){
        return <Loading/>
    }
    return (
    <NavigationContainer>
        {isLoggedIn ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}

