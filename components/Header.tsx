import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

const navItems = [
  { label: "Home", screen: "Home" },
  { label: "Leagues", screen: "Leagues" },
  { label: "About", screen: "About" },
];

export default function Header() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (screen: string) => {
    setMenuOpen(false);
    navigation.navigate(screen as never);
  };

  return (
    <View className="w-full px-6 py-4 flex-row justify-between items-center bg-darkGreen z-50">
      {/* Logo */}
      <View className="flex-row items-center">
        <Ionicons name="shield-checkmark" size={24} color="white" />
        <Text className="text-white text-xl font-bold ml-2">THE SPREAD</Text>
      </View>

      {/* Desktop Nav */}
      {!isMobile && (
        <View className="flex-row items-center space-x-6">
          {navItems.map((item) => (
            <Pressable key={item.screen} onPress={() => handleNav(item.screen)}>
              <Text className="text-white">{item.label}</Text>
            </Pressable>
          ))}
          <TouchableOpacity
            onPress={() => {}}
            className="bg-green-700 px-4 py-1 rounded-full"
          >
            <Text className="text-white font-semibold">SIGN UP</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <TouchableOpacity onPress={() => setMenuOpen((prev) => !prev)}>
          <Ionicons
            name={menuOpen ? "close" : "menu"}
            size={28}
            color="white"
          />
        </TouchableOpacity>
      )}

      {/* Mobile Menu */}
      {menuOpen && isMobile && (
        <View className="absolute top-16 right-6 bg-darkGreen p-4 rounded-lg shadow-md z-50">
          {navItems.map((item) => (
            <Pressable
              key={item.screen}
              onPress={() => handleNav(item.screen)}
              className="mb-2"
            >
              <Text className="text-white text-lg">{item.label}</Text>
            </Pressable>
          ))}
          <TouchableOpacity
            onPress={() => {}}
            className="bg-green-700 mt-2 px-4 py-2 rounded-full"
          >
            <Text className="text-white font-semibold text-center">
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
