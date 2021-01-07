import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SearchCom from "../components/SearchCom";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchbar}>
        <SearchCom />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  searchbar: {
    top: 45,
    height: "100%",
  },
});
