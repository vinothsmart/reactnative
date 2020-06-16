import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  // const [outputText, setOutputText]= useState('Open up App.js to start working on your app!');
  return (
    // <View style={styles.container}>
    //   <Text>{outputText}</Text>
    //   <Button title="Change Text" onPress={() => setOutputText('Text Changed')}/>
    // </View>
    <View>
      <View>
        <TextInput/>
        <Button title="Add"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
