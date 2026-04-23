import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ponyData: any = {
  "Princess Twilight Sparkle": {
    image: require("../../assets/images/twilight.png"),
    description: "You are intelligent, organized, and love learning.",
  },
  "Rainbow Dash": {
    image: require("../../assets/images/rainbow.png"),
    description: "You are bold, competitive, and fearless.",
  },
  "Pinkie Pie": {
    image: require("../../assets/images/pinkie.png"),
    description: "You are fun, energetic, and love making others smile.",
  },
  "Applejack": {
    image: require("../../assets/images/applejack.png"),
    description: "You are honest, hardworking, and dependable.",
  },
  "Rarity": {
    image: require("../../assets/images/rarity.png"),
    description: "You are creative, stylish, and detail-oriented.",
  },
  "Fluttershy": {
    image: require("../../assets/images/fluttershy.png"),
    description: "You are kind, gentle, and compassionate.",
  },
  "Spike": {
    image: require("../../assets/images/spike.png"),
    description: "You are loyal and supportive.",
  },
  "Nightmare Moon": {
    image: require("../../assets/images/nightmaremoon.png"),
    description: "You are powerful and independent.",
  },
  "Queen Chrysalis": {
    image: require("../../assets/images/chrysalis.png"),
    description: "You are strategic and cunning.",
  },
  "King Sombra": {
    image: require("../../assets/images/sombra.png"),
    description: "You are dominant and strong-willed.",
  },
};


export default function ResultScreen() 
{
  const { pony } = useLocalSearchParams<{ pony: string }>();
  const router = useRouter();
  const data = ponyData[pony];

  return (
  <View style={styles.background}>
    <View style={styles.card}>
      <Text style={styles.title}>✨ Your Pony Match ✨</Text>

      <Text style={styles.pony}>{pony}</Text>

      {data && 
      (
        <Image
          source={data.image}
          style=
          {{
            width: 150,
            height: 150,
            marginBottom: 20,
            resizeMode: "contain",
          }}
        />
      )}

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/(tabs)/quiz")}
      >
        <Text style={styles.buttonText}>Take Quiz Again</Text>
      </Pressable>
    </View>
  </View>
);

}// end result screen 

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
