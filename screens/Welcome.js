import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const singin = async (userinfo) => {
  try {
    const resp = await axios.post(
      `https://immense-dusk-78248.herokuapp.com/api/auth/login`,
      userinfo
    );
    setUserToken(resp.data["access_token"]);
    console.log();
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const getUserToken = async () => {
  try {
    const hi = await AsyncStorage.getItem("UserToken");
    console.log(hi);
  } catch (e) {
    console.log(e);
  }
};
getUserToken();
export const setUserToken = async (token) => {
  try {
    await AsyncStorage.setItem("UserToken", token);
  } catch (e) {
    console.log(e);
  }
};

export default function Welcome({ navigation }) {
  const [email, setEmaile] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClick = () => {
    if (!!email && !!password) {
      singin({
        email: email,
        password: password,
      }).then(navigation.navigate("Home"));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#6AF1C5", "#3D7BF7"]}
          start={{ x: 0.9, y: 0.0 }}
          style={styles.gradient}
        >
          <Text>Event jo app</Text>

          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 20,
              width: "100%",
            }}
          >
            <AppInput
              placeholder="USERNAME"
              onChangeText={(text) => setEmaile(text)}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 20,
              width: "100%",
            }}
          >
            <AppInput
              placeholder="PASSWORD"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 20,
              width: "100%",
            }}
          >
            <AppButton
              Style={{ backgroundColor: "#fff" }}
              titleStyle={{ color: "#719CCE" }}
              title="login"
              onPress={handleClick}
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
    </SafeAreaView>
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
    backgroundColor: "#ffff",
  },
});
