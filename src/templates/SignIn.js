import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {useDispatch} from 'react-redux'
import {signIn} from '../reducks/users/operations'

const SignUp = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  
  const navigation = useNavigation();

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.marginVertical}
        mode={"outlined"}
        label={"メールアドレス"}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.marginVertical}
        mode={"outlined"}
        label={"パスワード"}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        style={styles.marginVertical}
        mode={"text"}
        onPress={() => dispatch(signIn(email, password))}
      >
        Sign In
      </Button>
      <Button
        style={styles.marginVertical}
        mode={"text"}
        onPress={() => dispatch(signIn('guest@gmail.com', 'password'))}
      >
        ゲストユーザーとしてサインイン
      </Button>
      <Button
        style={styles.marginVertical}
        mode={"text"}
        onPress={() => navigation.navigate("SignUp")}
      >
        アカウント登録
      </Button>
      <Button
        style={styles.marginVertical}
        mode={"text"}
        onPress={() => navigation.navigate("Reset")}
      >
        パスワードを忘れた
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
