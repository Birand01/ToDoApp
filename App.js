
import { StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import React,{useState} from 'react';


import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';



export default function App() {
 const[toDos,setToDos]=useState([
  {text:"Buy a Coffee",key:"1"},
  {text:"Create an App",key:"2"},
  {text:"Play on the switch",key:"3"}

 ]);

 const pressHandler=(key)=>
 {
  setToDos((prevToDos)=>{
    return prevToDos.filter(todo=>todo.key!=key)
  })
 }
 const submitHandler=(text)=>{
  if(text.length>3)
  {
    setToDos((prevToDos)=>{ 
      return [
        {text:text,key:Math.random().toString()},
        ...prevToDos
      ];
     
    })
  }
  else
  {
    Alert.alert("OOPS!!","ToDos must be over 3 chars long",[
      {text:"Understood",onPress:()=>console.log("alert closed")}
    ])
  }
  
 }
 
  return (
    <TouchableWithoutFeedback onPress={()=>
      Keyboard.dismiss()
    }>
    <View style={styles.container}>
      <Header/>
    <View style={styles.content}> 
      <AddToDo submitHandler={submitHandler}/>
    <View style={styles.list}>
    <FlatList
    data={toDos}
    renderItem={({item})=>
    (
      <ToDoItem item={item} pressHandler={pressHandler}/>
    )
    }
    
    />


    </View>
    </View>
    </View>
    </TouchableWithoutFeedback>
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
 