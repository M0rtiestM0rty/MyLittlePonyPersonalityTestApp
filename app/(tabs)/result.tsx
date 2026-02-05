import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultScreen() {
  const { answers } = useLocalSearchParams();

  const parsedAnswers = answers
    ? JSON.parse(answers as string)
    : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Pony Match</Text>
      <Text>Answers received: {parsedAnswers.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082',
  },
});
