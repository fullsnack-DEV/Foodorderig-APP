import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import colors from "../config/colors";
import Button from "../components/buttonCart";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Recipes from "../data/Recipedata";
import store from "../Redux/Store";
import CartList from "../components/CartList";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function CartScreen({}) {
  const foods = useSelector((state) => state.cart);
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
      <FlatList
        style={styles.foodlistcontainer}
        data={foods}
        verticle
        showsVerticalScrollIndicator={false}
        keyExtractor={(foods) => foods.title}
        bottomDivider
        renderItem={(data) => (
          <CartList
            style={styles.cartlist}
            title={data.item.title}
            img={data.item.img}
          />
        )}
      />
      <View style={styles.btncontainer}>
        <Button
          style={styles.btn}
          title="Complete Order"
          txtstyle={{ color: "white" }}
        />
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
  foodlistcontainer: {
    top: 150,

    alignSelf: "center",

    width: "90%",
  },
  btncontainer: {
    alignItems: "center",
    marginTop: HEIGHT * 0.04,
    marginBottom: 8,
  },
  btn: {
    backgroundColor: colors.main_color,
    width: "50%",
  },
});
