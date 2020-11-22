import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import AccountScreen from "../Screens/AccountScreen";
import LikedScreen from "../Screens/LikedScreen";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { bounce } from "react-native/Libraries/Animated/src/Easing";
import SearchScreen from "../Screens/SearchScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      inactiveBackgroundColor: "#F6F6F9",
      activeBackgroundColor: "#F6F6F9",
      showLabel: false,
      activeTintColor: "#FF4B3A",
      style: {
        backgroundColor: "#fff",
        borderColor: "#fff",
      },

      adaptive: true7,
      allowFontScaling: false,
      tabStyle: {
        backgroundColor: "#fff",
        borderColor: "#fff",
      },
      keyboardHidesTabBar: true,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Like"
      component={LikedScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="heart" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="search" size={25} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default AppNavigator;

const styles = StyleSheet.create({
  tab: {},
});
