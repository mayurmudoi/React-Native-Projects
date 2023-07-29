import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../assets/style'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.textBox}>Elevated Cards</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cardsBlock}>
            <View style={[styles.cards, styles.cardsAlt, styles.ecards]}>
              <Text>Tap</Text>
            </View>
            <View style={[styles.cards, styles.cardsAlt, styles.ecards]}>
              <Text>me</Text>
            </View>
            <View style={[styles.cards, styles.cardsAlt, styles.ecards]}>
              <Text>to</Text>
            </View>
            <View style={[styles.cards, styles.cardsAlt, styles.ecards]}>
              <Text>scroll</Text>
            </View>
          </View>
        </ScrollView>
    </View>
  )
}