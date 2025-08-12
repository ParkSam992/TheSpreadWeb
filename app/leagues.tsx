import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import LeagueCard from "../components/LeagueCard";

export default function Leagues() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: isMobile ? 80 : 20 }}>
        <View style={[styles.content, { marginTop: isMobile ? 24 : 64 }]}>
          <Text style={styles.title}>
            Fantasy Leagues
          </Text>
          <Text style={styles.subtitle}>
            Join existing leagues or create your own custom league
          </Text>
          
          {/* Create League Button */}
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>
              CREATE NEW LEAGUE
            </Text>
          </TouchableOpacity>
          
          {/* Public Leagues Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Public Leagues
            </Text>
            <Text style={styles.sectionSubtitle}>
              Join these public leagues and compete with other players
            </Text>
            
            {/* League Cards Grid */}
            <View style={isMobile ? styles.leagueGridMobile : styles.leagueGridDesktop}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <View key={i} style={isMobile ? styles.leagueCardMobile : styles.leagueCardDesktop}>
                  <LeagueCard />
                </View>
              ))}
            </View>
          </View>
          
          {/* My Leagues Section */}
          <View>
            <Text style={styles.sectionTitle}>
              My Leagues
            </Text>
            <View style={styles.emptyCard}>
              <Text style={styles.emptyText}>
                You haven't joined any leagues yet. Create or join one to get started!
              </Text>
            </View>
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
    marginBottom: 8,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 32,
  },
  createButton: {
    backgroundColor: '#15803d',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 32,
  },
  createButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionSubtitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 24,
  },
  leagueGridMobile: {
    gap: 16,
  },
  leagueGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  leagueCardMobile: {
    width: '100%',
  },
  leagueCardDesktop: {
    width: '48%',
    marginBottom: 16,
  },
  emptyCard: {
    backgroundColor: '#f0f7f2',
    padding: 24,
    borderRadius: 8,
  },
  emptyText: {
    color: '#003f2e',
    textAlign: 'center',
    fontSize: 16,
  },
});
