import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatBot from './ChatBot';

const Forum = () => {
  const apiKey = 'YOUR_API_KEY'; // Set your actual API key here
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the ChatBot!</Text>
      <ChatBot apiKey={apiKey} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EEAADC',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Forum;
