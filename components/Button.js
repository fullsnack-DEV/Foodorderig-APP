import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Colors from "../config/colors";
//
const WIDTH = Dimensions.get("window").width;

const HEIGHT = Dimensions.get("window").width;
export default function Button({ title, navigation, style, txtstyle }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Main")}
      style={[styles.btn, style]}
    >
      <Text style={[styles.txt, txtstyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 150,
    backgroundColor: Colors.white_color,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  txt: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.button_color,
    top: 5,
    fontFamily: "itim",
    zIndex: 1,
  },
});
