import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Recipeitem({ title, price, img }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />

      <View style={styles.txtcontaoner}>
        <Text style={styles.txt}> {title} </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "65%",
    width: "65%",
    backgroundColor: "#fff",
    borderRadius: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",

    overflow: "hidden",
    marginLeft: 50,
  },

  img: {
    height: "60%",
    width: "70%",
    borderRadius: 20,
    resizeMode: "contain",
  },
  txtcontaoner: {
    alignSelf: "center",
  },
  txt: {
    fontFamily: "itim",
    fontSize: 20,
  },

  price: {
    alignSelf: "center",
    fontFamily: "itim",
    fontSize: 18,
  },
});
