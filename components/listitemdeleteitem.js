import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

//importing color pallete
import Colors from "../config/colors";

export default function listitemdeleteitem({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.deleteicon}
          source={require("../assets/trash.png")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 50,
    backgroundColor: Colors.main_color,
    alignItems: "center",
    marginTop: 45,
    right: 25,
  },
  deleteicon: {
    height: "60%",
    width: "55%",
    marginVertical: 8,
  },
});
