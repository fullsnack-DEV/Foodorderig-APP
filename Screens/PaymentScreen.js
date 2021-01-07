import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import PaymentContainer from "../components/PaymentContainer";
import Button from "../components/buttonCart";
import colors from "../config/colors";
import NavBarcom from "../components/NavBarcom";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function PaymentScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F8" }}>
      <NavBarcom
        title={"Payment"}
        icon={require("../assets/chevronleft.png")}
        onPress={() => navigation.navigate("cart")}
      />
      <View style={styles.headingcontainer}>
        <Text style={styles.txt}>Payment</Text>
      </View>
      <PaymentContainer
        title={"Payment"}
        heading1={"Card"}
        heading2={"bank"}
        image={require("../assets/bi_credit-card-2-front-fill.png")}
        image2={require("../assets/bank.png")}
        style={styles.paymentcontainer}
        styleheading={styles.subheadingcontainer}
      />
      <PaymentContainer
        title={"Delivery Method"}
        heading1={"Door Delivery"}
        heading2={"Pick Up"}
        style={styles.paymentcontainer}
        styleheading={styles.subheadingcontainer}
        alignstyle={styles.bank}
      />
      <View style={styles.btncontainer}>
        <Button
          style={styles.btn}
          title="Proceed To Payment"
          txtstyle={{ color: "white" }}
          onPress={() => navigation.navigate("delivery")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingcontainer: {
    top: 80,
    left: 50,
  },

  txt: {
    fontSize: 24,
    fontFamily: "itim",
  },
  subtxt: {
    fontSize: 18,
    fontFamily: "itim",
  },
  paymentcontainer: {
    marginVertical: 2,
  },
  subheadingcontainer: {
    marginVertical: 15,
  },
  bank: {
    left: 12,
  },
  btncontainer: {
    alignItems: "center",
    marginTop: HEIGHT * 0.2,
    marginBottom: 8,
  },
  btn: {
    backgroundColor: colors.main_color,
    width: "50%",
  },
});
