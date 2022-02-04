import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomTabNavigator from "./BottomTabNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";
import AboutScreen from "../screens/AboutScreen";
import TopTabNavigator from "./TopTabNavigator";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={TopTabNavigator}
        options={{ title: "Dashboard" }}
      />
      <Drawer.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: "About" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
