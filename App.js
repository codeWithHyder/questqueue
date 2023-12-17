import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
      <Task task={"task1"} />
      <Task task={"task2"} />
      <Task task={"task3"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },

  title:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  }
});
