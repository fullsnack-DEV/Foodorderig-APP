import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

//components
import SearchCom from "../components/SearchCom";
import ItemListmenu from "../components/itemListmenu";
import Menuitem from "../components/Menuitemcom";
import Recipeitem from "../components/Recipeitem";
//files
import Colors from "../config/colors";
import Menuitemcom from "../components/Menuitemcom";
import { FlatList } from "react-native-gesture-handler";
import Recipedata from "../data/Recipedata";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View>
          <Image style={styles.nav} source={require("../assets/hammenu.png")} />
        </View>

        <View>
          <Image
            style={styles.ham}
            source={require("../assets/shoppingcart.png")}
          />
        </View>
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.txt}> Delicious </Text>
        <Text style={styles.txt1}>food for you </Text>
      </View>

      <SearchCom />
      <ItemListmenu />
      <Menuitemcom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
