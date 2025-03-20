import { View, Text,StyleSheet,TextInput,Button } from 'react-native'
import React,{useState} from 'react'

export default function AddToDo() {

    const[text,setText]=useState("");
    const changeHandler=(val)=>
    {
        setText(val);
    }
  return (
    <View>
      <TextInput style={styles.input}
      placeholder='new ToDo ...'
      onChangeText={(val)=>changeHandler(val)}  
      />
      <Button onPress={()=>console.log(text)} title="add To Do" color="coral"/>
    </View>
  )
}

const styles=StyleSheet.create({
    input:
    {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
    }



})