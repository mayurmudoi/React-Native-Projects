import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/style';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.textBox}>Flat Cards</Text>
        <View style={styles.cardsBlock}>
          <View style={[styles.cards, styles.bgRed]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.cards, styles.bgGreen]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.cards, styles.bgBlue]}>
            <Text>Blue</Text>
          </View>
        </View>
    </View>
  )
}