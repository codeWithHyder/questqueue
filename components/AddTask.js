import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, View } from "react-native";


const AddTask = ({task1, opt1,task2, opt2})=>{
    const handleClick=()=>{
        // console.log(task1)
        task1!='' && opt2([...task2,task1]);
        opt1('');
    }
    return(
        <View style={styles.addtask}>
            <TextInput style={styles.textinput} placeholder="write your task" value={task1} onChangeText={text=>{opt1(text)}}/>
            <button style={styles.btn} onClick={handleClick}>+</button>
        </View>
    )
}

const styles = StyleSheet.create({
    addtask:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '95%',
      height:80,
      position: 'absolute',
      bottom: 5,
      marginHorizontal: 10,
    //   backgroundColor: '#fff',
      padding: 15,
      
    },
    textinput:{
      color:'grey',
      width: 230,
      height:40,
      fontSize: 15,
      backgroundColor: 'white',
      paddingHorizontal:8,
      borderRadius: 5,
    },
    btn:{
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: '50%',
        border: 1,
        cursor: 'pointer',
        marginLeft: 5,
    },
   
})

export default AddTask;