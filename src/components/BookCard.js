import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const BookCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{ width: 120, height: 160 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: 120,
    height: 160,
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default BookCard;
