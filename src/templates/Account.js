import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getIsSignedIn, getPages, getUserId} from '../reducks/users/selectors'
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { signOut } from "../reducks/users/operations";

const Account = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch()
  const selector = useSelector(state => state);

  
  const uid = selector.uid
  const pages = selector.pages

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button mode="outlined" onPress={() => navigation.navigate("Reset")} style={{marginBottom: 80}}>
        パスワード変更
      </Button>
      <Button mode="outlined" onPress={() => dispatch(signOut())}>
        SignOut
      </Button>
    </View>
  );
};

export default Account;
