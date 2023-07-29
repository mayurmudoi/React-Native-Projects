import { View, Text , Image} from 'react-native'
import React from 'react'
import styles from '../assets/style'

export default function TrendingPlaces() {
  return (
    <View>
      <Text style={styles.textBox}>Trending Places</Text>
        <View style={styles.trendingPlacesBlock}>
          <Image source={require('../assets/images/image.jpg')} style={{height:200, width:'100%',marginBottom:8, borderTopLeftRadius:6, borderTopRightRadius:6}}/>
          <View style={{flex:1, flexGrow:1, paddingHorizontal:12}}>
            <Text style={styles.cardTitle}>Learning React native</Text>
            <Text style={styles.cardDescription}>React Native is a javascript framework for building mobile applications using javascript and react. It's a very popular language and is widely used by many companies like Facebook, Tesla, IBM, etc.</Text>
            <Text>3 months completed on react native</Text>
          </View>
        </View>
    </View>
  )
}