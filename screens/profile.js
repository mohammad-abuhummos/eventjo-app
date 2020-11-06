import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Avatar, Colors } from "react-native-elements";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import GradientHeader from "../components/GradientHeader";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <GradientHeader
       height={250}
      >
        <View>
          <View style={styles.header}>
            <Ionicons
              name="ios-arrow-back"
              size={25}
              color="black"
              style={styles.backIcon}
            />
          </View>

          <View style={styles.profileBox}>
            <View style={styles.profilePic}>
              <Avatar
                size={120}
                rounded
                source={{
                  uri:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                }}
                style={styles.avatarStyle}
              />
            </View>
            <View style={styles.editBox}>
              <Feather name="edit-2" size={24} color="white" />
            </View>
            <View style={styles.viewText}>
              <Text style={styles.name}>احمد علي</Text>
            </View>
            <View style={styles.titleProgressBar}>
              <View>
                <Text style={styles.levelText}>المستوى</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.percentLevel}>60%</Text>
              </View>
            </View>
            <View style={styles.progressBar}>
              <Progress.Bar progress={1} style={styles.bar} />
            </View>
            <View style={styles.describtion}>
              <View style={styles.describtionDetails}>
                <View style={styles.point}>
                  <Text style={styles.textPoint}> النقاط</Text>
                  <View>
                    <Text style={styles.numberText}>10</Text>
                  </View>
                </View>
                <View style={styles.wachEvent}>
                  <Text style={styles.textWachEvent}>
                    {" "}
                    حدث قمت بالمشاركة بها
                  </Text>
                  <View>
                    <Text style={styles.numberText}>10</Text>
                  </View>
                </View>
                <View style={styles.makeEvent}>
                  <Text style={styles.textMakeEvent}> حدث قمت بصنعه</Text>
                  <View>
                    <Text style={styles.numberText}>10</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </GradientHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EFEFEF",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    top: 30,
    width: 35,
    marginLeft: 20,
    borderRadius: 50,
  },
  backIcon: {
    marginLeft: 11,
    marginTop: 5,
    marginBottom: 5,
    color: "white",
  },
  profileBox: {
    width: "90%",
    backgroundColor: "white",
    height: 233,
    borderRadius: 10,
    marginLeft: "6%",
    top: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  profilePic: {
    alignItems: "center",
    width: 110,
    height: 110,
    alignSelf: "center",
    borderRadius: 70,
    marginTop: "-15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  editBox: {
    backgroundColor: "#3556A5",
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: "-20%",
    marginRight: 25,
  },
  avatarStyle: {
    width: 100,
    height: 100,
  },
  viewText: {
    alignSelf: "center",
    width: "50%",
    marginTop: 40,
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  titleProgressBar: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  levelText: {
    color: "#BEBEBE",
    left: 0,
  },
  percentLevel: {
    color: "#BEBEBE",
    textAlign: "right",
  },
  progressBar: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    paddingTop: 15,
  },
  bar: {
    width: "100%",
  },
  describtion: {
    flexDirection: "row",
    paddingTop: 10,
  },
  describtionDetails: {
    flexDirection: "row",
    paddingTop: 15,
    width: "100%",
  },
  makeEvent: {
    flexDirection: "column",
    width: "30%",
  },
  wachEvent: {
    flexDirection: "column",
    width: "33%",
  },
  point: {
    flexDirection: "column",
    width: "33%",
  },

  textPoint: {
    textAlign: "left",
    textAlign: "center",
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  textMakeEvent: {
    textAlign: "right",
  },
  textWachEvent: {},
});
