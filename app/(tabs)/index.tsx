import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() 
{
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐴 My Little Pony Personality Test</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/quiz')}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create(
{
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, marginBottom: 30 },
  button: { backgroundColor: '#FFB6C1', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 18 }
});