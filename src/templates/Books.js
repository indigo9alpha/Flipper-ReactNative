import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";

const Books = () => {
  const selector = useSelector((state) => state);
  const data = selector.books;
  

  return (
    <>
      <ScrollView contentContainerStyle={styles.BookCards} >
        {/* <FlatList
          numColumns={2}
          data={data}
          extraData={data}
          keyExtractor={item => item.image}
          renderItem={({ item }) => {
            <BookCard item={item} />
          }}
        />
       */}
        {data.map((item) => (
          <Image style={styles.card} source={{ uri: item.image }} key={item.image} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  BookCards: {
    
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 64,
    width: 300,
    alignSelf: "center",
  },
  card: {
    width: 120,
    height: 160,
    marginRight: 16,
    marginVertical: 8,
  },
});

export default Books;
