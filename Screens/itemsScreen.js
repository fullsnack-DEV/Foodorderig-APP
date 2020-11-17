import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function itemsScreen({ route }) {
  const { title } = route.params;

  return (
    <View>
      <Text>{title}</Text>
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
