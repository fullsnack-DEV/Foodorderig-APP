import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import AccountScreen from "../Screens/AccountScreen";
import LikedScreen from "../Screens/LikedScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Account" component={AccountScreen} />
    <Tab.Screen name="Like" component={LikedScreen} />
  </Tab.Navigator>
);
export default AppNavigator;
