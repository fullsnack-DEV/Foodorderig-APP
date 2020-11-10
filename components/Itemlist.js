import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export default function Itemlist() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>Foods</Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.txt}>Drinks</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>Snacks</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>Sauces</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 30,
  },
  wrapper: {
    backgroundColor: "red",
    height: HEIGHT * 0.04,
    width: WIDTH * 0.2,
    borderRadius: 40,
  },
  txt: {
    color: "#fff",
    fontFamily: "itim",
    fontSize: 20,
    alignSelf: "center",
  },
});
