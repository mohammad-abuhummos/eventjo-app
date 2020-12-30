import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function GridItem(props) {
  const navigation = useNavigation();
  const { title, date, img, index } = props;
  return (
    <TouchableOpacity
      style={styles.containerCard}
      onPress={() => navigation.navigate("EventDetalis", { index })}
    >
      <View style={{ width: 150, height: 150, borderRadius: 15 }}>
        <ImageBackground source={img} style={styles.container}>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.Data}>{date}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 150,
    height: 150,
    padding: 20,
    justifyContent: "flex-end",
  },
  Title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "#FFF",
  },
  Data: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#000",
  },
});
