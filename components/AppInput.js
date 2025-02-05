import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function AppInput(props) {
  const { placeholder, style,keyboardType ,value} = props;
  return (
    <View style={styles.container}>
      <TextInput value={value} placeholder={placeholder} style={[styles.input, style]} keyboardType={keyboardType} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    padding: 15,
    paddingLeft:30,
    borderRadius: 50,
  },
  container: {
    width: "100%",
  },
});
