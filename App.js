import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // const [outputText, setOutputText]= useState('Open up App.js to start working on your app!');

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  return (
    // <View style={styles.container}>
    //   <Text>{outputText}</Text>
    //   <Button title="Change Text" onPress={() => setOutputText('Text Changed')}/>
    // </View>
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
    // <View
    //   style={{
    //     padding: 50,
    //     flexDirection: "row",
    //     width: "80%",
    //     height: 300,
    //     justifyContent: "space-around",
    //     alignItems: "stretch",
    //   }}
    // >
    //   <View
    //     style={{
    //       backgroundColor: "red",
    //       flex: 1,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>1</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "blue",
    //       flex: 2,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>2</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "green",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>3</Text>
    //   </View>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
