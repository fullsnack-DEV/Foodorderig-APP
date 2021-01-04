import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

import { StatusBar } from "expo-status-bar";
import * as font from "expo-font";
import { AppLoading } from "expo";

//Screens Import
import Welcomescreen from "./Screens/Welcomescreen";
import HomeScreen from "./Screens/HomeScreen";
import itemsScreen from "./Screens/itemsScreen";
import AppNavigator from "./navigation/AppNavigator";
import Authnavigator from "./navigation/Authnavigator";

//constants
const Stack = createStackNavigator();

//code

const getfont = () => {
  return font.loadAsync({
    itim: require("./assets/Fonts/Itim-Regular.ttf"),
  });
};

export default function App() {
  const [fontload, setFontload] = useState(false);

  if (fontload) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <AppLoading startAsync={getfont} onFinish={() => setFontload(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
