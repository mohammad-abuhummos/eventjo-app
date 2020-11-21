import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import RadioForm from "react-native-simple-radio-button";
import MapView, { Marker } from "react-native-maps";
export default function EventDetalis({ route, navigation }) {
  var radio_props = [{ value: 0 }, { value: 1 }];
  const { index } = route.params;
  const [state, setState] = useState({
    latitude: 31.963158,
    longitude: 35.930359,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.arrowBack}>
            <Ionicons
              name="ios-arrow-back"
              size={25}
              style={styles.backIcon}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.camera}>
            <AntDesign
              name="camera"
              size={27}
              color="#BABABA"
              style={{ marginLeft: 230, marginTop: 4 }}
            />
          </View>
          <View style={styles.heart}>
            <AntDesign
              name="heart"
              size={25}
              color="#BABABA"
              style={styles.heartIcon}
            />
          </View>
        </View>
        <View style={styles.imgBox}>
          <Image
            uri={index.event_img}
            style={styles.imgEvent}
          />
        </View>
        <View style={styles.volunteerBox}>
          <View style={{flexDirection:"column",with:'70%'}}>
            <View style={{ flexDirection: "row", paddingLeft: 10 }}>
              <Text style={styles.numberSet}>{index.event_ticket}<Text style={styles.textSet}> sets left</Text></Text></View>
            <View style={{ flexDirection: "row", paddingLeft: 10 }}>
              <Text style={styles.numberSet}>{index.event_ticket}<Text style={styles.textSet}> sets left</Text></Text>
            </View>
          </View>
          <View style={{ marginLeft: 20,flexDirection:"column",with:'30%' }}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={false}
              buttonColor={"#2196f3"}
              animation={true}
              onPress={(value) => {
                value: value;
              }}
              style={styles.radioButton}
              buttonSize={8}
            />
          </View>
        </View>
        <View style={styles.descriptionBox}>
          <View style={styles.titleBox}>
            <Text
              style={(styles.txtTitle, { fontWeight: "bold", fontSize: 30 })}
            >
              {index.event_title}
            </Text>
          </View>
          <View style={styles.DateBox}>
            <AntDesign
              name="calendar"
              size={30}
              color="black"
              color="#8d8d8d"
            />
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                marginLeft: 10,
                fontSize: 20,
                color: "#8d8d8d",
              }}
            >
              {index.event_date}
            </Text>

          </View>
          <View style={styles.locationBox}>
            <Entypo
              name="location-pin"
              size={30}
              color="black"
              color="#8d8d8d"
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 10,
                fontWeight: "bold",
                fontSize: 20,
                color: "#8d8d8d",
              }}
            >
              {index.event_location_desc}
            </Text>

          </View>
          <View style={styles.aboutBox}>
            <AntDesign
              name="infocirlce"
              size={30}
              color="black"
              color="#8d8d8d"
            />
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 10,
                color: "#8d8d8d",
              }}
            >
              About Event
            </Text>

          </View>
          <View style={styles.aboutText}>
            <Text
              style={
                (styles.text,
                {
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 20,
                  color: "#8d8d8d",
                })
              }
            >
              {index.event_desc}
            </Text>
          </View>
        </View>
        <View style={styles.locationGoogle}>
          <View style={styles.imgBox}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 31.963158,
                longitude: 35.930359,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
              }}
            >
            </MapView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  numberSet: {
    fontSize: 40, fontWeight: 'bold'
  },
  textSet: {
    fontSize: 20, color: "#898989",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
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
  heart: {
    marginRight: 20,
    top: 5,
  },
  imgBox: {
    width: "90%",
    alignSelf: "center",
    marginTop: 70,
  },
  imgEvent: {
    width: "100%",
    height: 208,
    borderRadius: 10,
  },
  volunteerBox: {
    width: "90%",
    height: 130,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },


  map: {
    height: 200,
    width: "100%",
  },

  descriptionBox: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 20,

  },
  locationBox: {
    marginRight: -5,
    marginTop: 20,
    flexDirection: "row",
  },
  DateBox: {
    marginTop: 20,
    flexDirection: "row",
  },
  aboutBox: {
    marginTop: 20,
    flexDirection: "row",
  },
  scrollView: {},
  locationGoogle: {
    paddingBottom: 30,
  },
  radioButton: {
    marginTop: 4,
  },
  boxRadioButton: {

  },
});
