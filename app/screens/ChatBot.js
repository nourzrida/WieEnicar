import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const ChatBot = ({ apiKey }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text) => {
    const msgToSend = text || message; // Use the text if provided, otherwise use the message from the input
    if (msgToSend.trim()) {
      // Append user message to chat history
      setChatHistory((prev) => [...prev, { text: msgToSend, sender: "user" }]);

      try {
        setIsLoading(true);

        // Send message to your chosen API
        const response = await axios.post(
          "https://your-api-endpoint.com", // Replace with your actual chat API endpoint
          {
            queryInput: {
              text: {
                text: msgToSend,
                languageCode: "en",
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`, // Pass the correct API key
              "Content-Type": "application/json",
            },
          }
        );

        // Assume response contains bot message in data
        const botMessage =
          response.data.fulfillmentMessages[0].text.text[0]; // Modify based on API response structure
        setChatHistory((prev) => [...prev, { text: botMessage, sender: "bot" }]);
      } catch (error) {
        console.error("Error fetching bot response:", error);
      } finally {
        setIsLoading(false);
      }

      // Clear the input after sending
      setMessage("");
    }
  };

  // Suggested messages
  const suggestions = [
    "What are your opening hours?",
    "Tell me about your services.",
    "How can I contact support?",
    "What is your return policy?",
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={chatHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === "user" ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        style={styles.chatList}
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message..."
        placeholderTextColor="#962577" // Dark pink for placeholder
      />
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => sendMessage()}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Sending..." : "Send"}
        </Text>
      </TouchableOpacity>

      {/* Message Suggestions */}
      <View style={styles.suggestionsContainer}>
        {suggestions.map((suggestion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.suggestionButton}
            onPress={() => sendMessage(suggestion)} // Send the suggestion when pressed
          >
            <Text style={styles.suggestionText}>{suggestion}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  chatList: {
    flex: 1,
    marginBottom: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#EEAADC", // Light pink
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#f0f0f0", // Neutral for bot message
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#962577", // Dark pink for message text
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff", // White background for input
  },
  customButton: {
    backgroundColor: "#EEAADC", // Same color as the homepage background
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#962577", // Dark pink for button text
    fontSize: 16,
  },
  suggestionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  suggestionButton: {
    backgroundColor: "#EEAADC", // Same color as the homepage background
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  suggestionText: {
    color: "#962577", // Dark pink for suggestion text
    textAlign: "center",
  },
});

export default ChatBot;
