import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import BackButton from "../components/BackButton";

const StepsToAvoidHarassment = ({ navigation }) => {
  const [isSelected, setSelection] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const stepsList = [
    "I reported harassers to platforms and blocked/muted its accounts on platforms",
    "I restricted comments and replies on my weblog/social media",
    "I talked to family / friends / business friends",
    "I contacted an inquiry counter of the platforms",
    "I discussed with my legal consultants and spoke to the police",
  ];

  const toggleSwitch = (index) => {
    const updatedSelection = [...isSelected];
    updatedSelection[index] = !updatedSelection[index];
    setSelection(updatedSelection);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Steps to avoid harassment</Text>
      <BackButton goBack={navigation.goBack} />
      {stepsList.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Switch
            value={isSelected[index]}
            onValueChange={() => toggleSwitch(index)}
          />
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}

      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/illustration2.png")}
          style={styles.illustration}
        />
      </View>
    </ScrollView>
  );
};

// Styles for the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5BFD4",
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7F2A82",
    marginBottom: 20,
    textAlign: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  listText: {
    fontSize: 16,
    color: "#7F2A82",
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 20,
    paddingBottom: 10,
  },
  illustration: {
    width: "80%",
    height: 150,
    resizeMode: "contain",
  },
  bottomIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 10,
  },
  bottomIcon: {
    width: 50,
    height: 50,
  },
});

export default StepsToAvoidHarassment;
