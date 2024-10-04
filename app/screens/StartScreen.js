import React from "react";
import { StyleSheet } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Text } from "react-native-paper";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header style={styles.header}>Welcome to </Header>
      <Text style={styles.text}>Amanah</Text>
      <Logo />

      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Create an account
      </Button>
    </Background>
  );
}
const styles = StyleSheet.create({
  header: {
    color: "#EEAADC", // Header color
    fontSize: 20, // Header font size
    marginBottom: 5,
  },
  text: {
    color: "#EEAADC", // Text color
    fontSize: 40, // Text font size
    fontWeight: "bold", // Optional: add bold to make it stand out
  },
});
