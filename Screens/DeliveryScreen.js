import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import PaymentContainer from "../components/PaymentContainer";
import Button from "../components/buttonCart";
import colors from "../config/colors";
import NavBarcom from "../components/NavBarcom";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function DeliveryScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F8" }}>
      <NavBarcom
        title={"CheckOut"}
        icon={require("../assets/chevronleft.png")}
        onPress={() => navigation.navigate("payment")}
      />
      <View style={styles.headingcontainer}>
        <Text style={styles.txt}>Address Details</Text>
      </View>
      <View style={styles.addresscontainer}>
        <View style={styles.line1}>
          <Text style={styles.nametxt}>Marvis Kparobo</Text>
        </View>
        <View style={styles.seprator} />
        <View style={styles.line2}>
          <Text style={styles.addresstxt}>
            Km 5 refinery road oppsite re public road, effurun, delta state
          </Text>
        </View>
        <View style={styles.seprator} />
        <View style={styles.line3}>
          <Text style={styles.calltxt}>+234 9011039271</Text>
        </View>
      </View>
      <PaymentContainer
        heading1={"Door Delivery"}
        heading2={"Pick Up"}
        alignstyle={styles.bank}
        title={"Delivery Method"}
        styleheading={styles.subheadingcontainer}
      />
      <View style={styles.payment}>
        <View>
          <Text style={styles.txtpay}>Total</Text>
        </View>

        <View>
          <Text style={styles.txtamt}>556 </Text>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <Button
          style={styles.btn}
          title="Proceed To Checkout"
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

  addresscontainer: {
    height: 210,
    width: 315,
    backgroundColor: "#fff",

    top: 90,
    left: 46,
    borderRadius: 25,
    justifyContent: "space-evenly",
  },
  payment: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 120,
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 55,
    alignItems: "center",
    width: "75%",
    alignSelf: "center",
  },
  nametxt: {
    fontSize: 19,
    fontFamily: "itim",
    marginLeft: 10,
  },
  addresstxt: {
    fontSize: 19,
    fontFamily: "itim",
    marginLeft: 10,
  },
  calltxt: {
    fontSize: 19,
    fontFamily: "itim",
    marginLeft: 10,
  },
  seprator: {
    backgroundColor: "#000",
    height: 0.5,
    width: "100%",
    marginVertical: 5,
  },
  bank: {
    left: 12,
  },
  subheadingcontainer: {
    marginVertical: 10,
  },
  txtpay: {
    fontSize: 22,
    fontFamily: "itim",
  },

  txtamt: {
    fontSize: 25,
    fontFamily: "itim",
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
