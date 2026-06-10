import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface RouteMapCardProps {
  currentStation: string;
}

export default function RouteMapCard({
  currentStation,
}: RouteMapCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ruta del tren
      </Text>

      <View style={styles.routeContainer}>
        <View style={styles.station} />
        <View style={styles.line} />

        <View style={styles.station} />
        <View style={styles.line} />

        <View style={styles.train}>
          <Text style={styles.trainIcon}>
            <MaterialCommunityIcons name="train" size={40} color="#000" />
          </Text>
        </View>

        <View style={styles.line} />
        <View style={styles.station} />

        <View style={styles.line} />
        <View style={styles.station} />
      </View>

      <Text style={styles.currentStation}>
        {currentStation}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },

  routeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  station: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#718096",
  },

  line: {
    width: 40,
    height: 4,
    backgroundColor: "#CBD5E0",
  },

  train: {
    marginHorizontal: 5,
  },

  trainIcon: {
    fontSize: 24,
  },

  currentStation: {
    marginTop: 15,
    textAlign: "center",
    fontWeight: "600",
    color: "#4A5568",
  },
});