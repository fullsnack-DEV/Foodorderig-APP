import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletetocart } from "../Redux/Action";
import colors from "../config/colors";
import Button from "../components/buttonCart";
import Listitemdeleteitem from "../components/listitemdeleteitem";

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
import NavBarcom from "../components/NavBarcom";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function CartScreen({ navigation }) {
  const foods = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F8" }}>
      <NavBarcom
        title={"Cart"}
        icon={require("../assets/chevronleft.png")}
        onPress={() => navigation.navigate("home")}
      />

      <View style={styles.info}>
        <Text style={styles.infotext}>Swipe left to delete</Text>
      </View>
      <FlatList
        style={styles.foodlistcontainer}
        data={foods}
        showsVerticalScrollIndicator={false}
        keyExtractor={(foods) => foods.key.toString()}
        renderItem={(data) => (
          <CartList
            style={styles.cartlist}
            title={data.item.title}
            img={data.item.img}
            renderRightActions={() => (
              <Listitemdeleteitem
                onPress={() => dispatch(deletetocart(data.item.key))}
              />
            )}
          />
        )}
      />
      <View style={styles.btncontainer}>
        <Button
          style={styles.btn}
          title="Complete Order"
          txtstyle={{ color: "white" }}
          onPress={() => navigation.navigate("payment")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

    width: "100%",
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
