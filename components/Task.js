import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task =(props)=>{
    return(
        <View style={styles.taskcontainer}>
            <View style={styles.round}></View>
            <Text>{props.task}</Text>
            <View style={styles.circle}></View>
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
        width: 300,
        height: 50,
        borderRadius: 7,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,

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
       borderWidth: 2,
       borderColor: 'skyblue',
       width: 20,
       height:20,
       borderRadius: 10,
       marginHorizontal:10, 
    }


})
    


export default Task;