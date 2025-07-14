import { useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

type RoutePath = "/" | "/leagues" | "/profile";

const links: { label: string; path: RoutePath }[] = [
  { label: "Home", path: "/" },
  { label: "Leagues", path: "/leagues" },
  { label: "Profile", path: "/profile" },
];

export default function Header() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  if (isMobile) {
    return (
      <View style={styles.bottomNav}>
        {links.map((link) => (
          <Pressable
            key={link.path}
            onPress={() => router.push(link.path)}
            style={styles.bottomButton}
          >
            <Text style={styles.link}>{link.label}</Text>
          </Pressable>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.push("/")}>
        <Text style={styles.title}>MyApp</Text>
      </Pressable>
      <View style={styles.nav}>
        {links.map((link) => (
          <Pressable key={link.path} onPress={() => router.push(link.path)}>
            <Text style={styles.link}>{link.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: "#222",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  nav: {
    flexDirection: "row",
    gap: 16,
  },
  link: {
    color: "white",
    fontSize: 16,
    padding: 8,
    textAlign: "center",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#222",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 999,
  },
  bottomButton: {
    flex: 1,
    alignItems: "center",
  },
});
