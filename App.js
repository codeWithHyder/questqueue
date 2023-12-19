import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
import AddTask from './components/AddTask';
import { useState } from 'react';

export default function App() {
  const[tasks, setTasks] = useState('');
  const [taskItems, setTaskItems] = useState([])
  return (
    <View style={{marginHorizontal:'auto', margin: 5, height: 500, backgroundColor:'gray',}}>
      <View style={styles.container}>
        <Text style={styles.title}>Today's Tasks</Text>
        {/* {tasks.map((task)=>{ */}
         <Task task={taskItems} opt2={setTaskItems} />;
        {/* })} */}
      
      </View>
      <AddTask  task1={tasks}  opt1={setTasks} task2={taskItems} opt2={setTaskItems}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    width: 300,
    height:410,
    overflow: 'auto',
    borderRadius:5,
  },

  title:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 2,
  }
});
