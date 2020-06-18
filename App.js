import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  // const [outputText, setOutputText]= useState('Open up App.js to start working on your app!');
  return (
    // <View style={styles.container}>
    //   <Text>{outputText}</Text>
    //   <Button title="Change Text" onPress={() => setOutputText('Text Changed')}/>
    // </View>
    // <View style={{ padding: 50 }}>
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       alignContent: "center",
    //     }}
    //   >
    //     <TextInput
    //       placeholder="Course Goal"
    //       style={{
    //         width: "80%",
    //         borderColor: "black",
    //         borderWidth: 1,
    //         padding: 10,
    //       }}
    //     />
    //     <Button
    //       title="Add"
    //     />
    //   </View>
    // </View>
    <View style={{ padding: 50, flexDirection: 'row', width: '80%', height: 300 }}>
      <View
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
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
