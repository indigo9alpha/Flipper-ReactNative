import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {useDispatch,useSelector} from 'react-redux'
import { searchAndSetBook } from "../reducks/users/operations";

const SignUp = () => {
  const [isbn, setIsbn] = useState("");

  const navigation = useNavigation();

  const dispatch = useDispatch()
  const selector = useSelector(state => state)

  const uid = selector.uid
  const pages = selector.pages
  const books = selector.books

  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.marginVertical}
        mode={"outlined"}
        label={"enter ISBN"}
        onChangeText={(text) => setIsbn(text)}
      />

      <Button
        style={styles.marginVertical}
        mode={"outlined"}
        onPress={() => dispatch(searchAndSetBook(isbn,uid,pages,books))}
      >
        本を登録
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  marginVertical: {
    marginVertical: 16,
  },
});

export default SignUp;
