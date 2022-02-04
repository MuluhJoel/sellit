import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../utils/addToCart";
const ProductDetailScreen = ({ navigation, route }) => {
  const [itemAdded, setItemAdded] = useState(false);

  const { id, image, name, price } = route.params;

  const cartData = useSelector((state) => state.cart.items);

  useEffect(() => {
    setItemAdded(cartData.some((item) => item.id == id));
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Header backgroundColor="tomato" paddingHorizontal={20} />
      <ScrollView>
        <Image source={image} style={styles.productImage} />
        <View style={styles.productDetail}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>{price}</Text>
          <View style={styles.productDescription}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.descriptionHeader}>Description</Text>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => navigation.navigate("SellerScreen")}
              >
                <Text style={styles.viewSeller}>VIEW SELLER</Text>
                <FontAwesome
                  style={{ marginLeft: 9 }}
                  name="chevron-right"
                  color="#FF6969"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.descriptionText}>
              This is the megaProduct and we have many of them in stock in
              different colors and of various sizes.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <MarketButton
              id={id}
              image={image}
              name={name}
              price={price}
              addToCart={addToCart}
              text="ADD TO CART"
              itemAdded={itemAdded}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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

const MarketButton = ({
  text,
  addToCart,
  id,
  image,
  name,
  itemAdded,
  price,
}) => {
  const dispatch = useDispatch();
  const addThisItem = () => {
    if (addToCart && !itemAdded) {
      dispatch(addToCart({ id, image, name, price }));
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={addThisItem}>
      <Text style={{ fontWeight: "bold", color: "rgba(255,255,255,1)" }}>
        {itemAdded ? "Already added" : text}
      </Text>
      <View style={styles.arrowUp}>
        <FontAwesome name="chevron-right" size={14} color="#FF6969" />
      </View>
    </TouchableOpacity>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  productDetail: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  productImage: {
    width: "100%",
    height: 250,
  },
  productName: {
    fontSize: 23,
  },
  productPrice: {
    color: "green",
    fontWeight: "bold",
    marginTop: 2,
    fontSize: 20,
  },
  descriptionHeader: {
    fontWeight: "bold",
    fontSize: 19,
    marginVertical: 15,
  },
  viewSeller: {
    fontWeight: "bold",
    color: "#FF6969",
  },
  descriptionText: {
    opacity: 0.7,
    fontSize: 18,
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
