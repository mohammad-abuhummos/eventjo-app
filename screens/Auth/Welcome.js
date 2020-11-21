import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../../components/AppButton";
import { Button } from "react-native-elements";

export default function Welcome({ navigation }) {
  return (
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
            marginTop: 100
          }}
        >
          <AppButton
            Style={{ backgroundColor: "#fff", }}
            titleStyle={{ color: "#719CCE" }}
            title="login"
            onPress={() => navigation.navigate('SingIn')}
          />
          <AppButton
            Style={{ backgroundColor: "#fff", marginTop: 20 }}
            titleStyle={{ color: "#719CCE" }}
            title="SignUp"
            onPress={() => navigation.navigate('SignUp')}
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
            if do you want show 
            </Text>
          <Button
            titleStyle={{ color: "#fff" }}
            buttonStyle={{ paddingLeft: 5 }}
            title="Event"
            type="clear"
            onPress={() => navigation.navigate('event')}
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
    backgroundColor: "#ffff",
  },
  nameProject: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  extensionNameProject: {
    color: '#5684A6'
  }
});
