import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task =({task,opt2})=>{

    const handleDelete=(index)=>{
        // const filteredList =[...task];
       const filteredList=task.filter((item,i)=>{
            return(i != index);
       });
        opt2(filteredList)
        // console.log(temp)
    };

    const handlegrey =(e)=>{
       e.target.style.textDecoration="line-through";
       e.target.style.color= 'grey'
        // document.getElementById("tsk").style.color='grey';
        // document.getElementById("tsk").style.textDecoration='line-through';
    }
    return(
        <View>
            {task.map((item,index)=>{
                return(
                <View style={styles.taskcontainer} >
                    <View style={styles.round} ></View>
                    <Text id="tsk" onClick={handlegrey} style={{cursor: 'Pointer',}}>{item}</Text>
                    <View style={styles.circle}><Text onClick={()=>handleDelete(index)}>🚮</Text></View>
                </View>
               )
              })} 
        </View>  
    )
}

const styles =StyleSheet.create({
    taskcontainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 284,
        height: 50,
        borderRadius: 7,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        overflow: scrollY,
       

    },
    round:{
        
        width: 20,
        height: 20,
        backgroundColor: 'skyblue',
        borderRadius: 5,
        marginRight: 10,
        marginLeft:10,
    },
    circle:{
    //    borderWidth: 2,
    //    borderColor: 'skyblue',
    //    width: 40,
    //    height:30,
       borderRadius: 10,
       marginHorizontal:10, 
       textAlign:'center',
       paddingBottom:2,
       fontSize: 30,
       cursor: 'pointer',
       marginRight: 15,
    
    }


})
    


export default Task;