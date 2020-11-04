import React from "react";
import { View, StyleSheet } from "react-native";

export default function ListSpacer(props) {
  const { horizantal } = props;
  return (
    <View
      style={!!horizantal ? styles.horizantalSpacer : styles.verticalSpacer}
    ></View>
  );
}

const styles = StyleSheet.create({
  horizantalSpacer: {
    width: 15,
    height: "100%",
  },
  verticalSpacer: {
    width: "100%",
    height: 15,
  },
});
