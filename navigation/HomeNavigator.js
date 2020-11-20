import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import itemsScreen from "../Screens/itemsScreen";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();
const ItemNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="detail" component={itemsScreen} />
  </Stack.Navigator>
);

export default ItemNavigator;
