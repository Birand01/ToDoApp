import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';

export default function App() {
  const[name,setName]=useState("Birand");
  const[person,setPerson]=useState({name:"Mario",age:40});
  const clickHandler=()=>
  {
    setName("Kilinc");
    setPerson({name:"HAWAGI",age:45});
  }

  return (
    <View style={styles.container}>
    <Text>My name is {name}</Text>
    <Text>His name is {person.name} and his age is {person.age}</Text>
     <View style={styles.buttonContainer}>
      <Button title="UpdateState" onPress={clickHandler}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:
  {
    marginTop:20
  }
});
 