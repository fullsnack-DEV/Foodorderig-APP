import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../Screens/CartScreen";
import PaymentScreen from "../Screens/PaymentScreen";

const Stack = createStackNavigator();
const CartNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="cart" component={CartScreen} />
    <Stack.Screen name="payment" component={PaymentScreen} />
  </Stack.Navigator>
);

export default CartNavigator;
