import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

//components
import SearchCom from "../components/SearchCom";
import Menuitemcom from "../components/Menuitemcom";

//files
import Colors from "../config/colors";
import Itemlist from "../components/Itemlist";
import Recipedata from "../data/Recipedata";

//function to filter the data from the dummy data set
const filterbytag = (tag) => {
  return Recipedata.filter((Recipedata) => {
    return Recipedata.tag == tag;
  });
};

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View>
          <Image style={styles.nav} source={require("../assets/hammenu.png")} />
        </View>

        <View></View>
      </View>

      <View style={styles.txtcontainer}>
        <Text style={styles.txt}> Delicious </Text>
        <Text style={styles.txt1}>food for you </Text>
      </View>

      <ScrollView style={{ flex: 1.5 }}>
        <Itemlist title="Foods" />

        <Menuitemcom results={filterbytag("Foods")} navigation={navigation} />

        <Itemlist title="Drinks" />

        <Menuitemcom results={filterbytag("Drinks")} navigation={navigation} />
        <Itemlist title="Sauces" />
        <Menuitemcom results={filterbytag("Sauce")} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.8,
  },
  itemcontainer: {
    top: 15,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 35,
  },
  nav: {
    marginLeft: 25,
  },
  ham: {
    marginRight: 25,
  },
  txtcontainer: {
    marginLeft: 25,
  },
  txt: {
    fontSize: 35,
    fontFamily: "itim",
  },
  txt1: {
    fontSize: 35,
    fontFamily: "itim",
    marginLeft: 8,
    marginVertical: -8,
    fontWeight: "500",
  },
});
