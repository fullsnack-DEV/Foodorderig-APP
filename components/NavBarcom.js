import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function NavBarcom({ icon, onPress, title }) {
  return (
    <View style={styles.navcontainer}>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={onPress}>
          <Image source={icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.carticon}>
        <Text style={styles.txt}> {title} </Text>
      </View>
    </View>
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
  txt: {
    fontSize: 21,
    fontFamily: "itim",
  },
});
