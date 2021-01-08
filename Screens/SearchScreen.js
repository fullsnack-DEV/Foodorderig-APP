import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SearchCom from "../components/SearchCom";
import Searchitemcom from "../components/Searchitemcom";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchCom />
      <View style={styles.searchcontainer}>
        <View style={styles.heading}>
          <Text style={styles.txtheading}>Found 6 Results</Text>
        </View>
        <View style={styles.part}>
          <View style={styles.p1}>
            <Searchitemcom />
            <Searchitemcom />
          </View>
          <View style={styles.p2}>
            <Searchitemcom />
            <Searchitemcom />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  search: {
    top: 90,
  },
  searchcontainer: {
    height: 818,
    width: 414,
    borderRadius: 50,
    top: 60,
    backgroundColor: "#F9F9F9",
  },
  heading: {
    alignSelf: "center",
    marginVertical: 25,
  },
  txtheading: {
    fontFamily: "itim",
    fontSize: 18,
  },
  part: {
    flexDirection: "row",
  },
  p2: {
    left: 50,
  },
});
