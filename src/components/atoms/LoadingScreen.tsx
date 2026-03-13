import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fcfcfc" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#04a6d8",
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
  },
});
