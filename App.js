import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  // const [outputText, setOutputText]= useState('Open up App.js to start working on your app!');

  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  return (
    // <View style={styles.container}>
    //   <Text>{outputText}</Text>
    //   <Button title="Change Text" onPress={() => setOutputText('Text Changed')}/>
    // </View>
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) => (
          <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
          </View>
        ))}
      </View>
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
