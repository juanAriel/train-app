import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface TrainStatusCardProps {
  nextStation: string;
  arrivalTime: string;
}

export default function TrainStatusCard({
  nextStation,
  arrivalTime,
}: TrainStatusCardProps) {
  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.label}>
          Próxima parada
        </Text>

        <Text style={styles.value}>
          {nextStation}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.label}>
          Hora estimada de llegada
        </Text>

        <Text style={styles.value}>
          {arrivalTime}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    elevation: 4,
  },

  header: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
    color: "#2D3748",
  },

  section: {
    marginVertical: 4,
  },

  label: {
    fontSize: 14,
    color: "#718096",
  },

  value: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: "700",
    color: "#2D3748",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 16,
  },
});