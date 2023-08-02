import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be a min of 4 characters')
  .max(16, 'Should be a max of 16 characters')
  .required('It\'s a required field')
})
export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) =>{
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitsChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCase
    }
    if (lowerCase) {
      characterList += lowerCase
    }
    if (numbers) {
      characterList += numbers
    }
    if (symbols) {
      characterList += symbols
    }

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) =>{
    let result = ''
    for (let i = 0; i < passwordLength ; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = () =>{
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})