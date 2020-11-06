import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import * as font from "expo-font";
import { AppLoading } from "expo";

//Screens Import
import Welcomescreen from "./Screens/Welcomescreen";
import HomeScreen from "./Screens/HomeScreen";

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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Welcomescreen} />
          <Stack.Screen name="Main" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
