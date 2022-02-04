import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import ProductsNavigator from "./ProductsNavigator";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const cartLength = useSelector((state) => state.cart.items.length);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="ProductsNavigator"
        component={ProductsNavigator}
        options={{
          title: "Products",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={25} color={focused && "#FF6969"} />
          ),
          tabBarActiveTintColor: "#FF6969",
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="cart-plus"
              size={25}
              color={focused && "#FF6969"}
            />
          ),
          tabBarBadge: cartLength !== 0 ? cartLength : null,

          tabBarActiveTintColor: "#FF6969",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
