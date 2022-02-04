import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from "./data";
import { useNavigation } from "@react-navigation/native";
const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/emptycart.gif")}
        style={styles.image}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Text style={{ color: "#FF6969", fontSize: 25, fontWeight: "bold" }}>
          OOPS!
        </Text>
        <Text style={{ marginTop: 10, fontSize: 18 }}>Your cart is empty.</Text>
        <Text style={{ fontSize: 18 }}>You can check recent Products</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductsNavigator")}
        >
          <View
            style={{
              backgroundColor: "#FF6969",
              paddingHorizontal: 25,
              paddingVertical: 10,
              borderRadius: 20,
              marginTop: 25,
            }}
          >
            <Text style={{ color: "white", fontSize: 17 }}>Go Shopping</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "50%",
  },
});
