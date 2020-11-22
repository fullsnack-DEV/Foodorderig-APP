import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomescreen from "../Screens/Welcomescreen";

const Stack = createStackNavigator();

const Authnavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcomescreen} />
  </Stack.Navigator>
);

export default Authnavigator;
