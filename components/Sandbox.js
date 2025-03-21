import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text>Sandbox</Text>
    </View>
  )
}


const styles=StyleSheet.create({

    container:
    {
        flex:1,
        paddingTop:100,
        backgroundColor:"#333",
    }


})