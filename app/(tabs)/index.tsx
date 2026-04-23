import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() 
{
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/MyLittlePonyBanner.png")}
        style={styles.banner}
      />
      <Text style={styles.title}>My Little Pony</Text>
      <Text style={styles.subtitle}>Personality Quiz</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/quiz")} 
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </Pressable>
    </View>
  );
}// end HomeScreen()

const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    backgroundColor: "#FCE4EC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  banner: 
  {
  width: "100%",
  height: 180,
  resizeMode: "contain",
  marginBottom: 20,
  },

  title: 
  {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6A1B9A",
    marginBottom: 10,
  },

  subtitle: 
  {
    fontSize: 18,
    color: "#4B0082",
    marginBottom: 40,
  },

  button: 
  {
    backgroundColor: "#e00d2dff",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },

  buttonText: 
  {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});// end styleSheet