import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import Recipes from "../data/Recipedata";

const filterdatabyid = (id) => {
  return Recipes.filter((Recipe) => {
    return Recipe.id == id;
  });
};

export default function LikedScreen({ route }) {
  const [likes, Setlikes] = useState([{ title: "id" }]);
  const { id } = route.params;

  const Addlikes = (id) => {
    Setlikes([
      ...likes,
      {
        title: id,
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ marginVertical: "15%" }}>{id}</Text>
      <Text>{likes.title}</Text>
      <Button title="Add to cart" onPress={() => Addlikes(id)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
