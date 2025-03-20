
import { StyleSheet, Text, View,FlatList} from 'react-native';
import React,{useState} from 'react';
import Header from './components/Header';
export default function App() {
 const[toDos,setToDos]=useState([
  {text:"Buy a Coffee",key:"1"},
  {text:"Create an App",key:"2"},
  {text:"Play on the switch",key:"3"}

 ]);
 
  return (
    <View style={styles.container}>
      <Header/>
    <View style={styles.content}> 
      {/*TO FORM*/}
    <View style={styles.list}>
    <FlatList
    data={toDos}
    renderItem={({item})=>
    (
      <Text>{item.text}</Text>
    )
    }
    
    />


    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:
  {
    padding:40,
  },
  list:
  {
    marginTop:20,
  }
 
 
});
 