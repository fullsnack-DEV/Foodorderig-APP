import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "./buttonCart";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function CartList({ title, img, renderRightActions }) {
  return (
    <View style={styles.container}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.foodcard}>
          <View style={styles.imgcontainer}>
            <Image style={styles.cartimg} source={img} />
          </View>
          <View style={styles.infocontainer}>
            <Text style={styles.infotext}>{title}</Text>
          </View>
        </View>
      </Swipeable>
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

    marginVertical: 8,
  },
  infotext: {
    fontFamily: "itim",
    fontSize: 18,
    alignItems: "center",
  },
  cartimg: {
    height: 60,
    width: 55,
  },
});
