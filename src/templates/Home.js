import React, { useRef, useEffect } from "react";
import { View, Text, Button, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import { useSelector } from "react-redux";
import * as Animatable from 'react-native-animatable'
import {CountUp} from 'use-count-up'

const Home = () => {
  const navigation = useNavigation();

  const selector = useSelector((state) => state);
  const pages = Number(selector.pages
)

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.youHaveRead}
        animation="fadeInLeft"
        duration={2000}
      >
        You have read
      </Animatable.Text>
      <Text style={styles.counts}>
        <CountUp isCounting={true} end={pages} duration={3} />
      </Text>

      <Animatable.Text
        style={styles.pagesEver}
        animation="fadeInRight"
        duration={2000}
        delay={3000}
      >
        pages ever
      </Animatable.Text>
      <FAB
        style={styles.fab}
        color="white"
        icon="plus"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  youHaveRead: {
    fontSize: 40,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 16,
  },
  counts: {
    fontSize: 80,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  pagesEver: {
    fontSize: 40,
    alignSelf: "flex-end",
    marginTop: 100,
    marginRight: 16,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});

export default Home;
