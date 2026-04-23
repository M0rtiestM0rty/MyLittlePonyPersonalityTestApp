import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

/* ------------------ DATA ------------------ */

const ponyQuestions: any = 
{
  "Princess Twilight Sparkle": 
  [
    "I enjoy studying and learning new things.",
    "I organize things for fun.",
    "I prefer reading over parties.",
  ],

  "Rainbow Dash": 
  [
    "I love competition.",
    "I enjoy adrenaline activities.",
    "I like being the best.",
  ],
  
  "Pinkie Pie": 
  [
    "I love making people laugh.",
    "I enjoy throwing parties.",
    "I’m always energetic.",
  ],
  
  "Applejack": 
  [
    "I value honesty.",
    "I prefer hard work over shortcuts.",
    "I enjoy helping others.",
  ],
  
  "Rarity": 
  [
    "I care about fashion.",
    "I enjoy making things beautiful.",
    "I notice details others miss.",
  ],

  "Fluttershy": 
  [
    "I love animals.",
    "I am shy but kind.",
    "I avoid conflict when possible.",
  ],
  
  "Spike": 
  [
    "I am loyal to my friends.",
    "I enjoy helping others succeed.",
    "I stay calm under pressure.",
  ],
  
  "Nightmare Moon": 
  [
    "I prefer working alone.",
    "I embrace power.",
    "I don’t mind being feared.",
  ],
  
  "Queen Chrysalis": 
  [
    "I am strategic.",
    "I manipulate situations to win.",
    "I value control.",
  ],
  
  "King Sombra": 
  [
    "I am dominant.",
    "I seek power above all.",
    "I intimidate others.",
  ],
};// end new ponyQuestions for the 
// ability to shuffle and minimize questions from 30 to 10 

function generateQuiz() 
{
  const selected: any[] = [];

  Object.entries(ponyQuestions).forEach(([pony, questions]) => {
    const qArray = questions as string[];
    const randomIndex = Math.floor(Math.random() * (questions as string[]).length);

    selected.push({
      pony,
      question: (questions as string[]) [randomIndex],
    });
  });

  return selected.sort(() => Math.random() - 0.5);
}// end generateQuiz()

/* ------------------ LOGIC ------------------ */

export default function QuizScreen() 
{
  const router = useRouter();
  const { reset } = useLocalSearchParams();

  const [questions, setQuestions] = useState(generateQuiz());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<any>({});

  useEffect(() => 
  {
    setQuestions(generateQuiz());
    setCurrentIndex(0);
    setScores({});
  }, [reset]);
  
  function handleAnswer(answer: boolean) 
  {
    const current = questions[currentIndex];

    if (answer) 
    {
      setScores((prev: any) => ({
        ...prev,
        [current.pony]: (prev[current.pony] || 0) + 1,
      }));
    }

    if (currentIndex + 1 < questions.length) 
    {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishQuiz();
    }
  }// end handleAnswer

  function finishQuiz() 
  {
  if (Object.keys(scores).length === 0) 
    {
    router.replace
    ({
      pathname: "/result",
      params: { pony: "Princess Twilight Sparkle" },
    });
    return;
    }

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  router.replace
  ({
    pathname: "/result",
    params: { pony: winner }, 
    // this should fix my loop back issue, allegedgedly 
  });
 }// end finishQuiz()

return (
  <LinearGradient
    colors={["#FCE4EC", "#F8BBD0", "#F48FB1"]}
    style={styles.background}
  >
    <View style={styles.card}>
      
      <Text style={styles.progress}>
        Question {currentIndex + 1} of {questions.length}
      </Text>

      <Text style={styles.question}>
        {questions[currentIndex]?.question}
      </Text>

      {/* TRUE BUTTON */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.trueButton,
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
        onPress={() => handleAnswer(true)}
      >
        <Text style={styles.buttonText}>True</Text>
      </Pressable>

      {/* FALSE BUTTON */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.falseButton,
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
        onPress={() => handleAnswer(false)}
      >
        <Text style={styles.buttonText}>False</Text>
      </Pressable>

    </View>
  </LinearGradient>
); 
}// end QuizScreen

/* ------------------ STYLES ------------------ */

const styles = StyleSheet.create
({
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

  progress: 
  {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },

  question: 
  {
    fontSize: 20,
    fontWeight: "600",
    color: "#4B0082",
    textAlign: "center",
    marginBottom: 30,
  },

  button: 
  {
    backgroundColor: "#FF4081",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
    marginTop: 10,

    shadowColor: "#FF4081",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  trueButton: 
  {
    backgroundColor: "#64e06aff",
  },

  falseButton: 
  {
    backgroundColor: "#c23b3bff",
  },

  buttonText: 
  {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
