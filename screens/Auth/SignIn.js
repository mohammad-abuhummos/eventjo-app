import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SingInPost = async (userinfo) => {
  try {
    const resp = await axios.post(
      `https://immense-dusk-78248.herokuapp.com/api/auth/login`,
      userinfo
    );
    setUserToken(resp.data["access_token"]);
    console.log(resp);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

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
    console.log("removed");
  };

  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#6AF1C5", "#3D7BF7"]}
          start={{ x: 0.9, y: 0.0 }}
          style={styles.gradient}
        >
          <Text style={styles.nameProject}>EVEN<Text style={styles.extensionNameProject}>TS</Text>JO</Text>
          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 20,
              width: "100%",
              marginTop:100
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
              paddingVertical: 10,
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
            <AppButton
              Style={{ backgroundColor: "#fff" }}
              titleStyle={{ color: "#719CCE" }}
              title="logout"
              onPress={handleClickOut}
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
              onPress={() => navigation.navigate('SignUp')} 
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
  nameProject: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',

    // 
  },
  extensionNameProject: {
    color: '#5684A6'
  }
});
