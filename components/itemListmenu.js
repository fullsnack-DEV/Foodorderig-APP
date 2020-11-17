import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

//data
import data from "../data/data";
//component
import Itemlist from "./Itemlist";

export default function ItemListmenu() {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <FlatList
          data={data}
          style={styles.list}
          horizontal
          keyExtractor={(data) => data.key}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Itemlist name={item.name} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
    height: "15%",
  },

  items: {
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
    alignContent: "space-between",
  },
  list: {
    marginLeft: 60,
    width: "100%",
  },
});
