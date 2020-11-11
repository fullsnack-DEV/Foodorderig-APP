import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export default function Itemlist({ title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.txt}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    marginLeft: 50,
  },
  wrapper: {
    backgroundColor: "red",
    height: HEIGHT * 0.04,
    width: WIDTH * 0.2,
    borderRadius: 40,
  },
  txt: {
    color: "#fff",
    fontFamily: "itim",
    fontSize: 20,
    alignSelf: "center",
  },
});
