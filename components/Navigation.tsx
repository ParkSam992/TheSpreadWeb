import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const navItems = [
  { label: "HOME", screen: "/", icon: "home-outline" as const },
  { label: "LEAGUES", screen: "/leagues", icon: "trophy-outline" as const },
  {
    label: "ABOUT",
    screen: "/about",
    icon: "information-circle-outline" as const,
  },
  { label: "LOGIN", screen: "/login", icon: "person-outline" as const },
];

export default function Navigation() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleNav = (screen: string) => {
    router.push(screen as any);
  };

  if (isMobile) {
    // Mobile Bottom Navigation
    return (
      <View style={styles.mobileNav}>
        {navItems.map((item) => (
          <Pressable
            key={item.screen}
            onPress={() => handleNav(item.screen)}
            style={styles.mobileNavItem}
          >
            <Ionicons name={item.icon} size={24} color="white" />
            <Text style={styles.mobileNavText}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    );
  }

  // Desktop Top Navigation
  return (
    <View style={styles.desktopNav}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Ionicons name="shield-checkmark" size={24} color="white" />
        <Text style={styles.logoText}>THE SPREAD</Text>
      </View>

      {/* Desktop Nav Items */}
      <View style={styles.desktopNavItems}>
        {navItems.slice(0, 3).map((item) => (
          <Pressable key={item.screen} onPress={() => handleNav(item.screen)}>
            <Text style={styles.navItemText}>{item.label}</Text>
          </Pressable>
        ))}
        <Pressable
          onPress={() => handleNav("/login")}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#003f2e",
    borderTopWidth: 1,
    borderTopColor: "#374151",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    zIndex: 50,
  },
  mobileNavItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  mobileNavText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
  desktopNav: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#003f2e",
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
    position: "relative",
    zIndex: 50,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  desktopNavItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },
  navItemText: {
    color: "white",
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#15803d",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 9999,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "600",
  },
});
