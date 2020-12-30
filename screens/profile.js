import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Avatar} from "react-native-elements";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import GradientHeader from "../components/GradientHeader";
import { AuthContext } from "../App";
import HorizantalEventsList from "../components/HorizantalEventList";
import Axios from "axios";

export default function Profile({ navigation }) {
  const { currentUser } = React.useContext(AuthContext);
  const [loadingNewEvents, setLoadingNewEvents] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const [Myevents, setMyEvents] = React.useState([]);
  React.useEffect(() => {
    GetEvent();
    GetMyEvent();
  }, []);

  const GetEvent = async () => {
    try {
      let response = await Axios.get(
        `https://immense-dusk-78248.herokuapp.com/api/event/events-approved`
      );
      const responseData = response.data;
      const resultData = responseData.data;
      setEvents(resultData);
      setLoadingNewEvents(false);
    } catch (err) {
      console.error(err);
      setLoadingNewEvents(false);
    }
  };
  const GetMyEvent = async () => {
    try {
      let response = await Axios.get(
        `https://immense-dusk-78248.herokuapp.com/api/event/events-approved`
      );
      const responseData = response.data;
      const resultData = responseData.data;
      setMyEvents(resultData);
      setLoadingNewEvents(false);
    } catch (err) {
      console.error(err);
      setLoadingNewEvents(false);
    }
  };
 
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <GradientHeader height={250}>
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
                  uri: currentUser.user_img,
                }}
                style={styles.avatarStyle}
              />
            </View>
            <View style={{ position: "absolute", right: 5, top: -20 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditUserProfile");
                }}
              >
                <View style={styles.editBox}>
                  <Feather name="edit-2" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.viewText}>
              <Text style={styles.name}>{currentUser.name}</Text>
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
            <View
              style={{
                flexDirection: "row",
                padding: 20,
                justifyContent: "space-around",
              }}
            >
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.fontBold}>مجموع النقاط</Text>
                <Text style={styles.fontBold}>10</Text>
              </View>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.fontBold}>نشطاتي</Text>
                <Text style={styles.fontBold}>10</Text>
              </View>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.fontBold}>مشاركتي</Text>
                <Text style={styles.fontBold}>10</Text>
              </View>
            </View>
          </View>
        </View>
      </GradientHeader>
      <View style={{paddingTop:100}}>
      <HorizantalEventsList
        data={events}
        renderItem={events}
        title="مشاركتي"
        loading={loadingNewEvents}
        // onViewAll={events}
      />
      <HorizantalEventsList
        data={Myevents}
        renderItem={Myevents}
        title="نشطاتي"
        loading={loadingNewEvents}
        // onViewAll={events}
      />
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
    position: "absolute",
    right: "35%",
    top: "-25%",
  },
  editBox: {
    backgroundColor: "#3556A5",
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
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
    paddingTop: 30,
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
  makeEvent: {
    flexDirection: "column",
    width: "30%",
  },
  wachEvent: {
    flexDirection: "column",
    width: "33%",
  },
  fontBold: {
    fontWeight: "bold",
  },
});
