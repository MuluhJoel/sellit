import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text>Created by Muluh Joel</Text>
        <Text>2022</Text>
        <Text>Presently under construction</Text>
      </View>
    </View>
  );
};

export default AboutScreen;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
