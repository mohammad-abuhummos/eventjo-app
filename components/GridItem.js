import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function GridItem(props) {
  const { title, date, img } = props;
  return (
    <View style={{ width: 150, height: 150 }}>
      <ImageBackground source={img} style={styles.container}>
        <Text style={styles.Title}>{title}</Text>
        <Text style={styles.Data}>{date}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: 150,
    height: 150,
    padding: 20,
    justifyContent: "flex-end",
  },
  Title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  Data: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#fff",
  },
});
