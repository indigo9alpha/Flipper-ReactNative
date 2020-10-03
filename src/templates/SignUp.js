import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {signUp} from '../reducks/users/operations' 
import {useDispatch} from 'react-redux'

const SignUp = () => {
  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.marginVertical}
        mode={"outlined"}
        label={"ユーザーネーム"}
        onChangeText={(text) => setUsername(text)}
      />
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
      <TextInput
        style={styles.marginVertical}
        mode={"outlined"}
        label={"パスワード再入力"}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button
        style={styles.marginVertical}
        mode={"text"}
        onPress={() =>
          dispatch(signUp(username, email, password, confirmPassword))
        }
      >
        アカウントを登録する
      </Button>
      <Button
        style={styles.marginVertical}
        mode={"text"}
        onPress={() => navigation.navigate("SignIn")}
      >
        アカウントをお持ちの方はこちら
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
