import React from "react";
import { StyleSheet, TextInput } from "react-native";
export default function GoalInput({ goalInputHandler }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="input here"
      onChangeText={goalInputHandler}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
  },
});
