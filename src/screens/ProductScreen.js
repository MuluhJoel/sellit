import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import data from "../components/data";
import Product from "../components/Product";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import * as Updates from "expo-updates";
const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header backgroundColor="white" />
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Product
              id={item.id}
              image={item.image}
              name={item.productName}
              price={item.price}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ProductScreen;

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <FontAwesome name="bars" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F5F6F8",
  },
  header: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
