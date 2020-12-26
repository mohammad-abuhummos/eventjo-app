import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, Button } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import EventCard from "../components/EventCard";
import GradientHeader from "../components/GradientHeader";
import Axios from "axios";
import { toEventSet } from "../models/eventInfoModel";
import { AuthContext } from "../App";

export default function Home({ navigation }) {
  const [events, setEvents] = useState([]);
  console.log(events)
  const { currentUser } = React.useContext(AuthContext);
  console.log("currentUser", currentUser);
  React.useEffect(() => {
    GetEvent();
  }, []);
  const GetEvent = async () => {
    try {
      let response = await Axios.get(
        `https://immense-dusk-78248.herokuapp.com/api/event/events-approved`
      );
      const responseData = response.data;
      const resultData = responseData.data;
      setEvents(resultData);
    } catch (err) {
      console.error(err);
    }
  };
  const renderItem = (item) => {
    return item.map((index) => {
      return (
        <TouchableOpacity
          style={styles.containerCard}
          onPress={() => navigation.navigate("EventDetalis", { index })}
        >
          <EventCard
            img={{ uri: `${index.event_img}` }}
            location={index.event_location}
            date={index.event_date}
            sets={index.event_ticket_watch}
          />
        </TouchableOpacity>
      );
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <GradientHeader height={300}>
          <View style={styles.containerProfile}>
            <View style={styles.iconsHeader}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialCommunityIcons
                  name="menu-open"
                  size={50}
                  color="white"
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
              <View>
                <FontAwesome
                  name="bell"
                  size={24}
                  color="white"
                  style={styles.bellIcon}
                />
              </View>
            </View>
            <View style={styles.profileTitle}>
              <View style={styles.profilePic}>
                <Avatar
                  size={70}
                  rounded
                  source={{
                    uri: currentUser.user_img,
                  }}
                  style={styles.avatarStyle}
                />
              </View>

              <View style={styles.containerName}>
                <Text style={styles.profileName}>{currentUser.name}</Text>
                <Text style={styles.profileText}>{currentUser.email}</Text>
              </View>
            </View>
            <View style={styles.searchSection}>
              <TextInput
                style={[
                  styles.searchInput,
                  {
                    borderBottomLeftRadius: 15,
                    borderTopLeftRadius: 15,
                    borderRadius: 0,
                  },
                ]}
                placeholder="بحث"
                onChangeText={(value) => this.setState({ comment: value })}
              />

              <LinearGradient
                colors={["#6AF1C5", "#3D7BF7"]}
                start={{ x: 0.9, y: 0.0 }}
                style={{
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 38,
                }}
              >
                <MaterialIcons name="search" size={24} color="white" />
              </LinearGradient>
            </View>
          </View>
        </GradientHeader>
        <View style={styles.popappEventCard}>
          <View style={styles.containerText}>
            <View>
              <Text style={styles.textShowEvent}>ورشات العمل القادمة</Text>
            </View>
            <View>
              <Text style={styles.textShowEvent}>المشاهدات</Text>
            </View>
          </View>
          <ScrollView style={styles.scrollView}>
            {renderItem(events)}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  profilePic: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  containerProfile: {
    flexDirection: "column",
  },
  profileTitle: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 50,
  },
  containerName: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  profileName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  avatarStyle: {
    width: 70,
    height: 70,
  },
  profileSearch: {
    flexDirection: "row",
  },
  profileText: {
    fontSize: 15,
    color: "white",
  },

  iconsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  searchSection: {
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "10%",
    marginTop: 20,
  },
  searchInput: {
    paddingRight: 45,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "white",
    width: "100%",
  },
  searchIcon: {
    backgroundColor: "blue",
    borderRadius: 20,
  },
  bellIcon: {},
  menuIcon: { padding: 10 },
  popappEventCard: {
    marginTop: -70,
  },
  containerCard: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.95,
    elevation: 18,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  containerText: {
    alignSelf: "center",
    flexDirection: "row",
    alignContent: "space-between",
  },
  textShowEvent: {
    color: "#FFFFFF",
    fontSize: 20,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  scrollView: {
    height: "100%",
  },

  iconsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  searchSection: {
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "17%",
    marginTop: 20,
  },
  searchInput: {
    paddingRight: 45,
    height: 37,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
  },
  searchIcon: {
    position: "absolute",
    backgroundColor: "blue",
    borderRadius: 20,
    color: "white",
    marginTop: 6,
    right: 10,
  },
});
