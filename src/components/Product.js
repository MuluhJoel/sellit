import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import { addToCart } from "../utils/addToCart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Product = ({ id, image, name, price }) => {
  const [itemAdded, setItemAdded] = useState(false);
  const cartData = useSelector((state) => state.cart.items);
  useEffect(() => {
    setItemAdded(cartData.some((item) => item.id == id));
  }, [cartData]);
  const dispatch = useDispatch();
  const addThisItem = () => {
    if (addToCart && !itemAdded) {
      dispatch(addToCart({ id, image, name, price }));
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductDetailScreen", {
            id,
            image,
            name,
            price,
          })
        }
      >
        <Image source={image} style={styles.image} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <View style={styles.productDetail}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>

          <TouchableOpacity onPress={() => addThisItem()}>
            <FontAwesome
              name="cart-plus"
              size={24}
              color={itemAdded ? "#FF6969" : "black"}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    width: "100%",
    borderRadius: 10,
    paddingBottom: 20,
    backgroundColor: "white",
    marginTop: 20,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 170,
    resizeMode: "cover",
  },
  productDetail: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  name: {
    opacity: 0.6,
    fontSize: 18,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
});
