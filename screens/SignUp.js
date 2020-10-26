import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../components/AppInput";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

export default function SignUp() {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={["#6AF1C5", "#3D7BF7"]}
          start={{ x: 0.9, y: 0.0 }}
          style={styles.gradient}
        >
          <View style={styles.header}>
            <Image
              source={require("../assets/back-arrow-icon.png")}
              style={{ width: 42, height: 42 }}
            />
            <Text style={styles.headerText}>SIGN UP</Text>
          </View>
          <View style={styles.selectImage}>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={
                  !!image
                    ? { uri: image }
                    : require("../assets/add-image-icon.png")
                }
                style={{ width: 142, height: 142, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={{ flex: 0.7, width: "100%", paddingHorizontal: 40 }}>
        <View style={{ paddingTop: 35, width: "100%" }}>
          <AppInput placeholder="FULL NAME" />
        </View>
        <View style={{ paddingTop: 35, width: "100%" }}>
          <AppInput placeholder="EMAIL ADDRESS" />
        </View>
        <View style={{ paddingTop: 35, width: "100%" }}>
          <AppInput placeholder="PASSWORD" />
        </View>
        <View style={{ paddingTop: 35, width: "100%" }}>
          <AppInput placeholder="RE-TYPE PASSWORD" />
        </View>
        <View style={{ paddingTop: 35, width: "100%" }}>
          <Button
            titleStyle={{ color: "#fafafa" }}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ["#3D7BF7", "#6AF1C5"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            buttonStyle={{ padding: 13, borderRadius: 25 }}
            title="Sign Up"
            type="clear"
          />
        </View>
      </View>
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
    width: "100%",
    minHeight: 200,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 25,
  },
  gradientContainer: {
    flex: 0.35,
    width: "100%",
  },
  header: {
    paddingTop: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFF",
  },
  selectImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
