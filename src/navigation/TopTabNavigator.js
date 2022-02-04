import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyProductScreen from "../screens/MyProductScreen";
import SellerHistoryScreen from "../screens/SellerHistoryScreen";
import BalanceScreen from "../screens/BalanceScreen";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="MyProductScreen"
          component={MyProductScreen}
          options={{ title: "Products" }}
        />
        <Tab.Screen
          name="BalanceScreen"
          component={BalanceScreen}
          options={{ title: "Balance" }}
        />
        <Tab.Screen
          name="SellerHistoryScreen"
          component={SellerHistoryScreen}
          options={{ title: "History" }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TopTabNavigator;

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <FontAwesome name="bars" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    height: 40,
    // backgroundColor: "#FF6969",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
