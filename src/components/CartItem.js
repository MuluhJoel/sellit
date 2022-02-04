import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CartItem = ({ id, image, name, price }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const cartData = useSelector((state) => state.cart.items);

  useEffect(() => {
    const thisItem = cartData.find((item) => item.id === id);
    setQuantity(thisItem.quantity);
  }, [cartData]);
  return (
    <View style={styles.cartContainer}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
        <View style={styles.itemControllers}>
          <TouchableOpacity
            style={styles.controller}
            onPress={() => dispatch({ type: "INCREASE_QUANTITY", id })}
          >
            <FontAwesome name="plus" size={15} color="black" />
          </TouchableOpacity>
          <Text style={styles.itemQuantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.controller}
            onPress={() => dispatch({ type: "DECREASE_QUANTITY", id })}
          >
            <FontAwesome name="minus" size={15} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => dispatch({ type: "DELETE_FROM_CART", id })}
        >
          <FontAwesome name="trash" size={30} color="tomato" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },
  itemDetails: {
    flex: 1,
  },
  itemImage: {
    width: 100,
    height: 90,
    borderRadius: 50,
    resizeMode: "cover",
    marginRight: 20,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "600",
  },
  itemPrice: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 18,
    color: "#FF6969",
  },
  itemControllers: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemQuantity: {
    marginHorizontal: 15,
  },
  controller: {
    width: 25,
    height: 25,
    backgroundColor: "#D4D4D4",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  controllerButton: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
