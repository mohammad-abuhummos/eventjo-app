import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity, SafeAreaView, ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../../components/AppInput";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import GradientHeader from "../../components/GradientHeader";
import { Ionicons } from '@expo/vector-icons';

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.gradientContainer}>
            <GradientHeader
              height={261}
            >
              <View style={styles.header}>
                <View style={styles.arrowBack}>
                  <Ionicons name="ios-arrow-back" size={25} style={styles.backIcon} />
                </View>
                <View style={styles.headerText}>
                  <Text style={styles.signupText}>SIGN UP  </Text>
                </View>
              </View>

              <View style={styles.selectImage}>
                <TouchableOpacity onPress={pickImage}>
                  <Image
                    source={
                      !!image
                        ? { uri: image }
                        : require("../../assets/add-image-icon.png")
                    }
                    style={{ width: 142, height: 142, borderRadius: 100 }}
                  />
                </TouchableOpacity>
              </View>
            </GradientHeader>
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
      </ScrollView>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    width: "100%",
  },
  gradientContainer: {
    flex: 0.35,
    width: "100%",
  },
  header: {
    flexDirection: 'row',
    top: 30,
    width: '100%',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  arrowBack: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    borderRadius: 50,
    width: 35,
    marginLeft: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFF",
  },
  backIcon: {
    marginLeft: 11,
    marginTop: 5,
    marginBottom: 5,
    color: 'white',

  },
  selectImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  headerText: {
    marginRight: 20,
    top: 1
  },
  signupText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
});
