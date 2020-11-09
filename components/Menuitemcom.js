import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Recipedata from "../data/Recipedata";
import Recipeitem from "./Recipeitem";

export default function Menuitemcom() {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({});

//we gonna build a flatlist in the component using the fake data
