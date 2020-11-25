import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";

export default function LikedScreen({ route }) {
  const [likes, Setlikes] = useState([""]);
  const { title } = route.params;

  const { DeliveryDescription } = route.params;

  const Addlikes = (like) => {
    Setlikes([...likes, like]);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text> Trying to implement</Text>
        <Text>{likes}</Text>
        <Text>{DeliveryDescription}</Text>
        <Button title="Add to like" onPress={() => Addlikes(title)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "15%",
  },
});
