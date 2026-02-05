import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🦄 My Little Pony</Text>
      <Text style={styles.subtitle}>Personality Quiz</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tabs)/quiz")}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE4EC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6A1B9A",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#4B0082",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFB6C1",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
