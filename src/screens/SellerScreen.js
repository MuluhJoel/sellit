import React, { useEffect } from "react";

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import data from "../components/data";
import { FontAwesome } from "@expo/vector-icons";
import Product from "../components/Product";
import { default as dats } from "../components/data";
const SellerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome name="chevron-left" size={20} color="white" />
              </TouchableOpacity>
              <View style={styles.profileDetails}>
                <Image source={data[0].image} style={styles.profileImage} />
                <Text style={styles.followersCount}>20 followers</Text>
                <Text style={styles.storeName}>Micro Store</Text>
                <Text style={styles.storeStatement}>
                  We deliver products to our customers from all around the
                  country at very low cost.
                </Text>
              </View>
            </View>
            <View style={styles.storeDetails}>
              <TouchableOpacity>
                <View style={styles.followBtn}>
                  <Text style={styles.followBtnText}>Follow</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.coreDetails}>
                <BusinessDetails title="Business name" text="Micro Store" />
                <BusinessDetails title="Business Owner" text="John Doe" />
                <BusinessDetails
                  title="Description"
                  text="The micro Store is a one-man business created to enable people view and buy things easier than ever before."
                  verify={true}
                />
                <BusinessDetails
                  title="How will a product be delivered to you?"
                  text="We deliver at your house and just need to contact us, give your address and we will get your product to you two days after the order."
                  question={true}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: -15,
                    marginTop: 30,
                    color: "#FF6969",
                    textTransform: "uppercase",
                  }}
                >
                  More of our Products.
                </Text>
              </View>
            </View>
          </>
        }
        data={dats}
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
  );
};

export default SellerScreen;

const BusinessDetails = ({ title, text, question }) => {
  return (
    <>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 21 }}>{title}</Text>
        <Text
          style={{ marginTop: question && 10, fontSize: 17, color: "#333" }}
        >
          {text}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: "#FF6969",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 40,
  },
  profileDetails: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 50,
    resizeMode: "cover",
  },
  followersCount: {
    fontWeight: "800",
    marginTop: 15,
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  storeName: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    color: "white",
  },
  storeStatement: {
    fontWeight: "800",
    fontSize: 16,
    textAlign: "center",
    color: "white",
    paddingHorizontal: 20,
  },
  storeDetails: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  followBtn: {
    width: 120,
    height: 35,
    backgroundColor: "#FF6969",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  followBtnText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});
