import { Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../assets/style'

export default function ActionCard() {
  function openWebsite(websiteLink: string){
      Linking.openURL(websiteLink)
  }
return (
  <View>
    <Text style={styles.headingTextBlog}>Blog Card</Text>
    <View style={[styles.cardBlog, styles.elevatedCardBlog]} >
      <View style={styles.headingContainerBlog}>
          <Text style={styles.headerTextBlog}>
              What's new in Javascript 21 - ES12
          </Text>
      </View>
      <Image
      source={{
          uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
      style={styles.cardImageBlog}
      />
      <View style={styles.bodyContainerBlog} >
          <Text numberOfLines={3}>
          Just like every year, Javascript brings in new features. This year
          javascript is bringing 4 new features, which are almost in
          production rollout. I won't be wasting much more time and directly
          jump to code with easy to understand examples.
          </Text>
      </View>
      <View style={styles.footerContainerBlog} >
          <TouchableOpacity
          onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
          >
              <Text style={styles.socialLinksBlog} >Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}
          >
              <Text style={styles.socialLinksBlog}>Follow me</Text>
          </TouchableOpacity>
      </View>
    </View>
  </View>
)
}