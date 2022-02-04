import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
