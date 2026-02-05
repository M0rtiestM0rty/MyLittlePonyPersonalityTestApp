import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ponies = [
  "Princess Twilight Sparkle",
  "Rarity",
  "Applejack",
  "Pinkie Pie",
  "Fluttershy",
  "Rainbow Dash",
  "Spike",
  "Nightmare Moon",
  "Queen Chrysalis",
  "King Sombra",
];

const questions = [
  "I enjoy studying and learning new things.",
  "I alphabetize things just for fun.",
  "I’d rather read a book than go to a party.",
  "I pay close attention to fashion and style.",
  "I would never wear mismatched socks—even at home.",
  "I’ve judged someone’s outfit in my head before.",
  "I value honesty and hard work.",
  "I think apples are the best fruit, hands down.",
  "I prefer a home-cooked meal over fancy dining.",
  "I love throwing parties and making others laugh.",
  "I’ve eaten dessert before dinner—and I’d do it again.",
  "I talk to inanimate objects when I’m bored.",
  "I prefer quiet moments and caring for others.",
  "I’ve cried over a cute animal video.",
  "I whisper to plants to help them grow.",
  "I thrive on competition and adventure.",
  "I’ve pretended to be in an action movie while doing something boring.",
  "I get competitive playing board games.",
  "I’m a reliable friend who helps out whenever needed.",
  "I’ve cleaned up someone else’s mess just to keep the peace.",
  "I secretly love when someone asks me for help.",
  "I sometimes feel driven by envy or ambition.",
  "I’ve imagined making a grand comeback just to prove a point.",
  "I get upset when people forget about me.",
  "I can be strategic and persuasive to get my way.",
  "I’ve pretended to like something just to fit in.",
  "I can mimic someone else’s voice or tone pretty well.",
  "I seek power and control in challenging situations.",
  "I like when people follow my lead.",
  "I enjoy the idea of being feared just a little.",
];

const pointsMatrix = [
  [2,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0],
  [0,2,0,0,0,0,0,0,0,0],[0,2,0,0,0,0,0,0,0,0],[0,2,0,0,0,0,0,0,0,0],
  [0,0,2,0,0,0,0,0,0,0],[0,0,2,0,0,0,0,0,0,0],[0,0,2,0,0,0,0,0,0,0],
  [0,0,0,2,0,0,0,0,0,0],[0,0,0,2,0,0,0,0,0,0],[0,0,0,2,0,0,0,0,0,0],
  [0,0,0,0,2,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0],
  [0,0,0,0,0,2,0,0,0,0],[0,0,0,0,0,2,0,0,0,0],[0,0,0,0,0,2,0,0,0,0],
  [0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,2,0,0,0],
  [0,0,0,0,0,0,0,2,0,0],[0,0,0,0,0,0,0,2,0,0],[0,0,0,0,0,0,0,2,0,0],
  [0,0,0,0,0,0,0,0,2,0],[0,0,0,0,0,0,0,0,2,0],[0,0,0,0,0,0,0,0,2,0],
  [0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,2],
];

/* ------------------ SCREEN ------------------ */

export default function QuizScreen() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(0)
  );

  function calculatePony(ans: number[]) {
    const scores = Array(ponies.length).fill(0);

    for (let i = 0; i < ans.length; i++) {
      if (ans[i] === 1) {
        for (let j = 0; j < ponies.length; j++) {
          scores[j] += pointsMatrix[i][j];
        }
      }
    }

    return ponies[scores.indexOf(Math.max(...scores))];
  }

  function handleAnswer(value: number) {
    const updated = [...answers];
    updated[currentQuestion] = value;
    setAnswers(updated);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const pony = calculatePony(updated);

      router.push({
        pathname: '/(tabs)/result',
        params: { pony },
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {currentQuestion + 1}. {questions[currentQuestion]}
      </Text>

      <Pressable style={styles.button} onPress={() => handleAnswer(1)}>
        <Text style={styles.buttonText}>True</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handleAnswer(0)}>
        <Text style={styles.buttonText}>False</Text>
      </Pressable>
    </View>
  );
}

/* ------------------ STYLES ------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFB6C1',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
