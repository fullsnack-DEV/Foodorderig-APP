import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Recipes from "../data/Recipedata";

//TODO:
//TO implement a Add to cart functionality in this screen
//To manage the screen flow

export default function CartScreen({}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.navcontainer}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <Image source={require("../assets/chevronleft.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.carticon}>
          <Text style={styles.carttext}>Cart</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.infotext}>Swipe left to delete</Text>
      </View>
      <View style={styles.foodcard}>
        <View style={styles.imgcontainer}>
          <Text> Food Image</Text>
        </View>
        <View style={styles.infocontainer}>
          <Text>Food Info</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navcontainer: {
    flexDirection: "row",
    top: 59,
  },
  arrow: {
    left: 30,
  },
  carticon: {
    left: 150,
  },
  carttext: {
    fontSize: 21,
    fontFamily: "itim",
  },
  info: {
    top: 143,
    left: 130,
  },
  infotext: {
    fontFamily: "itim",
    fontSize: 16,
  },
  foodcard: {
    top: 175,
    left: 46,
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 102,
    width: 315,
    borderRadius: 25,
  },

  imgcontainer: {
    top: 16,
    left: 17,
  },
  infocontainer: {
    top: 27,
    left: 102,
    alignItems: "center",
  },
});
