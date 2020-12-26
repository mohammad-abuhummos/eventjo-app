import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientHeader(props) {
  const { height } = props;
  return (
    <LinearGradient
      colors={["#6AF1C5", "#3D7BF7"]}
      start={{ x: 0.9, y: 0.0 }}
      style={{
        width: "100%",
        minHeight: height,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      {props.children}
    </LinearGradient>
  );
}
