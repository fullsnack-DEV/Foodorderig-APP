import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import PaymentContainer from "../components/PaymentContainer";

export default function PaymentScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.navcontainer}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.navigate("cart")}>
            <Image source={require("../assets/chevronleft.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.carticon}>
          <Text style={styles.carttext}>Payment</Text>
        </View>
      </View>
      <View style={styles.headingcontainer}>
        <Text style={styles.txt}>Payment</Text>
      </View>
      <PaymentContainer
        title={"Payment"}
        heading1={"Card"}
        heading2={"bank"}
        image={require("../assets/bi_credit-card-2-front-fill.png")}
        image2={require("../assets/bank.png")}
      />
    </SafeAreaView>
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
  carttext: {
    fontSize: 21,
    fontFamily: "itim",
  },
  headingcontainer: {
    top: 124,
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
});
