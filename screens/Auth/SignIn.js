import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../App";
import i18n from 'i18n-js';

export const setUserToken = async (token) => {
  try {
    await AsyncStorage.setItem("UserToken", token);
  } catch (e) {
    console.log(e);
  }
};
export const removeUserToken = async (token) => {
  try {
    await AsyncStorage.removeItem("UserToken");
  } catch (e) {
    console.log(e);
  }
};

export default function SignIn({ navigation }) {
  const [email, setEmaile] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {
    setCurrentUserToken,
    setCurrentUser,
    setisLoading,
  } = React.useContext(AuthContext);
  const SingInPost = async (userinfo) => {
    setisLoading(true);
    try {
      const resp = await axios.post(
        `https://immense-dusk-78248.herokuapp.com/api/auth/login`,
        userinfo
      );
      setUserToken(resp.data["access_token"]);
      setCurrentUserToken(resp.data["access_token"]);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const handleClick = () => {
    if (!!email && !!password) {
      console.log("click");
      SingInPost({
        email: email,
        password: password,
      }).then(navigation.navigate("Home"));
    }
  };
  const handleClickOut = () => {
    removeUserToken();
    setCurrentUserToken(null);
    setCurrentUser(null);
    navigation.navigate("Auth");
    console.log("Out");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%", backgroundColor: "#000" }}>
        <LinearGradient
          colors={["#6AF1C5", "#3D7BF7"]}
          start={{ x: 0.9, y: 0.0 }}
          style={styles.gradient}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={styles.nameProject}>
            EVENT<Text style={styles.extensionNameProject}>TS</Text>JO
            </Text>
            <Text>
            {i18n.t('welcome')}
            </Text>
            <View
              style={{
                paddingHorizontal: 40,
                paddingVertical: 20,
                width: "100%",
                marginTop: 100,
              }}
            >
              <AppInput
                placeholder= {i18n.t('welcome')}
                onChangeText={(text) => setEmaile(text)}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 40,
                paddingVertical: 10,
                width: "100%",
              }}
            >
              <AppInput
                secureTextEntry={true}
                placeholder="PASSWORD"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 40,
                paddingVertical: 10,
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
                onPress={() => navigation.navigate("SignUp")}
              />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  gradient: {
    paddingVertical: "40%",
    flex: 1,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  nameProject: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",

    //
  },
  extensionNameProject: {
    color: "#5684A6",
  },
});
