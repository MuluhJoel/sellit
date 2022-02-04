import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
const MarketButton = ({ text, addToCart, id, image, name, price }) => {
  const [itemAdded, setItemAdd] = useState(false);
  const addThisItem = () => {
    if (addToCart && !itemAdded) {
      addToCart({ id, image, name, price });
    }
    setItemAdd(true);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={addThisItem}>
      <Text style={{ fontWeight: "bold", color: "rgba(255,255,255,1)" }}>
        {itemAdded ? "Already Added" : text}
      </Text>
      <View style={styles.arrowUp}>
        <FontAwesome name="chevron-right" size={14} color="#FF6969" />
      </View>
    </TouchableOpacity>
  );
};

export default MarketButton;

const styles = StyleSheet.create({
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
