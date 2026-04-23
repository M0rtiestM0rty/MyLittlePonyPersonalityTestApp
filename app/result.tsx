import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";

const ponyData: any = 
{
  "Princess Twilight Sparkle": 
  {
    image: require("../assets/images/twilight.png"),
    description: "You are intelligent, organized, and love learning.",
  },
  "Rainbow Dash": 
  {
    image: require("../assets/images/rainbow.png"),
    description: "You are bold, competitive, and fearless.",
  },
  "Pinkie Pie": 
  {
    image: require("../assets/images/pinkie.png"),
    description: "You are fun, energetic, and love making others smile.",
  },
  "Applejack": 
  {
    image: require("../assets/images/applejack.png"),
    description: "You are honest, hardworking, and dependable.",
  },
  "Rarity": 
  {
    image: require("../assets/images/rarity.png"),
    description: "You are creative, stylish, and detail-oriented.",
  },
  "Fluttershy": 
  {
    image: require("../assets/images/fluttershy.png"),
    description: "You are kind, gentle, and compassionate.",
  },
  "Spike": 
  {
    image: require("../assets/images/spike.png"),
    description: "You are loyal and supportive.",
  },
  "Nightmare Moon": 
  {
    image: require("../assets/images/nightmaremoon.png"),
    description: "You are powerful and independent.",
  },
  "Queen Chrysalis": 
  {
    image: require("../assets/images/chrysalis.png"),
    description: "You are strategic and cunning.",
  },
  "King Sombra": 
  {
    image: require("../assets/images/sombra.png"),
    description: "You are dominant and strong-willed.",
  },
};


export default function ResultScreen() 
{
  const { pony } = useLocalSearchParams<{ pony: string }>();
  const router = useRouter();
  const data = ponyData[pony];

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => 
  {
  Animated.timing(fadeAnim, 
    {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
  <LinearGradient
    colors={["#FCE4EC", "#F8BBD0", "#F48FB1"]}
    style={styles.background}
  >
    <View style={styles.card}>
      <Text style={styles.title}>✨ Your Pony Match ✨</Text>

      <Text style={styles.pony}>{pony}</Text>

        {data && (
          <Animated.View style={{ opacity: fadeAnim }}>
          <View style = {styles.glow}>  
            <Image
              source={data.image}
              style= {styles.image}
              /*{{
                width: 150,
                height: 150,
                marginBottom: 20,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              */
            />
          </View>
            <Text style={styles.description}>
              {data.description}
            </Text>
          </Animated.View>
        )}

      <Pressable
        style={styles.button}
        onPress={() =>
  router.replace({
    pathname: "/quiz",
    params: { reset: Date.now().toString() },
  })
}
      >
        <Text style={styles.buttonText}>Take Quiz Again</Text>
      </Pressable>
      <Pressable
  style={[styles.button, styles.secondaryButton]}
  onPress={() => router.replace("/")}
>
  <Text style={styles.secondaryButtonText}>Return to Home</Text>
</Pressable>
    </View>
  </LinearGradient>
);

}// end result screen 

const styles = StyleSheet.create({
  background: 
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: 
  {
  backgroundColor: "rgba(255,255,255,0.9)", // slightly glassy
  borderRadius: 24,
  paddingVertical: 40,
  paddingHorizontal: 30,
  width: "100%",
  maxWidth: 360,
  alignItems: "center",

  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 20,
  shadowOffset: { width: 0, height: 10 },
  elevation: 10,
  },

  title: 
  {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6A1B9A", // magical purple
    marginBottom: 20,
    textAlign: "center",
  },

  pony: 
  {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 30,
    textAlign: "center",
  },

  glow: 
  {
    borderRadius: 100,
    padding: 12,
    backgroundColor: "rgba(255, 182, 193, 0.25)",

    shadowColor: "#FF69B4",
    shadowOpacity: 0.8,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 0 },

    elevation: 20,

    alignItems: "center",
    justifyContent: "center",
  },

  image: 
  {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },

  description: 
  {
  textAlign: "center",
  fontSize: 16,
  color: "#333",
  marginBottom: 20,
  },

  button: 
  {
    backgroundColor: "#f20c2eff",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  secondaryButton: 
  {
  marginTop: 10,
  backgroundColor: "transparent",
  borderWidth: 2,
  borderColor: "#6A1B9A",
  paddingVertical: 14,
  paddingHorizontal: 24,
  borderRadius: 12,
},

secondaryButtonText: 
{
  color: "#6A1B9A",
  fontSize: 16,
  fontWeight: "600",
},

  buttonText: 
  {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

