import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "./buttonCart";

export default function CartList({ title, img }) {
  return (
    <View style={styles.container}>
      <View style={styles.foodcard}>
        <View style={styles.imgcontainer}>
          <Image style={styles.cartimg} source={img} />
        </View>
        <View style={styles.infocontainer}>
          <Text style={styles.infotext}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  foodcard: {
    top: 20,
    alignSelf: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 102,
    width: 315,
    borderRadius: 25,
    marginBottom: 25,
  },

  imgcontainer: {
    top: 16,
    left: 17,
  },
  infocontainer: {
    top: 27,
    left: 50,
    alignItems: "center",
  },
  infotext: {
    fontFamily: "itim",
    fontSize: 18,
  },
  cartimg: {
    height: 60,
    width: 55,
  },
});
