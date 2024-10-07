import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import BackButton from "../components/BackButton";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Asset } from "expo-asset"; // Import Asset module

const Articles = ({ navigation }) => {
  const articles = [
    {
      title: "The Rise Of Online Harassment",
      isLocal: true,
      pdfPath: require("../../assets/Silencing_Women_Gender_and_Online_Harassment.pdf"),
    },
    {
      title: "Cyberbullying in the Digital Age: Empowering Victims",
      isLocal: false,
      pdfUrl:
        "https://www.researchgate.net/publication/241843583_Cyber_stalking_An_Analysis_of_Online_Harassment_and_Intimidation",
    },
    {
      title:
        "Women in the Crosshairs: The Gendered Nature of Online Harassment",
      isLocal: false,
      pdfUrl:
        "https://documents1.worldbank.org/curated/en/099456506262310384/pdf/IDU0c7c3a5a70b56a04b250a31b0b32b8f5cd856.pdf#:~:text=Data%20collected%20by%20the%20World%20Bank%20Group%E2%80%99s%20Women,%20Business%20and",
    },
  ];

  // Function to download the PDF for a remote file
  const downloadPDF = async (pdfUrl) => {
    try {
      const fileUri = FileSystem.documentDirectory + "article.pdf"; // Local path for the PDF
      const { uri } = await FileSystem.downloadAsync(pdfUrl, fileUri);
      console.log("Finished downloading to ", uri);
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  // Function to handle local PDF sharing
  const shareLocalPDF = async (localPath) => {
    try {
      // Load the asset from the local path using Asset.fromModule
      const asset = await Asset.fromModule(localPath).downloadAsync();
      await Sharing.shareAsync(asset.localUri); // Share the actual local URI
    } catch (error) {
      console.error("Error sharing local PDF:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <Text style={styles.headerText}>Articles</Text>

      {articles.map((article, index) => (
        <View key={index} style={styles.articleCard}>
          <Text style={styles.articleText}>{article.title}</Text>
          <TouchableOpacity
            onPress={() => {
              if (article.title === "The Rise Of Online Harassment") {
                // Navigate to the OnlineHarassmentArticle page
                navigation.navigate("OnlineHarassmentArticle");
              } else if (article.isLocal) {
                shareLocalPDF(article.pdfPath); // Handle local PDFs
              } else {
                downloadPDF(article.pdfUrl); // Handle remote PDFs
              }
            }}
          >
            <Image
              source={require("../../assets/downloading.png")} // Replace with your download icon
              style={styles.downloadIcon}
            />
          </TouchableOpacity>
        </View>
      ))}

      {/* Bottom icons */}
      <View style={styles.bottomIconsContainer}>
        <Image
          source={require("../../assets/Vector.png")} // Replace with your leaf icon
          style={styles.bottomIcon}
        />
      </View>
    </ScrollView>
  );
};

// Styles for the article page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A197D", // Purple background color
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF", // White text color
    marginBottom: 20,
    textAlign: "center",
  },
  articleCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E2A4D3", // Pinkish background
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  articleText: {
    fontSize: 16,
    color: "#6A197D", // Deep purple text color
    flex: 1,
  },
  downloadIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  bottomIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  bottomIcon: {
    width: 50,
    height: 50,
  },
});

export default Articles;
