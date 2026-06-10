import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoCard({
  title,
  children,
}: InfoCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2D3748",
    marginBottom: 12,
  },

  content: {
    gap: 8,
  },
});