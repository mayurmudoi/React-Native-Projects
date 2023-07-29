import { SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import TrendingPlaces from './components/TrendingPlaces'
import BlogCard from './components/BlogCard'
import ContactList from './components/ContactList'

export default function App(){
  return(
    <SafeAreaView><ScrollView showsVerticalScrollIndicator={false}>
      <View style={{margin:10}}>

        <FlatCards/>
        <ElevatedCards/>
        <TrendingPlaces/>
        <BlogCard/>
        <ContactList/>
                
      </View></ScrollView>
    </SafeAreaView>
  )
}