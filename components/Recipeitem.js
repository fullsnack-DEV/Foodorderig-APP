import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from "react-native";

const HEIGHT = Dimensions.get("window").height;

const WIDTH = Dimensions.get("window").width;

const CONHEIGHT = HEIGHT * 0.35;
const CONWIDTH = WIDTH * 0.45;

const IMGHEIGHT = HEIGHT * 0.25;
const IMGWIDTH = WIDTH * 0.3;

export default function Recipeitem({ title, price, img, index, scrollX }) {
  const inputRange = [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  return (
    <View style={styles.container}>
      <Animated.Image style={styles.img} source={img} />

      <View style={styles.txtcontaoner}>
        <Text style={styles.txt} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: CONHEIGHT,
    width: CONWIDTH,
    backgroundColor: "#fff",
    borderRadius: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    zIndex: 1,
    marginTop: 30,
    marginLeft: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.11,
    shadowRadius: 1.0,
  },
  img: {
    height: IMGHEIGHT,
    width: IMGWIDTH,
    alignSelf: "center",
    borderRadius: 15,
    resizeMode: "contain",
  },
  txtcontaoner: {
    alignContent: "center",
    alignSelf: "center",
  },
  txt: {
    fontFamily: "itim",
    fontSize: 18,
    marginLeft: 18,
  },

  price: {
    fontFamily: "itim",
    fontSize: 15,
    alignSelf: "center",
    marginBottom: 10,
  },
});
