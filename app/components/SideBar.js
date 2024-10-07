import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const SideBar = (props) => {
  const handleLogout = () => {
    // Navigate to the Login screen
    props.navigation.navigate("LoginScreen");
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>My App</Text>
      </View>
      <DrawerItemList {...props} />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => console.log('Facebook pressed')}>
            <Image source={require('../../assets/facebook.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Instagram pressed')}>
            <Image source={require('../../assets/instagram.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('LinkedIn pressed')}>
            <Image source={require('../../assets/linkedin.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#6200ee",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  footer: {
    marginTop: 150,
    padding: 20,
    alignItems: "center",
  },
  logoutButton: {
    width: '100%', // Full width of the sidebar
    backgroundColor: "#f44336",
    padding: 15, // Adjust padding for height
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    marginBottom: 10, // Add some space below the button
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10, // Adjust top margin to control space between button and icons
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default SideBar;
