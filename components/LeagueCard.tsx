import React from "react";
import { Text, TouchableOpacity } from "react-native";

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
      className="bg-white p-5 rounded-xl shadow-md w-36 items-center mb-4 mx-2"
    >
      <Text className="font-semibold text-darkGreen text-center">{title}</Text>
      <Text className="text-darkGreen mt-1 text-sm">Details</Text>
    </TouchableOpacity>
  );
}
