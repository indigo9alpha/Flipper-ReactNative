import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {useDispatch} from 'react-redux'
import {resetPassword} from '../reducks/users/operations'

const SignUp = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.marginVertical}
        mode={"outlined"}
        label={"メールアドレス"}
        onChangeText={(text) => setEmail(text)}
      />
      
      <Button
        style={styles.marginVertical}
        mode={"text"}
        onPress={() => navigation.navigate("SignUp")}
      >
        パスワードをリセット
      </Button>
      <Button
        style={styles.marginVertical}
        mode={"text"}
        onPress={() => dispatch(resetPassword(email))}
      >
        ログイン画面に戻る
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  marginVertical: {
    marginVertical: 16,
  },
});

export default SignUp;
