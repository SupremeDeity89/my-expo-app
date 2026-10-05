import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

const decks = {
  'react-native': [
    { q: 'Meta UI framework for native apps?', a: 'React Native' },
    { q: 'Foundational container with Flexbox?', a: 'View' },
    { q: 'Hook for dynamic state/re-render?', a: 'useState' },
    { q: 'File defining root navigator?', a: '_layout.tsx' },
    { q: 'Hook to read route parameters?', a: 'useLocalSearchParams()' },
  ],
  'expo-router': [
    { q: 'Where must screen files be placed?', a: 'app/ directory' },
    { q: 'Component for direct link navigation?', a: 'Link' },
    { q: 'Function for programmatic navigation?', a: 'router.push()' },
    { q: 'Value attached after ? in URL?', a: 'Query parameter' },
    { q: 'Operator for conditional values?', a: 'Ternary (? :)' }
  ]
};

export default function StudyScreen() {
  const { deckId } = useLocalSearchParams<{ deckId: string }>();
  const cards = decks[deckId as keyof typeof decks] || [];
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);

  if (!cards.length) return <View style={styles.c}><Text>Deck not found</Text></View>;

  return (
    <View style={styles.c}>
      <Text style={styles.sub}>Card {i + 1} of {cards.length}</Text>
      
      <Pressable style={styles.card} onPress={() => setShow(!show)}>
        <Text style={styles.label}>{show ? '💡 Answer' : '❓ Question'}</Text>
        <Text style={styles.text}>{show ? cards[i].a : cards[i].q}</Text>
      </Pressable>

      <Button 
        title={show ? "Next Card" : "Show Answer"} 
        onPress={() => {
          if (!show) setShow(true);
          else { setShow(false); setI((i + 1) % cards.length); }
        }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  c: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  sub: { marginBottom: 15, color: '#666' },
  card: { width: '100%', height: 180, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderRadius: 8, padding: 15 },
  label: { fontWeight: 'bold', color: '#888', marginBottom: 10 },
  text: { fontSize: 18, textAlign: 'center' }
});
