import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  }
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Train App 🚆</Text>
    </View>
  );
}
