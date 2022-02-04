import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MyProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyProductScreen</Text>
    </View>
  );
};

export default MyProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 40,
  },
});
