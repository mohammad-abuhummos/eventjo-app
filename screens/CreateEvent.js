import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import GradientHeader from "../components/GradientHeader";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MapView, { Marker } from "react-native-maps";

export default function CreateEvent(props) {
  const [state, setState] = React.useState({
    latitude: 31.963158,
    longitude: 35.930359,
  });
  const onMapPress = (e) => {
    setState(e.nativeEvent.coordinate);
  };
  console.log(state);

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
              <AppInput
                style={{
                  borderRadius: 10,
                  backgroundColor: "#F5F5F5",
                  height: 90,
                  width: "90%",
                  alignSelf: "center",
                  padding: 10,
                  marginTop: 15,
                }}
              />
              <View style={styles.camera}>
                <AntDesign
                  name="camera"
                  size={27}
                  color="#BABABA"
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    top: -60,
                  }}
                />
              </View>

              <AppInput
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
                  height: 200,
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
                  <Marker coordinate={state} draggable={true} />
                </MapView>
              </View>
              <AppInput
                placeholder="Pick Date"
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
                placeholder="Sets Avalibale"
                keyboardType="number-pad"
                style={{
                  borderRadius: 10,
                  backgroundColor: "#F5F5F5",
                  height: 40,
                  width: "90%",
                  alignSelf: "center",
                  padding: 10,
                  marginTop: 15,
                  marginBottom: 15,
                }}
              />

              <AppButton
                title="Add Event"
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ["#3D7BF7", "#6AF1C5"],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 },
                }}
                buttonStyle={{
                  width: "90%",
                  borderRadius: 50,
                  height: 66,
                  alignSelf: "center",
                  marginBottom: 15,
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
  },
  map: {
    height: 200,
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
  },
});
