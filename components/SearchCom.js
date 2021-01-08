import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

export default function SearchCom() {
  const [value, onchange] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          placeholder={"Search"}
          style={styles.txt}
          onChangeText={(text) => onchange(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    height: "7%",
    top: 55,
    left: 15,
    justifyContent: "center",
  },
  search: {
    backgroundColor: "#fff",
    height: "85%",
    width: "70%",
    marginLeft: 40,
    borderRadius: 50,
    alignContent: "flex-start",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  txt: {
    height: "100%",
    width: "90%",
    marginLeft: 10,
    borderRadius: 50,
    fontFamily: "itim",
    fontSize: 15,
    color: "#000",
  },
});
