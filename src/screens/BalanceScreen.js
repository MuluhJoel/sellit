import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BalanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BalanceScreen</Text>
    </View>
  );
};

export default BalanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 40,
  },
});
