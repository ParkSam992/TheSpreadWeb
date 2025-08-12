import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title?: string;
  onPress?: () => void;
};

export default function LeagueCard({
  title = "Public League",
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Details</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)',
    elevation: 5,
    width: 144,
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 8,
  },
  title: {
    fontWeight: '600',
    color: '#003f2e',
    textAlign: 'center',
    fontSize: 16,
  },
  subtitle: {
    color: '#003f2e',
    marginTop: 4,
    fontSize: 14,
  },
});
