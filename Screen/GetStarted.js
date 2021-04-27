// import { StatusBar } from 'expo-status-bar';

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import HomeScreen from "./Home";

const GetSatrted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>Je prepare mon Ftour</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5733",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 17,
    fontWeight: "bold",
  },

  button: {
    width: 240,
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    justifyContent: "center",
    borderRadius: 30,
  },
});

export default GetSatrted;
