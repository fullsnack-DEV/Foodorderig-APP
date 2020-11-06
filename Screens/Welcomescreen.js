import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
//constants
import Colors from "../config/colors";
import Button from "../components/Button";

const HEIGHT = Dimensions.get("window").height;

const WIDTH = Dimensions.get("window").width;

//code

export default function Welcomescreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.maincontent}>
        <View style={styles.headerContent}>
          <View style={styles.circle}>
            <Image source={require("../assets/cheflogo.png")} />
          </View>
          <View style={styles.textcotainer}>
            <Text style={styles.heading}>Food For</Text>
            <Text style={styles.heading1}>Everyone</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/ToyFaces.png")}
          />

          <Image
            style={styles.image2}
            source={require("../assets/ToyFaces2.png")}
          />
        </View>
      </View>
      <View style={styles.btncontainer}>
        <Button title="Get Started" navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
    opacity: 1,
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: Colors.white_color,
    borderRadius: 50,
    alignItems: "center",
    top: HEIGHT * 0.08,
    left: WIDTH * 0.002,
  },
  btncontainer: {
    top: HEIGHT * 0.92,
    zIndex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    top: HEIGHT / 2.5,
    flex: 1,
    opacity: 0.9,
    shadowColor: "#000",
  },
  image: {
    height: HEIGHT * 0.5,
    width: WIDTH * 0.65,
    left: WIDTH * 0.001,
    zIndex: 1,
    resizeMode: "stretch",
  },
  image2: {
    top: 30,
    right: 90,
    width: WIDTH * 0.58,
    height: HEIGHT * 0.45,
    resizeMode: "stretch",
  },
  textcotainer: {
    top: HEIGHT * 0.09,
  },
  heading: {
    color: Colors.white_color,
    fontSize: 50,
    fontFamily: "itim",
  },
  heading1: {
    color: Colors.white_color,
    fontSize: 50,
    fontFamily: "itim",
    top: -25,
  },
  headerContent: {
    position: "absolute",
    top: 25,
    left: 50,
  },
});
