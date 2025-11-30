import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const News = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imageCon}>

        <Image style={styles.image} source={require("../../assets/sena.png")}></Image>
        </View>
      <Text>News</Text>
    </View>
  )
}

export default News

const styles = StyleSheet.create({
container: {
    flex:1,
    paddingBottom: 15,
}
,
image:{
  width: '100%',height: '100%',borderBottomLeftRadius:15,borderBottomRightRadius:15
},
imageCon:{
  width: '100%'
  ,height: '50%'
}
})