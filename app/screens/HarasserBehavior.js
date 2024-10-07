import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BackButton from "../components/BackButton";
// Harasser Behavior Component
const HarasserBehavior = ({ navigation }) => {
  const behaviorList = [
    {
      text: "Use of slurs and degrading/inappropriate jokes",
      icon: require("../../assets/Harasser.png"), // Replace with the correct icon
    },
    {
      text: "Use of intimidation tactics (threatening, personal space invasion, raising voice to dominate, gaslighting)",
      icon: require("../../assets/Harasser.png"), // Replace with the correct icon
    },
    {
      text: "Spread of lies and gossip about the victim on social media",
      icon: require("../../assets/Harasser.png"), // Replace with the correct icon
    },
    {
      text: "Share humiliating things about the victim by mass chat / email",
      icon: require("../../assets/Harasser.png"), // Replace with the correct icon
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <Text style={styles.headerText}>Harasser Behavior</Text>
      <BackButton goBack={navigation.goBack} />

      {/* Behavior List */}
      {behaviorList.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.listText}>{item.text}</Text>
        </View>
      ))}

      {/* Illustration Image */}
      <Image
        source={require("../../assets/harass.png")} // Replace with the illustration image
        style={styles.illustration}
      />

      {/* Bottom Icons */}
      <View style={styles.bottomIconsContainer}>
        <Image
          source={require("../../assets/email.png")} // Replace with the email icon
          style={styles.bottomIcon}
        />
        <Image
          source={require("../../assets/Vector.png")} // Replace with the heart icon
          style={styles.bottomIcon}
        />
      </View>
    </ScrollView>
  );
};

// Styles for Harasser Behavior Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5BFD4", // Light pink background color
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7F2A82", // Deep purple text color
    marginBottom: 20,
    textAlign: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  listText: {
    fontSize: 16,
    color: "#7F2A82", // Deep purple text color
  },
  illustration: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 5,
  },
  bottomIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
    marginBottom: 20,
  },
  bottomIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
});

export default HarasserBehavior;
