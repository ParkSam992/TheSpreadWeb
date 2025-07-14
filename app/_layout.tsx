import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
