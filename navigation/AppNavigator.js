import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemScreen from "../Screens/itemsScreen";
import HomeScreen from "../Screens/HomeScreen";
import Welcomescreen from "../Screens/Welcomescreen";
import itemsScreen from "../Screens/itemsScreen";
import ItemNavigator from "./HomeNavigator";
import AccountScreen from "../Screens/AccountScreen";
import LikedScreen from "../Screens/LikedScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={ItemNavigator} />
    <Tab.Screen name="Account" component={AccountScreen} />
    <Tab.Screen name="Like" component={LikedScreen} />
  </Tab.Navigator>
);
export default AppNavigator;
