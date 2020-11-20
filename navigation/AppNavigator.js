import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemScreen from "../Screens/itemsScreen";
import HomeScreen from "../Screens/HomeScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Details" component={ItemScreen} />
    <Tab.Screen name="Home" component={HomeScreen} />
  </Tab.Navigator>
);
export default AppNavigator;
