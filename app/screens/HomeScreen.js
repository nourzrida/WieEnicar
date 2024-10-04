import React, { useState } from "react";
import { View, StyleSheet, Modal, Button, Text } from "react-native";

// Import custom components
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

// HomeScreen Component
function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  return (
    <Background>
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations you are logged in.</Paragraph>

      {/* Button to open the modal */}
      <Button
        title="Click to open modal"
        onPress={() => setModalVisible(true)}
      />

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal on back button press
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Welcome to GFG!!!</Text>
            <Button
              title="Close modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </Background>
  );
}

const styles = StyleSheet.create({
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
