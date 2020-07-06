import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableWithoutFeedback underlayColor="#ccc" onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
