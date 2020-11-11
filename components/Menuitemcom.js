import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";

import Recipedata from "../data/Recipedata";
import Recipeitem from "./Recipeitem";

const HEIGHT = Dimensions.get("window").height;

const WIDTH = Dimensions.get("window").width;

const IMGHEIGHT = HEIGHT * 0.35;
const IMGWIDTH = WIDTH * 0.25;

export default function Menuitemcom({ style }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={[styles.container, style]}>
      <Animated.FlatList
        data={Recipedata}
        horizontal
        keyExtractor={(Recipedata) => Recipedata.price}
        showsHorizontalScrollIndicator={false}
        style={styles.flat}
        snapToInterval={IMGWIDTH}
        renderItem={({ item, index }) => (
          <Recipeitem
            title={item.name}
            img={item.img}
            price={item.price}
            index={index}
            scrollX={scrollX}
          />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    height: HEIGHT * 0.45,
    width: WIDTH,
  },
});

//we gonna build a flatlist in the component using the fake data
