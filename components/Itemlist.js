import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Itemlist({ name }) {
  return (
    <View>
      <Text style={styles.txt}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    fontFamily: "itim",
    marginLeft: 20,
    marginRight: 15,
  },
});
