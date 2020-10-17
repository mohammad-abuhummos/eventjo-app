import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function Welcome() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#6AF1C5", "#3D7BF7"]}
        start={{ x: 0.9, y: 0.0 }}
        style={styles.gradient}
      >
          
        <Text>Event jo app</Text>
        <View
          style={{ paddingHorizontal: 40, paddingVertical: 20, width: "100%" }}
        >
          <AppInput placeholder="USERNAME" />
        </View>
        <View
          style={{ paddingHorizontal: 40, paddingVertical: 20, width: "100%" }}
        >
          <AppInput placeholder="USERNAME" />
        </View>
        <View
          style={{ paddingHorizontal: 40, paddingVertical: 20, width: "100%" }}
        >
          <AppButton
            Style={{ backgroundColor: "#fff" }}
            titleStyle={{ color: "#719CCE" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "#fff" }}>
            Don’t have an account ?
          </Text>
          <Button
            titleStyle={{ color: "#fff" }}
            buttonStyle={{ paddingLeft: 5 }}
            title="Sign Up"
            type="clear"
          />
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
    justifyContent: "flex-end",
    paddingBottom: 150,
  },
});
