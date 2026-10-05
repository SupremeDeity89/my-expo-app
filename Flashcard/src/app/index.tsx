import { router } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.c}>
      <Text style={styles.t}>Flashcard App</Text>
      <Text style={styles.s}>pili-pili:</Text>
      <Button 
        title="React Native deck" 
        onPress={() => router.push({ pathname: '/study', params: { deckId: 'react-native' } })} 
      />
      <View style={{ height: 15 }} />
      <Button 
        title="Expo Router deck" 
        onPress={() => router.push({ pathname: '/study', params: { deckId: 'expo-router' } })} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  c: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  t: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  s: { fontSize: 15, fontWeight: 'bold', marginBottom: 20 }
});
