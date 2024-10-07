import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import BackButton from "../components/BackButton"; // Assuming you have a BackButton component

const OnlineHarassmentArticle = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}

      {/* Page 1 Content */}
      {/* Title */}
      <Text style={styles.title}>
        The Rise of Online Harassment: How the Internet is Becoming a Hostile
        Place
      </Text>
      <BackButton goBack={navigation.goBack} />
      {/* Quote Section */}
      <Text style={styles.quote}>
        "Online harassment is a growing issue, violating people's rights and
        harming their well-being."
        {"\n"} — UN Women
      </Text>

      {/* Section 1 - The Scope of Online Harassment */}
      <Text style={styles.subTitle}>
        The Scope of Online Harassment (A snapshot):
      </Text>
      <Text style={styles.text}>
        In 2021, the Pew Research Center released a comprehensive report
        revealing that 41% of Americans have personally experienced some form of
        online harassment. Among these individuals, 25% reported being subjected
        to more severe forms, such as physical threats, stalking, or sustained
        harassment. While these numbers paint a disturbing picture of the
        digital environment, they also only scratch the surface of what many
        experience. Online harassment is not limited to overt threats and
        attacks. The data also shows that many users endure quieter, prolonged
        harassment that can be equally devastating...
      </Text>

      {/* Images */}
      <Image source={require("../../assets/lady.png")} style={styles.image} />
      <Image
        source={require("../../assets/Harasser.png")}
        style={styles.image}
      />

      {/* Section 2 - Psychological Impact */}
      <Text style={styles.subTitle}>
        The Psychological Impact: Harassment's Lasting Effects:
      </Text>
      <Text style={styles.text}>
        The emotional toll of online harassment is staggering. According to the
        same Pew Research Center study, 53% of harassment victims report feeling
        stressed or anxious as a direct result of their experiences. Another 37%
        report feelings of sadness or depression. These numbers are even higher
        for individuals who endure long-term or severe forms of abuse, such as
        stalking or doxxing.
      </Text>

      {/* Page 2 Content */}
      {/* Vulnerable People, Emotional Injury Section */}
      <Text style={styles.subTitle}>
        Vulnerable people, emotional injury, and actions against online
        harassment:
      </Text>
      <Text style={styles.text}>
        People with many mass media appearances were targets of all types of
        online harassment, excluding sexual harassment. By contrast, online
        media appearances did not reveal considerable effects, excluding
        harassment in public spaces. Younger people may be targeted for
        harassment in private spaces and with dating requests...
      </Text>

      {/* Actions Taken by Victims */}
      <Text style={styles.subTitle}>Actions taken by victims:</Text>
      <Text style={styles.text}>
        Victims used anti-harassment functions provided by platforms
        (blocking/reporting accounts and closing comment forms) in public and
        private spaces. Some actions included contacting legal consultants,
        reporting to the police, and seeking mental health counselors...
      </Text>

      {/* Image */}
      <Image
        source={require("../../assets/famille.png")}
        style={styles.image}
      />

      {/* Section - Bitter Silence in the Workplace */}
      <Text style={styles.subTitle}>
        Bitter Silence Allows Sexual Harassment to Continue in the Workplace:
      </Text>
      <Text style={styles.text}>
        Sexual harassment in the workplace is continuing. However, the rate of
        sexual harassment disclosure is low, which causes many problems. Family
        barriers also play a role, as nurses in this study reported they were
        silent on sexual harassment due to fear of family blame or distrust of
        others...
      </Text>

      {/* Loss of Trust Section */}
      <Text style={styles.subTitle}>Loss of Trust in Others:</Text>
      <Text style={styles.text}>
        Some nurses in the study remained silent on sexual harassment because
        they did not trust others. They were afraid that talking about this
        incident, even with close friends, would make the situation worse. "I no
        longer trusted anyone because I was afraid that my close friend would
        tell everyone about what had happened."
      </Text>

      {/* Image */}
      <Image
        source={require("../../assets/famille.png")}
        style={styles.image}
      />
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EAF5", // Light background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5D1451", // Purple tone
    textAlign: "center",
    marginBottom: 20,
  },
  quote: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#5D1451",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#F3D9F3", // Light pink background for quote
    padding: 10,
    borderRadius: 5,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7F2A82",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: "#4A1551",
    lineHeight: 24,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },
});

export default OnlineHarassmentArticle;
