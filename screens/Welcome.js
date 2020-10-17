import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../components/AppInput";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#6AF1C5", "#3D7BF7"]}
        start={{ x: 0.9, y: 0.0 }}
        style={styles.gradient}
      >
        <Text>Event jo app</Text>
        <View style={{ paddingHorizontal: 40, width: "100%" }}>
          <AppInput placeholder="Welcome" />
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  gradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
