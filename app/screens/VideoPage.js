import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

// Sample video data for each category
const videoData = {
  privacyAwareness: [
    { id: '1', uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { id: '2', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ],
  harassmentAbuse: [
    { id: '3', uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { id: '4', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ],
  safetyTips: [
    { id: '5', uri: 'https://sample-videos.com/video123/mp4/480/asdasdas.mp4' },
    { id: '6', uri: 'https://www.w3schools.com/html/movie.mp4' },
  ],
  fightingForConsent: [
    { id: '7', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '8', uri: 'https://sample-videos.com/video123/mp4/480/asdasdas.mp4' },
  ],
};

const VideoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('privacyAwareness');
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Search input visibility

  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: item.uri }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image source={require('../../assets/app.png')} style={styles.logo} />
          <Text style={styles.appName}>Amanah</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => setIsSearchVisible(!isSearchVisible)}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Input Field */}
      {isSearchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search videos..."
          placeholderTextColor="#962577"
        />
      )}

      <Text style={styles.title}>Choose a Category</Text>

      {/* Categories Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          {['privacyAwareness', 'harassmentAbuse', 'safetyTips', 'fightingForConsent'].map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(category)}
              style={[
                styles.categoryButton,
                selectedCategory === category ? styles.activeButton : styles.inactiveButton,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category ? styles.activeText : styles.inactiveText,
                ]}
              >
                {[
                  'Privacy Awareness',
                  'Harassment & Abuse',
                  'Safety Tips',
                  'Fighting for Consent'
                ][index]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Video List */}
      <FlatList
        data={videoData[selectedCategory]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEAADC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rightHeader: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#962577',
    color: '#962577',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  categoriesContainer: {
    justifyContent: 'space-between',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 1,
  },
  categoryButton: {
    margin : 20,
    padding: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#962577',
  },
  activeButton: {
    backgroundColor: '#962577',
  },
  inactiveButton: {
    backgroundColor: '#fff',
  },
  categoryText: {
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#962577',
  },
  list: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  videoContainer: {
    marginRight: 20,
    alignItems: 'center',
    width: width * 0.2,
    backgroundColor: '#962577',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    padding: 10,
  },
  video: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default VideoPage;
