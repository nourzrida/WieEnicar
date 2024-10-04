// NotificationAIComponent.js
import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import PushNotification from "react-native-push-notification";

const NotificationAIComponent = () => {
  const [aiModeActive, setAIModeActive] = useState(false);

  // Initialize Notification Listener
  useEffect(() => {
    PushNotification.configure({
      onNotification: function (notification) {
        if (aiModeActive) {
          console.log("Notification received", notification);
          // AI logic to detect the notification
          handleAINotificationDetection(notification);
        }
      },
    });
  }, [aiModeActive]);

  // Simulate AI detecting the notification
  const handleAINotificationDetection = (notification) => {
    Alert.alert("AI Detection", `Detected notification: ${notification.title}`);
  };

  // Activate AI mode and handle notifications
  const activateAIMode = () => {
    setAIModeActive(true);
    Alert.alert("AI Mode Activated", "AI Mode is now active.");
  };

  return {
    activateAIMode, // Expose the function to HomeScreen
  };
};

export default NotificationAIComponent;
