import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import AccountTabs from "../components/AccountTabs";
import NavBarcom from "../components/NavBarcom";
export default function AccountScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F8" }}>
      <NavBarcom
        icon={require("../assets/chevronleft.png")}
        onPress={() => navigation.navigate("home")}
      />
      <View style={styles.headingbox}>
        <Text style={styles.heading}>My Profile</Text>
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.txtdetail}>Personal Detail</Text>
      </View>
      <View style={styles.detailscontainer}>
        <View style={styles.imgcontainer}>
          <Image
            style={styles.img}
            source={require("../assets/profilepic.png")}
          />
        </View>
        <View style={styles.infocontainer}>
          <View style={styles.namecontainer}>
            <Text style={styles.txtname}>Marvis ighedosa</Text>
          </View>
          <View style={styles.breaker} />
          <View style={styles.namecontainer}>
            <Text style={styles.txtphone}>+918830995823</Text>
          </View>
          <View style={styles.breaker} />
          <View style={styles.addresscontainer}>
            <Text style={styles.txtaddress}>
              +No 15 uti street off ovie palace road effurun delta state
            </Text>
          </View>
        </View>
      </View>
      <AccountTabs title={"Orders"} />
      <AccountTabs title={"Pending reviews"} style={styles.txt1} />
      <AccountTabs title={"Faq"} />
      <AccountTabs title={"Help"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingbox: {
    top: 60,
    left: 50,
  },
  heading: {
    fontFamily: "itim",
    fontSize: 27,
  },
  txtcontainer: {
    top: 65,
    left: 50,
  },
  txtdetail: {
    fontFamily: "itim",
    fontSize: 18,
  },
  detailscontainer: {
    height: 197,
    width: 315,
    top: 80,
    backgroundColor: "#fff",
    borderRadius: 25,
    left: 45,
    flexDirection: "row",
  },
  infocontainer: {
    justifyContent: "space-evenly",
    left: 30,
  },
  addresscontainer: {
    width: "75%",
  },
  imgcontainer: {
    marginVertical: 18,
    left: 16,
  },
  txtname: {
    fontFamily: "itim",
    fontSize: 20,
  },
  txtphone: {
    fontFamily: "itim",
    fontSize: 18,
  },
  txtaddress: {
    fontFamily: "itim",
    fontSize: 18,
  },
  breaker: {
    height: 0.5,
    width: "80%",
    backgroundColor: "#000",
  },
  txt1: {
    right: 15,
  },
});
