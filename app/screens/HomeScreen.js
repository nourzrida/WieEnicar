import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import custom components
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import SideBar from "../components/SideBar"; // Sidebar Component
import Forum from './Forum';
import Articles from './Articles';
import VideoPage from './VideoPage';
import LadyGuide from './LadyGuide';
import Aboutus from './Aboutus'; // Import the new Forum screen

// HomeContent Component
function HomeContent({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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
        onRequestClose={() => setModalVisible(false)}
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

// Create the first Drawer Navigator for HomeScreen
const HomeDrawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <HomeDrawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
      <HomeDrawer.Screen name="Home" component={HomeContent} />
      <HomeDrawer.Screen name="LadyGuide" component={LadyGuide} />
      <HomeDrawer.Screen name="Forum" component={Forum} /> 
      <HomeDrawer.Screen name="Articles" component={Articles} />
      <HomeDrawer.Screen name="Video Page" component={VideoPage} /> 
      <HomeDrawer.Screen name="About Us" component={Aboutus} />
    </HomeDrawer.Navigator>
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
    backgroundColor: "#EEAADC",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#962577",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
