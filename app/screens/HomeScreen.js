import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import custom components
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import SideBar from "../components/SideBar"; // Sidebar Component

// HomeScreen Component
function HomeContent({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  return (
    <Background>
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph style={styles.par}>
        Heyyy princess, to protect yourself and your information, please
        activate the notification AI. If you activate it, the AI will monitor
        any notification you receive, and generate a message to alert you if
        there's a potential issue or if the sender is engaging in harassment.
      </Paragraph>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Click to activate AI notification</Text>
      </TouchableOpacity>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal on back button press
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              The Notification AI is now activated!
            </Text>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Background>
  );
}

// Create the Drawer Navigator for HomeScreen
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
      <Drawer.Screen name="Home" component={HomeContent} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  par: {
    fontSize: 10,
    alignItems: "center",
    color: "#EEAADC",
    textAlign: "center",
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: "#EEAADC", // Custom background color
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#962577", // White text on the pink button
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
});

export default HomeScreen;
