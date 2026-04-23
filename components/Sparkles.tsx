import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

const NUM_PARTICLES = 30;

export default function Sparkles() {
  const particles = useRef(
    Array.from({ length: NUM_PARTICLES }).map(() => ({
      opacity: new Animated.Value(0),
      translateY: new Animated.Value(0),
    }))
  ).current;

  useEffect(() => {
    particles.forEach((p, i) => {
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(p.opacity, 
            {
              toValue: 1,
              duration: 400 + i * 30,
              useNativeDriver: true,
            }),
            Animated.timing(p.opacity, 
            {
              toValue: 0,
              duration: 400 + i * 30,
              useNativeDriver: true,
            }),
          ]),
          Animated.timing(p.translateY, 
            {
                toValue: -80, // float upward
                duration: 1200 + i * 80,
                useNativeDriver: true,
            }),
        ])
      ).start();
    });
  }, []);

  return (
    <View style={styles.container} pointerEvents="none">
      {particles.map((p, i) => {
        const left = Math.random() * 350;
        const top = Math.random() * 700;
        const size = Math.random() * 3 + 2; // small glitter size

        return (
          <Animated.View
            key={i}
            style={[
              styles.particle,
              {
                width: size,
                height: size,
                borderRadius: size,
                left,
                top,
                opacity: p.opacity,
                transform: [{ translateY: p.translateY }],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
  particle: {
    position: "absolute",
    backgroundColor: ["#FFF3B0", "#FFE082", "#FFD54F"][Math.floor(Math.random() * 3)],
    shadowColor: "#FFD700",
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
});