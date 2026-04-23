import { Stack } from "expo-router";
import Sparkles from "../components/Sparkles";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="quiz" />
        <Stack.Screen name="result" />
      </Stack>

      {/* ✨ SPARKLES OVERLAY */}
      <Sparkles />
    </>
  );
}