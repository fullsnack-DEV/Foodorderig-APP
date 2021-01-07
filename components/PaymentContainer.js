import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { RadioButton } from "react-native-paper";

export default function PaymentContainer({
  title,
  image,
  style,
  styleheading,
  image2,
  heading1,
  heading2,
  alignstyle,
}) {
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={styles.container}>
      <View style={[styles.subheadingcontainer]}>
        <Text style={[styles.subtxt, styleheading]}>{title}</Text>
      </View>
      <View style={[styles.paymentcontainer, style]}>
        <View style={styles.card}>
          <RadioButton
            style={styles.radbutton}
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />

          {image && (
            <View styles={styles.cardlayout}>
              <View style={styles.cardbg}>
                <Image style={styles.cardimg} source={image} />
              </View>
            </View>
          )}
          <Text style={styles.txtcard}>{heading1}</Text>
        </View>
        <View style={styles.seprator} />

        <View style={styles.bankaccount}>
          <View style={[styles.bank, alignstyle]}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            {image2 && (
              <View styles={styles.banklayout}>
                <View style={styles.cardbg1}>
                  <Image style={styles.bankimg} source={image2} />
                </View>
              </View>
            )}
            <Text style={styles.txtbank}>{heading2}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  subheadingcontainer: {
    top: 89,
    left: 60,
  },
  subtxt: {
    fontFamily: "itim",
    fontSize: 17,
  },
  paymentcontainer: {
    height: 190,
    width: 315,
    backgroundColor: "#fff",

    top: 90,
    left: 46,
    borderRadius: 25,
  },
  cardimg: {
    height: 35,
    width: 35,

    marginVertical: 9,
  },

  card: {
    flexDirection: "row",

    height: 55,
    top: 20,
    left: 25,
    width: 262,
    justifyContent: "space-around",
    alignItems: "center",
  },
  bank: {
    flexDirection: "row",

    height: 55,
    top: 20,
    left: 25,
    width: 262,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 35,
  },
  banklayout: {
    height: 30,
    width: 30,
    borderRadius: 25,
  },
  bankimg: {
    height: 35,
    width: 35,

    marginVertical: 9,
  },
  txtcard: {
    fontSize: 19,
    fontFamily: "itim",
  },
  txtbank: {
    fontSize: 19,
    fontFamily: "itim",
  },
  banklayout: {
    backgroundColor: "orange",
    height: "52%",
  },
  cardbg1: {
    height: 56,
    width: 56,
    backgroundColor: "#EB4796",
    borderRadius: 15,
    alignItems: "center",
  },
  cardbg: {
    height: 56,
    width: 56,
    backgroundColor: "#F47B0A",
    borderRadius: 15,
    alignItems: "center",
  },
  seprator: {
    width: "90%",
    height: 0.5,
    backgroundColor: "#000000",
    top: 35,
    left: 10,
    alignSelf: "center",
  },
});
