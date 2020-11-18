import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import Colors from "../config/colors";

const HEIGHT = Dimensions.get("window").height;

const WIDTH = Dimensions.get("window").width;

const CONHEIGHT = HEIGHT * 0.38;
const CONWIDTH = WIDTH * 0.45;

const IMGHEIGHT = HEIGHT * 0.25;
const IMGWIDTH = WIDTH * 0.5;

export default function Recipeitem({
  title,
  price,
  img,
  index,
  scrollX,
  navigation,
  id,
  DeliveryDescription,
  Returninfo,
}) {
  const inputRange = [
    (index - 1) * IMGHEIGHT,
    index * IMGHEIGHT,
    (index + 1) * IMGHEIGHT,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, -33, 0],
  });
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Item", {
          title, //passing the extra data between the screens
          img,
          price,
          DeliveryDescription,
          Returninfo,
          navigation,
        })
      }
    >
      <View style={styles.container}>
        <Animated.View
          style={
            (styles.imgcontainer,
            {
              transform: [{ translateY: scale }],
            })
          }
        >
          <Image style={styles.img} source={img} />
        </Animated.View>

        <View style={styles.txtcontaoner}>
          <Text style={styles.txt} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    marginTop: 60,
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
  imgcontainer: {
    height: IMGHEIGHT,
    width: IMGWIDTH,
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
    color: Colors.main_color,
  },
});
