import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { theme } from "./app/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomeScreen,
} from "./app/screens";
import SideBar from "./app/components/SideBar"; // Add Sidebar import

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <SideBar {...props} />} // Set Sidebar
          >
            <Drawer.Screen name="Home" component={StackNavigator} />
            {/* Add more screens as needed */}
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
