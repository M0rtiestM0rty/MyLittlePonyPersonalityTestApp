import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ResultScreen() {
  const { pony } = useLocalSearchParams<{ pony: string }>();
  const router = useRouter();

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.title}>✨ Your Pony Match ✨</Text>

        <Text style={styles.pony}>{pony}</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/(tabs)/quiz")}
        >
          <Text style={styles.buttonText}>Take Quiz Again</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FCE4EC", // soft pink
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6A1B9A", // magical purple
    marginBottom: 20,
    textAlign: "center",
  },

  pony: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 30,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#FFB6C1",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
