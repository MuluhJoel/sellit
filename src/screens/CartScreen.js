import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import EmptyCart from "../components/EmptyCart";

const CartScreen = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const cartData = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (cartData.length > 0) {
      let total = 0;
      cartData.forEach((data) => {
        total += Number(data.price.split("$")[1]) * Number(data.quantity);
      });

      setCartTotal(total.toFixed(2));
    } else {
      setCartTotal(0);
    }
  }, [cartData]);
  return cartData.length === 0 ? (
    <EmptyCart />
  ) : (
    <View style={styles.container}>
      <Header />
      <Text style={styles.cartTitle}>My Cart</Text>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <FlatList
          data={cartData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartItem
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          )}
        />
      </View>
      <View style={styles.cartSumContainer}>
        <View style={styles.cartSum}>
          <View style={styles.cartSumDetails}>
            <Text style={styles.sumHeader}>TOTAL</Text>
            <Text style={styles.total}>${cartTotal}</Text>
          </View>
          <CheckoutButton />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

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

const CheckoutButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{ fontWeight: "bold", color: "rgba(255,255,255,1)" }}>
        CHECK OUT
      </Text>
      <View style={styles.arrowUp}>
        <FontAwesome name="chevron-right" size={14} color="#FF6969" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 15,
  },
  cartSumContainer: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.1)",
    paddingTop: 5,
  },
  cartSum: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sumHeader: {
    color: "grey",
  },
  total: {
    fontSize: 25,
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 50,
    width: 170,
    height: 40,
    backgroundColor: "#FF6969",
  },
  arrowUp: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "white",
  },
});
