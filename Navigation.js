import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import createStore from "./src/reducks/store/store";
import {
  Home,
  Books,
  Account,
  SignIn,
  SignUp,
  Reset,
  Register,
} from "./src/templates/index";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pages" component={Home} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const AccountStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Reset" component={Reset} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const selector = useSelector((state) => state);
  const isSignedIn = selector.isSignedIn;
  

  if (isSignedIn) {
    return (
<>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Books" component={Books} />
          <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator>
      </>
    );
  } else {
    return(
    <>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Reset" component={Reset} />
      </Stack.Navigator>
    </>
    )
  }
};

export default Navigation;
