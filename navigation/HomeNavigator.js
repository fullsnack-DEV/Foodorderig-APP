import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import itemsScreen from "../Screens/itemsScreen";
import HomeScreen from "../Screens/HomeScreen";
import Welcomescreen from "../Screens/Welcomescreen";

const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="welcome" component={Welcomescreen} />
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="detail" component={itemsScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
