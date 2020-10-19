import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

export default function AppInput(props) {
  const { Style, title } = props;
  return (
    <View style={styles.container}>
      <Button title={title} buttonStyle={[styles.Button, Style]} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    width: "100%",
    padding: 15,
    borderRadius: 50,
  },
  container: {
    width: "100%",
  },
});
