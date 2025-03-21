import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Sandbox() {
  return (
    <View style={styles.container}>
     <Text style={styles.boxOne}>1</Text>
     <Text style={styles.boxTwo}>2</Text>
     <Text style={styles.boxThree}>3</Text>
     <Text style={styles.boxFour}>4</Text>
    </View>
  )
}


const styles=StyleSheet.create({

    container:
    {
        flex:1,
        paddingTop:100,
        backgroundColor:"#ddd",
    },
    boxOne:
    {
        padding:10,
        backgroundColor:"violet",

    },
    boxTwo:
    {
        padding:10,
        backgroundColor:"gold",
    },
    boxThree:
    {
        padding:10,
        backgroundColor:"coral",
    },
    boxFour:
    {
        padding:10,
        backgroundColor:"skyblue",
    },
})