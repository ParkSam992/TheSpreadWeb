import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import LeagueCard from "../components/LeagueCard";

export default function HomePage() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: isMobile ? 80 : 20 }}>
        {/* Hero Section */}
        <View style={[
          styles.heroSection,
          isMobile ? styles.heroSectionMobile : styles.heroSectionDesktop
        ]}>
          {/* Text Content */}
          <View style={isMobile ? styles.textContentMobile : styles.textContentDesktop}>
            <Text style={styles.heroTitle}>
              The Ultimate{"\n"}Fantasy Football{"\n"}Experience
            </Text>
            <Text style={styles.heroSubtitle}>
              Create your own league, draft your dream team, and compete with
              friends all season long.
            </Text>
            <TouchableOpacity style={styles.getStartedButton}>
              <Text style={styles.getStartedButtonText}>
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>

          {/* Phone Image */}
          {!isMobile && (
            <Image
              source={require("../assets/images/fantasy-league-phone.png")}
              style={styles.phoneImage}
              resizeMode="contain"
            />
          )}
        </View>

        {/* Join a League Section */}
        <View style={styles.joinLeagueSection}>
          <Text style={styles.joinLeagueTitle}>
            Join a League
          </Text>
          <Text style={styles.joinLeagueSubtitle}>
            Compete in public leagues or create your own custom league.
          </Text>

          <View style={styles.leagueCardsContainer}>
            {[1, 2, 3].map((i) => (
              <LeagueCard key={i} />
            ))}
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
  heroSection: {
    alignItems: 'center',
  },
  heroSectionMobile: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    marginTop: 24,
  },
  heroSectionDesktop: {
    flexDirection: 'row',
    paddingHorizontal: 48,
    marginTop: 64,
  },
  textContentMobile: {
    width: '100%',
  },
  textContentDesktop: {
    width: '50%',
    paddingRight: 32,
  },
  heroTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  heroSubtitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
  },
  getStartedButton: {
    backgroundColor: '#15803d',
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
    width: 160,
  },
  getStartedButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  phoneImage: {
    width: 256,
    height: 384,
  },
  joinLeagueSection: {
    backgroundColor: '#f0f7f2',
    marginTop: 80,
    paddingHorizontal: 24,
    paddingVertical: 48,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  joinLeagueTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003f2e',
  },
  joinLeagueSubtitle: {
    textAlign: 'center',
    color: '#003f2e',
    marginTop: 8,
    fontSize: 16,
  },
  leagueCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
    flexWrap: 'wrap',
    gap: 16,
  },
});
