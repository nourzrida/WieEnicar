import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, TextInput, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample video data for each category
const videoData = {
  privacyAwareness: [
    { id: '1', image: require('../../assets/p_1.png'), uri: 'https://www.youtube.com/watch?v=sMLVkBxke20&pp=ygUldW5kZXJzdGFuZGluZyBwcml2YWN5IG9uIHNvY2lhbCBtZWRpYQ%3D%3D', caption: 'Understanding Privacy' },
    { id: '2', image: require('../../assets/p_3.jpg'), uri: 'https://www.youtube.com/watch?v=A1S_coh4k9s&pp=ygUeaW1wb3J0YW5jZSBvZiBwcml2YWN5IHNldHRpbmdz', caption: 'Importance of Privacy Settings' },
    { id: '3', image: require('../../assets/ss_1.jpg'), uri: 'https://www.youtube.com/watch?v=3OIzoSj7V2A&pp=ygUdUHJpdmFjeSBSaXNrcyBpbiBTb2NpYWwgTWVkaWE%3D', caption: 'Privacy Risks in Social Media' },
    { id: '4', image: require('../../assets/ss_2.jpg'), uri: 'https://www.youtube.com/watch?v=aO858HyFbKI&pp=ygUVVGlwcyBmb3IgU2FmZSBTaGFyaW5n', caption: 'Tips for Safe Sharing' },
  ],
  harassmentAbuse: [
    { id: '5', image: require('../../assets/h_1.jpg'), uri: 'https://www.youtube.com/watch?v=ZrhHC-y5xAg&pp=ygUjc29jaWFsIG1lZGlhIFJlY29nbml6aW5nIEhhcmFzc21lbnQ%3D', caption: 'Recognizing Harassment' },
    { id: '6', image: require('../../assets/h_2.jpg'), uri: 'https://www.youtube.com/watch?v=FIRoomVdkkE&t=45s&pp=ygUTSG93IHRvIFJlcG9ydCBBYnVzZQ%3D%3D', caption: 'How to Report Abuse' },
    { id: '7', image: require('../../assets/hh_1.png'), uri: 'https://www.youtube.com/watch?v=-QDjx_spkwI&t=219s&pp=ygUcc29jaWFsIG1lZGlhIEZpbmRpbmcgU3VwcG9ydA%3D%3D', caption: 'Finding Support' },
    { id: '8', image: require('../../assets/hh_2.jpg'), uri: 'https://www.youtube.com/watch?v=qGmm8997Kaw&pp=ygUic29jaWFsIG1lZGlhIFVuZGVyc3RhbmRpbmcgQ29uc2VudA%3D%3D', caption: 'Understanding Consent' },
  ],
  safetyTips: [
    { id: '9', image: require('../../assets/s_2.png'), uri: 'https://www.youtube.com/watch?v=fgd-osFId00&pp=ygUXaG93IHRvIFN0YXkgU2FmZSBPbmxpbmU%3D', caption: 'Stay Safe Online' },
    { id: '10', image: require('../../assets/s_3.png'), uri: 'https://www.youtube.com/watch?v=qZE45J-MIUg&pp=ygUgbGVhcm4gaG93IHRvIFVzaW5nIFByaXZhY3kgVG9vbHM%3D', caption: 'Using Privacy Tools' },
    { id: '11', image: require('../../assets/safe_1.jpg'), uri: 'https://www.youtube.com/watch?v=sdpxddDzXfE&pp=ygUhbGVhcm4gaG93IHRvIFByb3RlY3RpbmcgWW91ciBEYXRh', caption: 'Protecting Your Data' },
    { id: '12', image: require('../../assets/new.jpg'), uri: 'https://www.youtube.com/watch?v=HxySrSbSY7o&pp=ygUpaG93IGNhbiBpIFJlY29nbml6aW5nIG9ubGluZSBTYWZlIFNwYWNlcyA%3D', caption: 'Recognizing Safe Spaces' },
  ],
  fightingForConsent: [
    { id: '13', image: require('../../assets/f_1.jpg'), uri: 'https://www.youtube.com/watch?v=BSw6h2N4z6A&pp=ygUmaG93IGNhbiBpIFVuZGVyc3RhbmRpbmcgb25saW5lIENvbnNlbnQ%3D', caption: 'Understanding Consent' },
    { id: '14', image: require('../../assets/f_2.jpg'), uri: 'https://www.youtube.com/watch?v=raxPKklDF2k&pp=ygUhd2hhdCBpcyBUaGUgSW1wb3J0YW5jZSBvZiBDb25zZW50', caption: 'The Importance of Consent' },
    { id: '15', image: require('../../assets/fight_1.png'), uri: 'https://www.youtube.com/watch?v=ADDURepkxaM&pp=ygUnaG93IGNhbiBGaWdodGluZyBmb3IgWW91ciBSaWdodHMgb25saW5l', caption: 'Fighting for Your Rights' },
    { id: '16', image: require('../../assets/fight_2.jpg'), uri: 'https://www.youtube.com/watch?v=uzDsT-25w14&pp=ygUiaG93IHRvIEVtcG93ZXJpbmcgWW91cnNlbGYgb25saW5lIA%3D%3D', caption: 'Empowering Yourself' },
  ],
};

const VideoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('privacyAwareness');
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Search input visibility

  // Updated renderItem function to display images and open URLs
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.videoContainer}
      onPress={() => {
        // Open YouTube video in the default browser
        Linking.openURL(item.uri);
      }}
    >
      <Image
        source={item.image} // Use the actual image file from the data
        style={styles.thumbnail}
      />
      <Text style={styles.captionText}>{item.caption}</Text> 
    </TouchableOpacity>
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

      {/* Image List */}
      <FlatList
        data={videoData[selectedCategory]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false} // Disable vertical scroll indicator
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
  categoriesContainer: {
    marginBottom: 10, // Reduced margin to bring categories closer
    flexDirection: 'row',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 40, // Adjust height based on button size
    alignItems: 'center', // Center the buttons vertically
  },
  categoryButton: {
    paddingVertical: 5, // Reduce vertical padding for smaller buttons
    paddingHorizontal: 10, // Adjust horizontal padding as needed
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#962577',
    marginHorizontal: 5, // Add spacing between buttons
    alignItems: 'center', // Center the text
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
    marginTop: 10,
    marginBottom: 20, // Add space between video containers
    alignItems: 'center',
    width: width * 0.9, // Make video container wider to fit more space
    backgroundColor: '#962577',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    padding: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200, // Adjust the size as needed
    borderRadius: 10,
  },
  captionText: {
    marginTop: 5, // Space between the image and the caption
    fontSize: 14,
    color: '#fff', // Change color based on your preference
    textAlign: 'center',
    fontWeight: 'bold', // Center align the text
  },
});

export default VideoPage;
