import { Stack } from 'expo-router';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Navigation from '../components/Navigation';

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      {/* Top Navigation for Desktop */}
      {!isMobile && <Navigation />}
      
      {/* Main Content */}
      <View style={[styles.mainContent, isMobile && styles.mainContentMobile]}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </View>
      
      {/* Bottom Navigation for Mobile */}
      {isMobile && <Navigation />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  mainContentMobile: {
    marginBottom: 64,
  },
});