import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Searchitemcom({ style }) {
  return (
    <View style={[styles.itemcontainer, style]}>
      <View style={styles.imgcontainer}>
        <Image style={styles.img} source={require("../assets/recipe2.png")} />
      </View>
      <View style={styles.namecontainer}>
        <Text style={styles.txtname} numberOfLines={1}>
          Veggie Tomato Mix
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemcontainer: {
    backgroundColor: "#fff",
    height: 200,
    width: 156,
    borderRadius: 45,
    alignItems: "center",
    left: 25,
    top: 12,
    marginVertical: 25,
  },
  imgcontainer: {
    alignItems: "center",
    top: -35,

    height: 110,
  },
  img: {
    height: 150,
    width: 150,
  },
  namecontainer: {
    width: "90%",
    marginVertical: 15,
  },
  txtname: {
    fontFamily: "itim",
    fontSize: 22,
  },
});
