import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function AccountTabs({ title, style }) {
  return (
    <View style={styles.container}>
      <View style={[styles.title, style]}>
        <Text style={styles.txttitle}>{title}</Text>
      </View>
      <View style={[styles.arrow]}>
        <Image
          style={styles.img}
          source={require("../assets/chevronleft.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    width: 315,
    height: 60,
    borderRadius: 25,
    top: 90,
    left: 42,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  title: {
    right: 30,
    alignSelf: "center",
  },
  txttitle: {
    fontFamily: "itim",
    fontSize: 20,
  },
  img: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  arrow: {
    alignSelf: "center",
    left: 30,
  },
});
