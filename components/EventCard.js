import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function EventCard(props) {
  const { img, location, date, sets } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: 116, height: 116 }}>
            <Image source={img} style={{ width: "100%", height: "100%" }} />
          </View>
        </View>
        <View
          style={{
            flex: 0.45,
            backgroundColor: "#fff",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Entypo name="location-pin" size={15} color="#DADADA" />
            <Text style={styles.TextGray}>{location}</Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 5 }}>
            <Entypo name="calendar" size={15} color="#DADADA" />
            <Text style={styles.TextGray}>{date}</Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 5 }}>
            <Text style={styles.TextBlue}>{sets} Sets are Available</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    minHeight: 140,
  },
  TextGray: {
    fontSize: 12,
    color: "#BDBDBD",
    paddingLeft: 5,
  },
  TextBlue: {
    fontSize: 12,
    fontWeight: "500",
    color: "#3556A5",
  },
});
