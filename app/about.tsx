import React from "react";
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function About() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: isMobile ? 80 : 20 }}>
        <View style={[styles.content, { marginTop: isMobile ? 24 : 64 }]}>
          <Text style={styles.title}>
            About The Spread
          </Text>
          
          <View style={styles.card}>
            <Text style={styles.cardText}>
              The Spread is the ultimate fantasy football platform where you can create leagues, 
              manage your dream team, and compete with friends all season long.
            </Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Our Mission
            </Text>
            <Text style={styles.cardText}>
              To bring the excitement and strategy of fantasy football to players everywhere 
              with an intuitive, feature-rich platform that makes league management effortless 
              and competition thrilling.
            </Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Key Features
            </Text>
            <Text style={styles.cardText}>
              • Create custom leagues with your own rules{"\n"}
              • Join public leagues and compete with others{"\n"}
              • Real-time scoring and statistics{"\n"}
              • Draft tools and player analysis{"\n"}
              • Mobile-first design for on-the-go management
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f2e',
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#f0f7f2',
    padding: 24,
    borderRadius: 8,
    marginBottom: 24,
  },
  cardTitle: {
    color: '#003f2e',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 12,
  },
  cardText: {
    color: '#003f2e',
    fontSize: 16,
    lineHeight: 24,
  },
});
