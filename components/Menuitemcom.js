import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

import Recipedata from "../data/Recipedata";
import Recipeitem from "./Recipeitem";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const FIXEDHEIGHT = HEIGHT * 0.4;

export default function Menuitemcom({ style }) {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={Recipedata}
        horizontal
        keyExtractor={(Recipedata) => Recipedata.price}
        showsHorizontalScrollIndicator={false}
        style={styles.flat}
        renderItem={({ item }) => (
          <Recipeitem title={item.name} img={item.img} price={item.price} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

//we gonna build a flatlist in the component using the fake data
