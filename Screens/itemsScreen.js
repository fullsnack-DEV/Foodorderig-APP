import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import Button from "../components/Button";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function itemsScreen({ route, navigation }) {
  const { title, img, price, DeliveryDescription, Returninfo } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navcontainer}>
        <View style={styles.iconleft}>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <Image source={require("../assets/chevronleft.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconheart}>
          <Image source={require("../assets/heart.png")} />
        </View>
      </View>

      <View style={styles.maincontainer}>
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={img} />
        </View>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.pricecontainer}>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <View style={styles.infocontainer}>
        <View style={styles.deliverycontainer}>
          <Text style={styles.deliverytitle}>Delivery Info</Text>

          <Text style={styles.deliveryinfo}>{DeliveryDescription}</Text>
        </View>

        <View style={styles.returncontainer}>
          <Text style={styles.returntitle}>Return Info</Text>
          <Text style={styles.returninfo}>{Returninfo}</Text>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <Button
          style={styles.btn}
          title="Add To Cart"
          txtstyle={{ color: "white" }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F9",
    flex: 1,
  },
  Navcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: HEIGHT * 0.05,
  },
  iconheart: {
    marginRight: "5%",
  },
  btncontainer: {
    alignItems: "center",
    marginTop: HEIGHT * 0.04,
  },
  btn: {
    backgroundColor: colors.main_color,
  },
  iconleft: {
    marginLeft: "5%",
  },
  maincontainer: {
    alignSelf: "center",
    height: HEIGHT * 0.5,

    justifyContent: "space-evenly",
  },
  imgcontainer: {
    height: HEIGHT * 0.35,
    width: WIDTH * 0.8,

    resizeMode: "contain",
  },
  img: {
    height: HEIGHT * 0.35,
    width: WIDTH * 0.8,
    resizeMode: "contain",
  },
  titlecontainer: {
    alignSelf: "center",
    marginTop: "15%",
  },
  title: {
    fontSize: 25,
    fontFamily: "itim",
  },
  pricecontainer: {
    alignSelf: "center",
    marginTop: "1%",
  },
  price: {
    fontSize: 20,
    color: colors.main_color,
    fontFamily: "itim",
  },
  infocontainer: {
    marginTop: "5%",
  },
  deliverycontainer: {
    marginTop: "5%",
    marginLeft: "4%",
  },
  returncontainer: {
    marginTop: "5%",
    marginLeft: "4%",
  },
  deliveryinfo: {
    lineHeight: 22,
    color: "#565050",
  },
  deliverytitle: {
    fontSize: 20,
    fontFamily: "itim",
  },
  returninfo: {
    lineHeight: 22,
    color: "#565050",
  },
  returntitle: {
    fontSize: 20,
    fontFamily: "itim",
    fontWeight: "800",
  },
});
