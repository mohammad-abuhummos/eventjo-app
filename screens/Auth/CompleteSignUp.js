import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../../components/AppInput";
import { Button } from "react-native-elements";
import GradientHeader from "../../components/GradientHeader";
import { Ionicons } from "@expo/vector-icons";
import { setUserToken } from "./SignIn";
import Axios from "axios";
import DatePicker from "react-native-datepicker";
import RadioButtonRN from "radio-buttons-react-native";
import { displayError } from "../../models/helpers";
import CompleteSignUpModel from "../../models/CompleteSignUpModel";
import { AuthContext } from "../../App";

export default function CompleteSignUp({ route, navigation }) {
  const { setCurrentUserToken } = React.useContext(AuthContext);
  const { image, name, email, password } = route.params;
  const currentDate = () => {
    return new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  };
  const [phone, setPhone] = React.useState();
  const [address, setAddress] = React.useState();
  const [gender, setGender] = React.useState();
  const [dateOfBrith, setDateOfBrith] = React.useState();

  const SingUpPost = async () => {
    let User_info = new CompleteSignUpModel(
      phone,
      address,
      dateOfBrith,
      gender
    );
    console.log("image", !!image);
    if (User_info.isValid()) {
      const formData = new FormData();
      if (!!image && image.uri) {
        let uriParts = image.uri.split(".");
        let fileType = uriParts[uriParts.length - 1];
        formData.append("user_img", {
          uri: image.uri,
          name: `image.${fileType}`,
          type: `image/${fileType}`,
        });
      }
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone_number", phone);
      formData.append("address", address);
      formData.append("gender", gender);
      formData.append("date_of_birth", dateOfBrith);
      let axiosConfig = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      };
      Axios.post(
        `https://immense-dusk-78248.herokuapp.com/api/auth/register`,
        formData,
        axiosConfig
      )
        .then((res) => {
          setUserToken(res.data["access_token"]);
          setCurrentUserToken(res.data["access_token"])
          console.log("res.data",res.data)
        })
        .catch((e) => {
          console.log("errr", e);
        });
    } else {
      displayError("Invalid Information", User_info.errors().join(", "));
    }
  };

  const handelClick = () => {
    SingUpPost();
  };
  const data = [
    {
      label: "Female",
    },
    {
      label: "Male",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.gradientContainer}>
            <GradientHeader height={261}>
              <View style={styles.header}>
                <View style={styles.arrowBack}>
                  <Ionicons
                    name="ios-arrow-back"
                    size={25}
                    style={styles.backIcon}
                  />
                </View>
                <View style={styles.headerText}>
                  <Text style={styles.signupText}>SIGN UP </Text>
                </View>
              </View>
            </GradientHeader>
          </View>
          <View style={{ paddingHorizontal: 30, marginTop: -100 }}>
            <View
              style={{
                flex: 0.7,
                width: "100%",
                padding: 20,
                backgroundColor: "#fff",
                borderRadius: 10,
              }}
            >
              <View style={styles.selectImage}>
                <View>
                  <Image
                    source={
                      !!image
                        ? { uri: image.uri }
                        : require("../../assets/card-img-1.png")
                    }
                    style={{ width: 142, height: 142, borderRadius: 100 }}
                  />
                </View>
              </View>
              <View style={styles.InputWidth}>
                <AppInput
                  onChangeText={(text) => setPhone(text)}
                  placeholder="Phone Number"
                />
              </View>
              <View style={styles.InputWidth}>
                <AppInput
                  onChangeText={(text) => setAddress(text)}
                  placeholder="ADDRESS"
                />
              </View>
              <View style={styles.InputWidth}>
                <DatePicker
                  style={{ width: "100%" }}
                  date={dateOfBrith}
                  mode="date"
                  placeholder="Select date"
                  format="YYYY-MM-DD"
                  minDate="1990-01-01"
                  maxDate={currentDate()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      backgroundColor: "#F5F5F5",
                      width: "100%",
                      padding: 28,
                      paddingLeft: 30,
                      borderRadius: 50,
                      borderWidth: 0,
                      alignItems: "flex-start",
                    },
                    placeholderText: {
                      color: "#a7a7a7",
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    setDateOfBrith(date);
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, paddingTop: 35 }}>
                <Text style={{ fontSize: 18 }}>Gender</Text>
                <RadioButtonRN
                  data={data}
                  box={false}
                  initial={1}
                  circleSize={10}
                  selectedBtn={(e) => setGender(e.label)}
                />
              </View>
              <View style={styles.InputWidth}>
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
                  onPress={() => SingUpPost()}
                />
              </View>
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
    backgroundColor: "#EFEFEF",
    width: "100%",
  },
  gradientContainer: {
    flex: 0.35,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    top: 30,
    width: "100%",
    justifyContent: "space-between",
    zIndex: 1,
  },
  arrowBack: {
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    borderRadius: 50,
    width: 35,
    marginLeft: 20,
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
    color: "white",
  },
  selectImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-35%",
  },
  headerText: {
    marginRight: 20,
    top: 1,
  },
  signupText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  InputWidth: {
    paddingTop: 35,
    width: "100%",
  },
});
