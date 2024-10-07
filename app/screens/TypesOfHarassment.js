import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BackButton from "../components/BackButton";

// Types of Harassment Component
const TypesOfHarassment = ({ navigation }) => {
  // Destructure navigation from props
  const harassmentList = [
    "I was stalked, ambushed, and intruded",
    "I was followed by a stranger",
    "I received persistent requests for dating and companionship",
    "I received unwanted letters and/or presents",
    "I was informed that I was being monitored",
    "I uninterruptedly received calls, faxes, and e-mails",
    "I was suggested a special treatment in exchange for romantic services",
  ];

  //   const handleResetNavigation = () => {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: "LadyGuide" }], // Update this to match your actual route name
  //     });
  //   };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Types of harassment</Text>

      {/* List of Harassment Types */}
      {harassmentList.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Image
            source={require("../../assets/cross-icon.png")} // Replace with your own cross icon
            style={styles.listIcon}
          />
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}

      {/* Call reset navigation when necessary (e.g., button press) */}
      {/* <BackButton title="Go to LadyGuide" onPress={handleResetNavigation} /> */}

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <Image
          source={require("../../assets/lady.png")} // Replace with your image of the woman
          style={styles.bottomImage}
        />
        <Image
          source={require("../../assets/Vector.png")} // Replace with your heart icon
          style={styles.heartIcon}
        />
      </View>
      <BackButton goBack={navigation.goBack} />
    </ScrollView>
  );
};

// Styles
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
    marginLeft: 40,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  listIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  listText: {
    fontSize: 16,
    color: "#7F2A82", // Deep purple text color
  },
  bottomContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  bottomImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  heartIcon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
});

export default TypesOfHarassment;
