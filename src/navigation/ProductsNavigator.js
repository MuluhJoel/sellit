import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductScreen from "../screens/ProductScreen";
import SellerScreen from "../screens/SellerScreen";
const Stack = createNativeStackNavigator();
const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="SellerScreen" component={SellerScreen} />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
