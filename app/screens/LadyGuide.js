import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// Custom components and UI for LadyGuide
const LadyGuide = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/LadyGuide.png")} // Replace with your own shield image URL
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>LadyGuide</Text>
      </View>

      {/* Button Sections */}
      <TouchableOpacity
        style={styles.sectionButton}
        onPress={() => navigation.navigate("TypesOfHarassment")}

        // Navigate to Types of Harassment page
      >
        <Text style={styles.buttonText}>Types of harassment</Text>
        <Image
          source={require("../../assets/Vector.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sectionButton}
        onPress={() => navigation.navigate("HarasserBehavior")}
      >
        <Text style={styles.buttonText}>Harasser behavior</Text>
        <Image
          source={require("../../assets/Vector.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sectionButton}
        onPress={() => navigation.navigate("StepstoAvoidHarassment")}
      >
        <Text style={styles.buttonText}>Steps to avoid harassment</Text>
        <Image
          source={require("../../assets/Vector.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Image
          source={require("../../assets/items/logo.png")}
          style={styles.footerIcon}
        />
      </View>
    </View>
  );
};

// Styles for LadyGuide
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7F2A82", // Deep purple background color
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  headerIcon: {
    width: 40,
    height: 50,
    marginRight: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: "#FFFFFF", // White text
    fontWeight: "bold",
  },
  sectionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5BFD4", // Light pink background for buttons
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#7F2A82", // Deep purple text color
  },
  icon: {
    width: 40,
    height: 45,
  },
  footer: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  footerIcon: {
    width: 50,
    height: 50,
  },
});

export default LadyGuide;
