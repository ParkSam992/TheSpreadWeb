import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Header from "../components/Header";
import LeagueCard from "../components/LeagueCard";

export default function HomePage() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View className="flex-1 bg-darkGreen">
      <ScrollView>
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <View
          className={`flex ${
            isMobile ? "flex-col px-6" : "flex-row px-12"
          } mt-10 items-center`}
        >
          {/* Text Content */}
          <View className={`${isMobile ? "w-full" : "w-1/2 pr-8"}`}>
            <Text className="text-white text-4xl font-bold leading-tight">
              The Ultimate{"\n"}Fantasy Football{"\n"}Experience
            </Text>
            <Text className="text-white text-base mt-4">
              Create your own league, draft your dream team, and compete with
              friends all season long.
            </Text>
            <TouchableOpacity className="bg-green-700 mt-6 px-6 py-3 rounded-md w-40">
              <Text className="text-white font-bold text-center">
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>

          {/* Phone Image */}
          {!isMobile && (
            <Image
              source={require("../assets/images/fantasy-league-phone.png")} // Replace this with your phone screenshot path
              className="w-64 h-96"
              resizeMode="contain"
            />
          )}
        </View>

        {/* Join a League Section */}
        <View className="bg-softGreen mt-20 px-6 py-12 rounded-t-3xl">
          <Text className="text-center text-3xl font-bold text-darkGreen">
            Join a League
          </Text>
          <Text className="text-center text-darkGreen mt-2">
            Compete in public leagues or create your own custom league.
          </Text>

          <View className="flex-row justify-center mt-8 space-x-4 flex-wrap">
            {[1, 2, 3].map((i) => (
              <LeagueCard key={i} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
