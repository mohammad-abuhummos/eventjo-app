import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import GradientHeader from "../components/GradientHeader";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MapView, { Marker } from "react-native-maps";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-datepicker";
import { AuthContext } from "../App";
import { displayError } from "../models/helpers";
import EventInfoModel from "../models/eventInfoModel";
import Axios from "axios";


export default function CreateEvent({navigation}) {
  const [event_title, setEvent_title] = useState(null);
  const [event_desc, setEvent_desc] = useState(null);
  const [event_location, setEvent_location] = useState({
    latitude: 31.963158,
    longitude: 35.930359,
  });
  const [event_location_desc, setEvent_location_desc] = useState(null);
  const [event_date, setEvent_date] = useState();
  const [event_ticket, setEvent_ticket] = useState(null);
  const [event_ticket_vol, setEvent_ticket_vol] = useState(null);
  const [image, setImage] = React.useState(null);
  const { currentUserToken } = React.useContext(AuthContext);
  console.log(currentUserToken)
  const onMapPress = (e) => {
    setEvent_location(e.nativeEvent.coordinate);
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
  const currentDate = () => {
    return new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      exif: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result);
    }
  };

  const CreateEvent = async () => {
    let event_info = new EventInfoModel(
      event_title,
      event_desc,
      event_location_desc,
      event_date,
      event_ticket,
      event_ticket_vol,
    );
    if (event_info.isValid()) {
      const formData = new FormData();
      if (!!image && image.uri) {
        let uriParts = image.uri.split(".");
        let fileType = uriParts[uriParts.length - 1];
        formData.append("event_img", {
          uri: image.uri,
          name: `image.${fileType}`,
          type: `image/${fileType}`,
        });
      }
      formData.append("event_title", event_title);
      formData.append("event_desc", event_desc);
      formData.append("event_location", event_location_desc);
      formData.append("event_date", event_date);
      formData.append("event_ticket_vol", event_ticket_vol);
      formData.append("event_location_longitude", event_location.longitude);
      formData.append("event_location_latitude", event_location.latitude);
      formData.append("event_ticket_watch", event_ticket);
      let Token = "Bearer" + " " +  currentUserToken;
      let axiosConfig = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
           "Authorization":Token,
        },
      };
      Axios.post(
        `https://immense-dusk-78248.herokuapp.com/api/event/store`,
        formData,
        axiosConfig
      )
        .then((res) => {
          navigation.navigate("Home");
          console.log(res.data);
        })
        .catch((e) => {
          console.log("errr", e);
        });
    } else {
      displayError("Invalid Information", User_info.errors().join(", "));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <GradientHeader height={250}>
            <View style={styles.header}>
              <View style={styles.arrowBack}>
                <Ionicons
                  name="ios-arrow-back"
                  size={25}
                  style={styles.backIcon}
                />
              </View>
              <View style={styles.createEvent}>
                <Text style={styles.createEventText}>Create Event </Text>
              </View>
            </View>
          </GradientHeader>
          <View style={styles.containerInputBox}>
            <View>
              <TouchableOpacity onPress={pickImage}>
                <View
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#F5F5F5",
                    height: 90,
                    width: "90%",
                    alignSelf: "center",
                    padding: 10,
                    marginTop: 15,
                    justifyContent: "center",
                  }}
                >
                  {!!image ? (
                    <Image
                      style={{
                        resizeMode: "cover",
                        backgroundColor: "#000",
                        alignSelf: "center",
                        width: "100%",
                        height: "100%",
                      }}
                      source={{ uri: image.uri }}
                    />
                  ) : (
                    <AntDesign
                      name="camera"
                      size={35}
                      color="#BABABA"
                      style={{
                        alignSelf: "center",
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <AppInput
                onChangeText={(text) => setEvent_title(text)}
                placeholder="Title"
                style={{
                  borderRadius: 10,
                  backgroundColor: "#F5F5F5",
                  height: 40,
                  width: "90%",
                  alignSelf: "center",
                  padding: 10,
                  marginTop: 15,
                }}
              />
              <AppInput
                onChangeText={(text) => setEvent_desc(text)}
                multiline={true}
                editable={true}
                placeholder="About Event "
                style={{
                  borderRadius: 10,
                  backgroundColor: "#F5F5F5",
                  height: 200,
                  width: "90%",
                  alignSelf: "center",
                  padding: 10,
                  marginTop: 15,
                  textAlignVertical: "top",
                }}
              />

              <AppInput
                onChangeText={(text) => setEvent_location_desc(text)}
                placeholder="Add Location"
                style={{
                  borderRadius: 10,
                  backgroundColor: "#F5F5F5",
                  height: 40,
                  width: "90%",
                  alignSelf: "center",
                  padding: 10,
                  marginTop: 15,
                }}
              />
              <View
                style={{
                  width: "90%",
                  height: 300,
                  marginTop: 15,
                  alignSelf: "center",
                  borderRadius: 10,
                  borderColor: "#F5F5F5",
                }}
              >
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: 31.963158,
                    longitude: 35.930359,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                  }}
                  onPress={onMapPress}
                >
                  <Marker coordinate={event_location} draggable={true} />
                </MapView>
              </View>
              <View>
                <DatePicker
                  style={{ width: "100%" }}
                  date={event_date}
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
                      padding: 10,
                      paddingLeft: 10,
                      borderRadius: 10,
                      borderWidth: 0,
                      alignItems: "flex-start",
                      marginHorizontal: 15,
                      marginTop: 15,
                    },
                    placeholderText: {
                      color: "#a7a7a7",
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    setEvent_date(date);
                  }}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  paddingLeft: 15,
                  paddingVertical: 10,
                }}
              >
                <AppInput
                  onChangeText={(text) => setEvent_ticket(text)}
                  placeholder="Avalibale Sets"
                  keyboardType="number-pad"
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#F5F5F5",
                    height: 40,
                    width: "90%",
                    padding: 10,
                    marginTop: 15,
                    marginBottom: 15,
                  }}
                />
                <AppInput
                  onChangeText={(text) => setEvent_ticket_vol(text)}
                  placeholder="Volnters"
                  keyboardType="number-pad"
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#F5F5F5",
                    height: 40,
                    width: "100%",
                    padding: 10,
                    marginTop: 15,
                    marginBottom: 15,
                  }}
                />
              </View>

              <AppButton
                onPress={() => CreateEvent()}
                title="Request Event"
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ["#3D7BF7", "#6AF1C5"],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 },
                }}
                buttonStyle={{
                  width: "90%",
                  borderRadius: 50,
                  height: 40,
                  alignSelf: "center",
                  paddingVertical: 15,
                }}
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
    width: "100%",
    backgroundColor: "white",
    paddingVertical:15,
  },
  map: {
    height: 300,
    width: "100%",
  },
  containerInputBox: {
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: -150,
    zIndex: 100,
    borderWidth: 1,
    paddingVertical:15,

    borderColor: "#F5F5F5",
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
  backIcon: {
    marginLeft: 11,
    marginTop: 5,
    marginBottom: 5,
    color: "white",
  },
  createEvent: {
    marginRight: 20,
    top: 5,
  },
  createEventText: {
    color: "white",
    fontSize: 20,
    fontWeight:"bold"
  },
});
