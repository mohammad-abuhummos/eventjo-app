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
import { setUserToken } from "./SignIn";
import Axios from "axios";

export default function SignUp() {
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const SingUpPost = async (userinfo) => {
    let axiosConfig = {
      headers:{
        'Accept': 'application/json',
        "content-type": "multipart/form-data",
      },
    };
    try {
      const resp = await Axios.post(
        `https://immense-dusk-78248.herokuapp.com/api/auth/image-test`, {headers:{
          'Accept': 'application/json',
          'content-type': 'multipart/form-data',
        },userinfo});
      console.log("resp.data", resp.data);
    } catch (err) {
      console.error(err);
    }
  };
  

  
  const handelClick = () => {
    SingUpPost(formData);
  };
  
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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      exif : true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.cancelled) {
      setImage(result);
    }
  };
  const formData = new FormData();
  if (!!image) {
    let uriParts = image.uri.split('.');
    let fileType = uriParts[uriParts.length - 1];
    console.log("fileType",fileType)
    formData.append("file", {
      uri: image.uri, 					// this is the path to your file. see Expo ImagePicker or React Native ImagePicker
      type: `image`,  // example: image/jpg
      name: `upload`    // example: upload.jpg
    });
  }

  console.log(JSON.stringify(formData));
  // formData.append("name",name);
  // formData.append("email", email);
  // formData.append("password", password);
 
  
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
          <AppInput
            onChangeText={(text) => setName(text)}
            placeholder="FULL NAME"
          />
        </View>
        <View style={{ paddingTop: 35, width: "100%" }}>
          <AppInput
            onChangeText={(text) => setEmail(text)}
            placeholder="EMAIL ADDRESS"
          />
        </View>
        <View style={{ paddingTop: 35, width: "100%" }}>
          <AppInput
            onChangeText={(text) => setPassword(text)}
            placeholder="PASSWORD"
          />
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
            onPress={handelClick}
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
